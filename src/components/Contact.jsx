import FadeIn from './FadeIn';
export default function Contact() {
  return (
       <FadeIn>
    <div className="py-20 text-center">
      <h2 className="font-mono text-3xl md:text-4xl text-terminal-text mb-6">
        <span className="text-terminal-green">04.</span> ¿Hablamos?
      </h2>

      <p className="max-w-xl mx-auto text-terminal-text leading-relaxed mb-8">
        Actualmente estoy buscando nuevas oportunidades como desarrollador Frontend. 
        Si tienes una vacante, un proyecto interesante o simplemente quieres saludar, 
        ¡mi bandeja de entrada está abierta! Te responderé lo antes posible.
      </p>

      {/* Botón principal */}
      <a
        href="mailto:tu-email@ejemplo.com"
        className="inline-block font-mono px-8 py-4 border-2 border-terminal-green text-terminal-green rounded hover:bg-terminal-green/10 transition-all duration-300 mb-12"
      >
        $ enviar_mensaje
      </a>

      {/* Redes sociales */}
      <div className="flex justify-center gap-6 font-mono text-terminal-muted">
        <a
          href="https://github.com/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-terminal-green transition-colors"
        >
          [GitHub]
        </a>
        <a
          href="https://linkedin.com/in/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-terminal-green transition-colors"
        >
          [LinkedIn]
        </a>
        <a
          href="mailto:tu-email@ejemplo.com"
          className="hover:text-terminal-green transition-colors"
        >
          [Email]
        </a>
      </div>
    </div>
    </FadeIn>
  );
}