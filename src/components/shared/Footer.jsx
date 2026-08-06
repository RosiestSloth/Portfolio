import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Footer() {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'Sobre' },
    { to: '/works', label: 'Trabalhos' },
    { to: '/services', label: 'Serviços' },
    { to: '/gallery', label: 'Galeria' },
    { to: '/resume', label: 'Currículo' },
    { to: '/contact', label: 'Contato' },
  ];

  return (
    <footer className="w-full flex flex-col items-center justify-center">
      {/* Primeira seção do footer */}
      <div className="text-white w-full font-body text-md bg-(--primary-color) px-6 md:px-10 lg:px-20 py-8 md:py-12">
        <p>
          “Transformando ideias em experiências digitais excepcionais através de
          código limpo, design intuitivo e foco em resultados. Vamos construir o
          futuro da web juntos.”
        </p>
      </div>
      {/* Conteúdo principal do footer */}
      <div className="bg-(--tertiary-color) w-full border-t border-gray-100 px-6 md:px-10 lg:px-20 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-start mx-auto justify-between gap-20">
          <div className="">
            <img
              src="/img/Logo White.png"
              alt="Logo White"
              className="w-40 rounded-xl"
            />
            <p className="font-body text-gray-100 mt-4">
              Desenvolvedor Full Stack apaixonado por criar experiências
              digitais incríveis.
            </p>
          </div>
          <div className="flex-1">
            <h2 className="font-heading font-bold text-white text-2xl">
              Links Rápidos
            </h2>
            <ul className="font-body mt-4 flex flex-col gap-2">
              {/* Links Rápidos */}
              {navLinks.map((link) => {
                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-gray-50 hover:text-gray-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex-1">
            <h2 className="font-heading font-bold text-white text-2xl">
              Minhas Redes
            </h2>
            <ul className="font-body mt-4 flex gap-4">
              <li className="hover:scale-105 hover:bg-gray-50/20 p-2 rounded-md transition duration-100 flex items-center justify-center">
                <a
                  target="_blank"
                  href="https://github.com/RosiestSloth"
                  rel="noopener"
                  className="text-white text-2xl"
                >
                  <FaGithub />
                </a>
              </li>
              <li className="hover:scale-105 hover:bg-gray-50/20 p-2 rounded-md transition duration-100 flex items-center justify-center">
                <a
                  target="_blank"
                  href="https://instagram.com/vinicius___santos1"
                  rel="noopener"
                  className="text-white text-2xl"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className="hover:scale-105 hover:bg-gray-50/20 p-2 rounded-md transition duration-100 flex items-center justify-center">
                <a
                  target="_blank"
                  href="https://wa.me/5562992846807"
                  rel="noopener"
                  className="text-white text-2xl"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li className="hover:scale-105 hover:bg-gray-50/20 p-2 rounded-md transition duration-100 flex items-center justify-center">
                <a
                  target="_blank"
                  href="https://linkedin.com/in/rosiestsloth"
                  rel="noopener"
                  className="text-white text-2xl"
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Direitos Autorais */}
        <p className="text-center text-gray-300 border-t border-t-gray pt-10 mt-10">
          © 2026 Vinicius Santos. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
