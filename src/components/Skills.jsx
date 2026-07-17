import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

export default function Skills() {
  const skillCategories = [
    { title: 'Frontend', icon: '🎨', skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'TypeScript'] },
    { title: 'Herramientas', icon: '🛠️', skills: ['Git', 'GitHub', 'VS Code', 'Vite', 'npm', 'Figma'] },
    { title: 'Backend (Básico)', icon: '⚙️', skills: ['Node.js', 'Express', 'REST APIs', 'JSON'] },
    { title: 'Blandas', icon: '🤝', skills: ['Trabajo en equipo', 'Comunicación', 'Resolución de problemas', 'Aprendizaje rápido'] },
  ];

  // Configuración para el efecto cascada (stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 } // Cada hijo aparece 0.15s después del anterior
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <FadeIn>
      <div className="py-20">
        <h2 className="font-mono text-3xl md:text-4xl text-terminal-text mb-8">
          <span className="text-terminal-green">02.</span> Habilidades
        </h2>

        <motion.div 
          className="grid sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-terminal-card border border-terminal-border rounded-lg p-6 hover:border-terminal-green transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-terminal-border">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="font-mono text-xl text-terminal-green">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-terminal-bg border border-terminal-border rounded-full text-sm font-mono text-terminal-text hover:border-terminal-green hover:text-terminal-green transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </FadeIn>
  );
}