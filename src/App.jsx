import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-text">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="inicio" className="min-h-screen flex items-center">
          <Hero />
        </section>

        <section id="sobre-mi">
          <About />
        </section>

        <section id="habilidades">
          <Skills />
        </section>

        <section id="proyectos">
          <Projects />
        </section>

        <section id="contacto">
          <Contact />
        </section>
      </main>
      
      <footer className="text-center py-6 text-terminal-muted font-mono text-sm border-t border-terminal-border">
        <p>
          © 2026 | Diseñado y construido por Edisney |{' '}
          <span className="text-terminal-green">git commit -m "hired"</span>
        </p>
      </footer>
    </div>
  )
}

export default App