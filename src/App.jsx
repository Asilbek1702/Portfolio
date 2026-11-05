import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import TechStack from './sections/TechStack'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import AITools from './sections/AITools'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="portfolio-shell relative min-h-screen bg-bg text-bright overflow-x-hidden">
      <div className="ambient-grid" aria-hidden="true" />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" className="relative z-10" tabIndex="-1">
        <Hero />
        <Projects />
        <About />
        <TechStack />
        <Experience />
        <AITools />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
