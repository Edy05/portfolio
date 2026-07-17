import { motion } from 'framer-motion';

export default function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Empieza invisible y 30px más abajo
      whileInView={{ opacity: 1, y: 0 }} // Al entrar en pantalla, se vuelve visible y sube a su lugar
      viewport={{ once: true, margin: "-100px" }} // Solo se anima una vez, con un margen de disparo
      transition={{ duration: 0.6, delay, ease: "easeOut" }} // Duración suave de 0.6s
    >
      {children}
    </motion.div>
  );
}