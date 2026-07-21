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
      description: 'Sitio web estático optimizado para clientes en Cuba (sin necesidad de VPN). Incluye catálogo de servicios y reservas a WhatsApp.',
      tech: ['HTML5', 'CSS3', 'JavaScript Vanilla', 'WhatsApp API'],
      github: 'https://github.com/Edy05/Nails-Meli',
      demo: 'https://nails-meli.pages.dev',
      highlight: '🇨🇺 Optimizado para conectividad en Cuba',
    },
    {
      title: 'EdyCry - Tracer de Criptomonedas',
      image: '/edycry.png',
      description: 'Sistema de seguimiento en tiempo real que muestra la equivalencia de monedas fiat respecto a criptomonedas consumiendo una API externa.',
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
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <FadeIn>
      <div className="py-12">
        <h2 className="font-mono text-2xl md:text-3xl text-terminal-text mb-2">
          <span className="text-terminal-green">03.</span> Proyectos destacados
        </h2>
        <p className="text-terminal-muted mb-6 max-w-2xl text-sm">
          Una selección de mis trabajos más recientes.
        </p>

        <motion.div 
          className="grid md:grid-cols-2 gap-4"
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
              {/* Barra superior estilo terminal (más compacta) */}
              <div className="flex items-center justify-between px-2.5 py-1 bg-terminal-bg border-b border-terminal-border">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-[10px] text-terminal-muted ml-1.5 font-mono">
                    project_{index + 1}
                  </span>
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terminal-muted hover:text-terminal-green transition-colors text-[10px] font-mono"
                  >
                    [GitHub]
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terminal-muted hover:text-terminal-green transition-colors text-[10px] font-mono"
                  >
                    [Demo ↗]
                  </a>
                </div>
              </div>

              {/* Imagen (más compacta) */}
              <div className="relative overflow-hidden border-b border-terminal-border">
                <img 
                  src={project.image} 
                  alt={`Vista previa de ${project.title}`}
                  className="w-full h-32 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.backgroundColor = '#161b22';
                    e.target.parentElement.innerHTML = '<div class="flex items-center justify-center h-32 text-terminal-muted font-mono text-xs">[ Imagen no disponible ]</div>';
                  }}
                />
              </div>

              {/* Contenido (más compacto) */}
              <div className="p-3 flex flex-col flex-grow">
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-1.5 group/title"
                >
                  <h3 className="font-mono text-base text-terminal-green group-hover/title:text-terminal-cyan transition-colors inline-flex items-center gap-1.5">
                    {project.title}
                    <span className="text-sm opacity-0 group-hover/title:opacity-100 transition-opacity">↗</span>
                  </h3>
                </a>
                
                <div className="inline-block px-1.5 py-0.5 bg-terminal-green/10 border border-terminal-green/30 rounded-full text-[10px] font-mono text-terminal-green mb-2 w-fit">
                  {project.highlight}
                </div>
                
                <p className="text-terminal-text text-xs leading-snug mb-2 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-1.5 py-0.5 bg-terminal-bg border border-terminal-border rounded text-[10px] font-mono text-terminal-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </FadeIn>
  );
}