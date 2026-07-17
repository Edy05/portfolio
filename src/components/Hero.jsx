import FadeIn from './FadeIn';

export default function Hero() {
  return (
    <FadeIn>
      <div className="min-h-screen flex flex-col justify-center items-start pt-16">
        <p className="font-mono text-terminal-green mb-4">Hola, mi nombre es</p>
        <h1 className="text-5xl md:text-7xl font-bold text-terminal-text mb-4">Edisney.</h1>
        <h2 className="text-4xl md:text-6xl font-bold text-terminal-muted mb-6">
          Construyo cosas para la web.
        </h2>
        <p className="max-w-xl text-terminal-muted text-lg mb-8 leading-relaxed">
          Soy un desarrollador Frontend especializado en crear experiencias digitales 
          excepcionales. Actualmente, estoy enfocado en construir productos accesibles 
          y centrados en el usuario.
        </p>
        
        <a 
          href="#proyectos" 
          className="font-mono px-6 py-3 border border-terminal-green text-terminal-green rounded hover:bg-terminal-green/10 transition-all duration-300"
        >
          Ver mis proyectos
        </a>
      </div>
    </FadeIn>
  );
}