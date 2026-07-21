import FadeIn from './FadeIn';

export default function About() {
  return (
    <FadeIn>
      <div className="py-16">
        <h2 className="font-mono text-2xl md:text-3xl text-terminal-text mb-6">
          <span className="text-terminal-green">01.</span> Sobre mí
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Texto descriptivo (sin la lista de tecnologías) */}
          <div className="md:col-span-2 space-y-4 text-terminal-text leading-relaxed">
            <p>
              ¡Hola! Soy <span className="text-terminal-green font-semibold">Edisney</span> (puedes llamarme Edy), 
              un desarrollador Frontend apasionado por crear interfaces web modernas, 
              rápidas y accesibles. Me encanta transformar ideas en productos digitales 
              que los usuarios disfruten usar.
            </p>
            <p>
              Mi enfoque se centra en escribir <span className="text-terminal-cyan">código limpio</span>, 
              aprender nuevas tecnologías constantemente y trabajar en equipos donde pueda 
              aportar valor real. Actualmente estoy buscando oportunidades para seguir 
              creciendo como desarrollador y aportar soluciones que impacten positivamente.
            </p>
          </div>

          {/* Ventana de código estilo terminal */}
          <div className="relative group">
            <div className="relative bg-terminal-card border border-terminal-border rounded-lg p-4 font-mono">
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-terminal-border">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                <span className="text-xs text-terminal-muted ml-2">about.js</span>
              </div>
              
              <div className="text-xs space-y-1">
                <p><span className="text-terminal-cyan">const</span> <span className="text-terminal-green">developer</span> = {'{'}</p>
                <p className="pl-4"><span className="text-terminal-muted">nombre:</span> <span className="text-yellow-300">'Edisney'</span>,</p>
                <p className="pl-4"><span className="text-terminal-muted">rol:</span> <span className="text-yellow-300">'Frontend Dev'</span>,</p>
                <p className="pl-4"><span className="text-terminal-muted">ubicación:</span> <span className="text-yellow-300">'🌎'</span>,</p>
                <p className="pl-4"><span className="text-terminal-muted">disponible:</span> <span className="text-terminal-green">true</span>,</p>
                <p>{'}'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}