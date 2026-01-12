import { lazy, Suspense } from 'react'
import {
  Header,
  Hero,
  Problem,
  Features,
  Footer
} from './components'

// Lazy load componentes below-fold para melhor performance
const AppGallery = lazy(() => import('./components/AppGallery').then(m => ({ default: m.AppGallery })))
const Pricing = lazy(() => import('./components/Pricing').then(m => ({ default: m.Pricing })))
const Benefits = lazy(() => import('./components/Benefits').then(m => ({ default: m.Benefits })))
const Story = lazy(() => import('./components/Story').then(m => ({ default: m.Story })))
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })))
const CTA = lazy(() => import('./components/CTA').then(m => ({ default: m.CTA })))

// Componente de loading simples
function LazyLoadFallback() {
  return (
    <div className="py-16 flex justify-center items-center">
      <div className="w-8 h-8 border-4 border-miaza-200 border-t-miaza-600 rounded-full animate-spin"></div>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Features />

        <Suspense fallback={<LazyLoadFallback />}>
          <AppGallery />
        </Suspense>

        <Suspense fallback={<LazyLoadFallback />}>
          <Pricing />
        </Suspense>

        <Suspense fallback={<LazyLoadFallback />}>
          <Benefits />
        </Suspense>

        <Suspense fallback={<LazyLoadFallback />}>
          <Story />
        </Suspense>

        <Suspense fallback={<LazyLoadFallback />}>
          <FAQ />
        </Suspense>

        <Suspense fallback={<LazyLoadFallback />}>
          <CTA />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
