import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

export default function Projects() {
  const projects = [
    {
      title: 'Dulce Esquina - E-commerce',
      image: '/dulce-esquina.png',
      description: 'Tienda online con carrito persistente usando Context API y navegación SPA con React Router.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Context API'],
      github: 'https://github.com/Edy05/dulce-esquina',
      demo: 'https://dulce-esquina.pages.dev',
      highlight: '🛒 Estado global con Context API',
    },
    {
      title: 'Citas Veterinaria - Sistema de Gestión',
      image: '/citas-veterinaria.png',
      description: 'CRUD completo para gestión de pacientes veterinarios con validaciones y persistencia de datos.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript ES6+'],
      github: 'https://github.com/Edy05/citas-veterinaria',
      demo: 'https://citas-veterinaria.pages.dev',
      highlight: '🏥 CRUD completo con validaciones',
    },
    {
      title: 'Nails Meli - Sitio Web para Negocio Local',
      image: '/nails-meli.png',
      description: 'Sitio web estático optimizado para clientes en Cuba (sin necesidad de VPN). Incluye catálogo de servicios y sistema de reservas directo a WhatsApp.',
      tech: ['HTML5', 'CSS3', 'JavaScript Vanilla', 'WhatsApp API'],
      github: 'https://github.com/Edy05/Nails-Meli',
      demo: 'https://nails-meli.pages.dev',
      highlight: '🇨🇺 Optimizado para conectividad en Cuba',
    },
    {
      title: 'EdyCry - Tracer de Criptomonedas',
      image: '/edycry.png', // ¡Recuerda guardar una captura como edycry.png en la carpeta public!
      description: 'Sistema de seguimiento en tiempo real que muestra la equivalencia de monedas fiat respecto a criptomonedas. Consumiendo una API externa para consultar y actualizar los valores del mercado al instante.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'API REST', 'JavaScript'],
      github: 'https://github.com/Edy05/edycry',
      demo: 'https://edycry.pages.dev',
      highlight: '📈 Consumo de API en tiempo real',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <FadeIn>
      <div className="py-16">
        <h2 className="font-mono text-2xl md:text-3xl text-terminal-text mb-3">
          <span className="text-terminal-green">03.</span> Proyectos destacados
        </h2>
        <p className="text-terminal-muted mb-8 max-w-2xl text-sm">
          Una selección de mis trabajos más recientes, desde aplicaciones React completas hasta soluciones estáticas optimizadas.
        </p>

        {/* Grid: 1 col en móvil, 2 en tablet y desktop (perfecto para 4 proyectos) */}
        <motion.div 
          className="grid md:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-terminal-card border border-terminal-border rounded-lg overflow-hidden hover:border-terminal-green transition-all duration-300 group flex flex-col"
            >
              {/* Barra superior estilo terminal */}
              <div className="flex items-center justify-between px-3 py-1.5 bg-terminal-bg border-b border-terminal-border">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  <span className="text-xs text-terminal-muted ml-2 font-mono">
                    project_{index + 1}
                  </span>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terminal-muted hover:text-terminal-green transition-colors text-xs font-mono"
                    aria-label="Ver código en GitHub"
                  >
                    [GitHub]
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terminal-muted hover:text-terminal-green transition-colors text-xs font-mono"
                    aria-label="Ver demo en vivo"
                  >
                    [Demo ↗]
                  </a>
                </div>
              </div>

              {/* Imagen */}
              <div className="relative overflow-hidden border-b border-terminal-border">
                <img 
                  src={project.image} 
                  alt={`Vista previa de ${project.title}`}
                  className="w-full h-40 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.backgroundColor = '#161b22';
                    e.target.parentElement.innerHTML = '<div class="flex items-center justify-center h-40 text-terminal-muted font-mono text-sm">[ Imagen no disponible ]</div>';
                  }}
                />
              </div>

              {/* Contenido */}
              <div className="p-4 flex flex-col flex-grow">
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-2 group/title"
                >
                  <h3 className="font-mono text-lg text-terminal-green group-hover/title:text-terminal-cyan transition-colors inline-flex items-center gap-2">
                    {project.title}
                    <span className="text-sm opacity-0 group-hover/title:opacity-100 transition-opacity">↗</span>
                  </h3>
                </a>
                
                <div className="inline-block px-2 py-0.5 bg-terminal-green/10 border border-terminal-green/30 rounded-full text-xs font-mono text-terminal-green mb-3 w-fit">
                  {project.highlight}
                </div>
                
                <p className="text-terminal-text text-sm leading-relaxed mb-3 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-terminal-bg border border-terminal-border rounded text-xs font-mono text-terminal-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 p-4 bg-terminal-card border border-terminal-border border-dashed rounded-lg text-center">
          <p className="font-mono text-terminal-muted text-xs">
            <span className="text-terminal-green">$</span> Más proyectos en{' '}
            <a 
              href="https://github.com/Edy05" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-terminal-green hover:underline"
            >
              github.com/Edy05
            </a>
          </p>
        </div>
      </div>
    </FadeIn>
  );
}