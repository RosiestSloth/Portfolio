import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

function Hero() {
  const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

  return (
    <section className="overflow-hidden px-4 md:px-10">
      <div className="relative h-screen min-h-220 md:min-h-240">
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold md:text-center leading-snug absolute left-1/2 -translate-x-1/2 top-34 w-full md:w-130 lg:w-170 text-(--tertiary-color)"
        >
          Sou <span className="text-(--primary-color)">Vinicius</span>{' '}
          Desenvolvedor WEB
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...transition, delay: 0.2 }}
          className="w-full md:w-70 lg:w-100 text-left text-xl font-body absolute md:left-10 top-70 md:top-100 text-(--tertiary-color)/90"
        >
          "Podemos ver apenas uma curta distância à frente, mas podemos ver que
          há muito a ser feito." <br />—{' '}
          <span className="font-semibold">Alan Turing</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...transition, delay: 0.2 }}
          className="font-body text-lg lg:text-2xl font-medium absolute md:right-10 hidden md:inline-block top-100 text-(--tertiary-color)/90"
        >
          Desenvolvedor web Front End
        </motion.p>

        <div className="absolute left-1/2 -translate-x-1/2 w-full bottom-0">
          <div className="relative">
            <motion.img
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ...transition, delay: 0.4 }}
              className="absolute z-10 left-1/2 -translate-x-1/2 bottom-0 object-cover size-130 md:size-160 lg:size-200"
              src="img/Photograpy.webp"
              alt="Vinicius"
              width={800}
              height={800}
              loading="eager"
              // @ts-expect-error fetchpriority é suportado em navegadores modernos
              fetchpriority="high"
              decoding="async"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ ...transition, delay: 0.3 }}
              className="absolute bg-(--primary-color) rounded-full size-160 lg:size-220 left-1/2 -translate-x-1/2 -bottom-80 lg:-bottom-100"
            />
          </div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...transition, delay: 0.55 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-10 z-10 flex gap-2 rounded-full bg-gray-100/30 p-2 backdrop-blur shadow-md border border-gray-400"
        >
          <Link
            to="/contact"
            className="text-white flex items-center justify-center font-accent font-medium text-md rounded-full hover:bg-black/20 cursor-pointer w-35 h-12 transition duration-100"
          >
            Contate-me
          </Link>
          <a
            href="/resume"
            className="text-white flex items-center justify-center font-accent font-medium text-md rounded-full hover:bg-black/20 cursor-pointer w-35 h-12 transition duration-100"
          >
            Currículo
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
