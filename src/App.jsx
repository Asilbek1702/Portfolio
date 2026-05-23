import ParticlesBackground from './components/ParticlesBackground'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import TechStack from './sections/TechStack'
import Projects from './sections/Projects'
import AITools from './sections/AITools'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="noise-bg relative min-h-screen bg-bg text-bright overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <AITools />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
