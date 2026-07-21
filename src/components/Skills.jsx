import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import { 
  SiReact, SiJavascript, SiTypescript, SiTailwindcss, SiHtml5,
  SiGit, SiGithub, SiVite, SiNpm, SiFigma,
  SiNodedotjs, SiExpress
} from 'react-icons/si';
import { FaCode, FaServer, FaHandshake, FaComments, FaPuzzlePiece, FaBolt, FaLaptopCode } from 'react-icons/fa';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: FaCode, color: '#1572B6' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      ],
    },
    {
      title: 'Herramientas',
      icon: '🛠️',
      skills: [
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
        { name: 'VS Code', icon: FaLaptopCode, color: '#007ACC' },
        { name: 'Vite', icon: SiVite, color: '#646CFF' },
        { name: 'npm', icon: SiNpm, color: '#CB3837' },
        { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      ],
    },
    {
      title: 'Backend (Básico)',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express', icon: SiExpress, color: '#ffffff' },
        { name: 'REST APIs', icon: FaServer, color: '#68A063' },
        { name: 'JSON', icon: FaCode, color: '#FFA500' },
      ],
    },
    {
      title: 'Blandas',
      icon: '🤝',
      skills: [
        { name: 'Trabajo en equipo', icon: FaHandshake, color: '#00ff9d' },
        { name: 'Comunicación', icon: FaComments, color: '#00e5ff' },
        { name: 'Resolución de problemas', icon: FaPuzzlePiece, color: '#FFD700' },
        { name: 'Aprendizaje rápido', icon: FaBolt, color: '#FF6B6B' },
      ],
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
        <h2 className="font-mono text-2xl md:text-3xl text-terminal-text mb-6">
          <span className="text-terminal-green">02.</span> Habilidades
        </h2>

        <motion.div 
          className="grid sm:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-terminal-card border border-terminal-border rounded-lg p-5 hover:border-terminal-green transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-terminal-border">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="font-mono text-xl text-terminal-green">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-2 p-3 bg-terminal-bg border border-terminal-border rounded-lg hover:border-terminal-green transition-all duration-300 group"
                    >
                      <IconComponent 
                        className="text-3xl transition-transform duration-300 group-hover:scale-110"
                        style={{ color: skill.color }}
                      />
                      <span className="text-xs font-mono text-terminal-muted text-center">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </FadeIn>
  );
}