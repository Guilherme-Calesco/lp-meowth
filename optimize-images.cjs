const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

async function optimizeImages() {
  console.log('🖼️  Otimizando imagens...\n');

  // 1. Otimizar Favicon (CRÍTICO: 1.5MB → <50KB)
  console.log('📌 Otimizando favicon...');
  const faviconPath = path.join(publicDir, 'favicon.png');

  try {
    // Criar múltiplos tamanhos para favicon
    const faviconSizes = [
      { size: 16, name: 'favicon-16x16.png' },
      { size: 32, name: 'favicon-32x32.png' },
      { size: 48, name: 'favicon-48x48.png' },
      { size: 180, name: 'apple-touch-icon.png' },
      { size: 192, name: 'android-chrome-192x192.png' },
      { size: 512, name: 'android-chrome-512x512.png' }
    ];

    for (const { size, name } of faviconSizes) {
      await sharp(faviconPath)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png({ quality: 90, compressionLevel: 9 })
        .toFile(path.join(publicDir, name));

      const stats = fs.statSync(path.join(publicDir, name));
      console.log(`  ✓ ${name}: ${(stats.size / 1024).toFixed(2)}KB`);
    }

    // Renomear o favicon original para backup
    const backupPath = path.join(publicDir, 'favicon-original-backup.png');
    if (!fs.existsSync(backupPath)) {
      fs.renameSync(faviconPath, backupPath);
      console.log('  ✓ Favicon original salvo como backup');
    }

    // Usar o 32x32 como favicon.png principal
    fs.copyFileSync(
      path.join(publicDir, 'favicon-32x32.png'),
      faviconPath
    );
    console.log('  ✓ favicon.png otimizado criado');

  } catch (error) {
    console.error('  ✗ Erro ao otimizar favicon:', error.message);
  }

  // 2. Converter Screenshots para WebP
  console.log('\n📱 Convertendo screenshots para WebP...');
  const screenshots = [
    'apphome.png',
    'appmenu.png',
    'appprodutos.png',
    'appvitrine.png',
    'appvitrine (2).png'
  ];

  for (const screenshot of screenshots) {
    const inputPath = path.join(publicDir, screenshot);
    if (!fs.existsSync(inputPath)) {
      console.log(`  ⊘ ${screenshot} não encontrado`);
      continue;
    }

    try {
      const webpName = screenshot.replace('.png', '.webp');

      // Versão WebP full size (qualidade 85)
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(path.join(publicDir, webpName));

      const webpStats = fs.statSync(path.join(publicDir, webpName));
      const originalStats = fs.statSync(inputPath);
      const reduction = ((1 - webpStats.size / originalStats.size) * 100).toFixed(1);

      console.log(`  ✓ ${webpName}: ${(webpStats.size / 1024).toFixed(2)}KB (${reduction}% redução)`);

      // Versão mobile (360px width)
      const mobileName = screenshot.replace('.png', '-mobile.webp');
      await sharp(inputPath)
        .resize(360, null, { fit: 'inside' })
        .webp({ quality: 85 })
        .toFile(path.join(publicDir, mobileName));

      const mobileStats = fs.statSync(path.join(publicDir, mobileName));
      console.log(`  ✓ ${mobileName}: ${(mobileStats.size / 1024).toFixed(2)}KB`);

      // Versão tablet (768px width)
      const tabletName = screenshot.replace('.png', '-tablet.webp');
      await sharp(inputPath)
        .resize(768, null, { fit: 'inside' })
        .webp({ quality: 85 })
        .toFile(path.join(publicDir, tabletName));

      const tabletStats = fs.statSync(path.join(publicDir, tabletName));
      console.log(`  ✓ ${tabletName}: ${(tabletStats.size / 1024).toFixed(2)}KB\n`);

    } catch (error) {
      console.error(`  ✗ Erro ao processar ${screenshot}:`, error.message);
    }
  }

  console.log('\n✨ Otimização completa!');
}

optimizeImages().catch(console.error);
