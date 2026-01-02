import {
  Header,
  Hero,
  Problem,
  Features,
  Pricing,
  Benefits,
  FAQ,
  CTA,
  Footer
} from './components'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Pricing />
        <Benefits />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
