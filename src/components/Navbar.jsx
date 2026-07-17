import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  // Función para cerrar el menú al hacer clic en un enlace
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-terminal-bg/90 backdrop-blur-sm border-b border-terminal-border z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo estilo terminal */}
          <a href="#inicio" className="font-mono text-terminal-green font-bold text-xl">
            &gt; Edisney_Dev<span className="cursor-blink"></span>
          </a>
          
          {/* Enlaces de navegación - Desktop */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-terminal-muted hover:text-terminal-green transition-colors duration-300 text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Botón hamburguesa - Móvil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 group"
            aria-label="Abrir menú de navegación"
            aria-expanded={isOpen}
          >
            <span 
              className={`block w-6 h-0.5 bg-terminal-green transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span 
              className={`block w-6 h-0.5 bg-terminal-green transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span 
              className={`block w-6 h-0.5 bg-terminal-green transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Menú desplegable - Móvil */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-3 bg-terminal-bg border-t border-terminal-border">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="block font-mono text-terminal-muted hover:text-terminal-green transition-colors duration-300 text-sm py-2 border-b border-terminal-border last:border-b-0"
            >
              <span className="text-terminal-green mr-2">▹</span>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}