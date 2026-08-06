import { motion } from 'motion/react';
import { FaUser } from 'react-icons/fa6';

function Hero() {
  const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] };

  return (
    <section className="px-6 md:px-10 lg:px-20 py-8 md:py-14 mt-4 lg:mt-10 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-2 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-(--primary-color)/10 border border-(--primary-color)/20 text-(--primary-color) text-xs font-accent font-semibold mb-4"
        >
          <FaUser className="size-3.5" />
          <span>01 / Visão Geral & Perfil</span>
        </motion.div>

        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={transition}
          className="relative border-(--primary-color) border-2 rounded-full h-8 w-78 mb-6"
        >
          <span className="bg-(--primary-color) size-4 rounded-full absolute left-4 border-2 border-white top-1/2 -translate-y-1/2" />
          <div className="bg-(--primary-color)/70 blur-md animate-pulse absolute size-10 left-0 top-1/2 -translate-y-1/2 -z-1" />
          <p className="absolute right-4 top-1/2 -translate-y-1/2  font-accent font-semibold text-sm text-(--tertiary-color)">
            Disponível para novos projetos
          </p>
        </motion.div>


        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...transition, delay: 0.15 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-snug text-(--tertiary-color) mb-4 lg:mb-6"
        >
          Meu nome é{' '}
          <span className="text-(--primary-color) block">Vinicius Santos</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...transition, delay: 0.3 }}
          className="font-body leading-relaxed text-(--tertiary-color)/90"
        >
          Sou desenvolvedor Full Stack e designer UI/UX com foco em construir
          experiências digitais acessíveis, rápidas e centradas no usuário. Meu
          objetivo é alinhar design visual e engenharia de software para
          entregar soluções que resolvem problemas reais.
        </motion.p>
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ ...transition, delay: 0.4 }}
        className="relative flex-1"
      >
        <img
          src="/svg/BlueBackground.svg"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          alt=""
        />
      </motion.div>
    </section>
  );
}

export default Hero;
