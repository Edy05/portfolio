import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

export default function Projects() {
  const projects = [
    {
      title: 'Dulce Esquina - E-commerce de Chucherías',
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
      demo: 'https://citas-veterinaria-raact.netlify.app',
      highlight: '🏥 CRUD completo con validaciones',
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
          Una selección de mis trabajos más recientes.
        </p>

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
              className="bg-terminal-card border border-terminal-border rounded-lg overflow-hidden hover:border-terminal-green transition-all duration-300 group"
            >
              {/* Barra superior estilo terminal - más compacta */}
              <div className="flex items-center justify-between px-3 py-1.5 bg-terminal-bg border-b border-terminal-border">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  <span className="text-xs text-terminal-muted ml-2 font-mono">
                    project_{index + 1}.jsx
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

              {/* Imagen - más compacta */}
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

              {/* Contenido - más compacto */}
              <div className="p-4">
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
                
                <div className="inline-block px-2 py-0.5 bg-terminal-green/10 border border-terminal-green/30 rounded-full text-xs font-mono text-terminal-green mb-3">
                  {project.highlight}
                </div>
                
                <p className="text-terminal-text text-sm leading-relaxed mb-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5">
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