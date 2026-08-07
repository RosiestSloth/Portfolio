import { motion } from 'motion/react';
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'Sobre' },
    { to: '/works', label: 'Trabalhos' },
    { to: '/services', label: 'Serviços' },
    { to: '/gallery', label: 'Galeria' },
    { to: '/contact', label: 'Contato' },
  ];

  const activeIndex = navLinks.findIndex(
    (link) => link.to === location.pathname,
  );

  return (
    <>
      {/* Botão hambúrguer */}
      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden fixed top-4 right-4 z-100 w-12 h-12 flex flex-col items-center justify-center gap-1.5 bg-gray-100/70 backdrop-blur-sm rounded-full shadow-md border border-gray-300 cursor-pointer"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
        />
        <span
          className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
        />
        <span
          className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
        />
      </button>

      {/* Overlay */}
      {menuOpen && (
        <button
          type="button"
          aria-label="Fechar menu"
          className="lg:hidden fixed inset-0 bg-black/40 z-40 backdrop-blur-sm w-full h-full cursor-default border-none"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Drawer MOBILE */}
      <aside
        className={`
                lg:hidden fixed z-50 top-0 right-0 h-full w-64 p-6
                flex flex-col justify-center
                bg-gray-100/70 backdrop-blur-sm shadow-md border-l border-gray-300
                transition-transform duration-300
                ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
      >
        <nav className="relative">
          <ul className="flex flex-col gap-2 font-medium text-lg relative z-10">
            {navLinks.map(({ to, label }) => (
              <li key={to} className="relative">
                <NavLink
                  to={to}
                  className={({ isActive }) => `
                                         w-full rounded-full h-14 flex items-center justify-center transition-colors duration-200 cursor-pointer relative z-10
                                         ${isActive ? 'text-white' : 'text-(--tertiary-color) hover:bg-gray-800/10'}
                                     `}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          {activeIndex !== -1 && (
            <motion.div
              className="absolute left-0 right-0 bg-(--primary-color) rounded-full top-0"
              style={{
                height: '3.5rem', // h-14
              }}
              animate={{
                y: `${activeIndex * 4}rem`, // height 3.5rem + gap 0.5rem = 4rem
              }}
              transition={{
                type: 'spring',
                stiffness: 380,
                damping: 30,
              }}
            />
          )}
        </nav>
      </aside>

      {/* Header DESKTOP — pill centralizada */}
      <header
        className="
                hidden lg:flex fixed z-50
                flex-row items-center justify-center
                rounded-full p-2
                left-0 right-0 mx-auto w-max
                top-6
                bg-white/80 backdrop-blur-md shadow-md border border-gray-200/80
            "
      >
        <nav className="relative">
          <ul className="flex flex-row items-center justify-center gap-2 font-medium text-lg relative z-10">
            {navLinks.map(({ to, label }) => (
              <li key={to} className="relative">
                <NavLink
                  className={({ isActive }) => `
                                         w-30 rounded-full h-14 flex items-center justify-center transition-colors duration-200 cursor-pointer relative z-10
                                         ${isActive ? 'text-white' : 'text-(--tertiary-color) hover:bg-gray-800/10'}
                                     `}
                  to={to}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/"
                className="block relative w-14 hover:w-35 transition-all cursor-pointer h-14 overflow-hidden rounded-full bg-white border border-gray-200"
                aria-label="Página Inicial"
              >
                <img
                  src="/img/Logo_White.webp"
                  width={140}
                  height={56}
                  loading="eager"
                  className="size-full absolute object-cover object-left top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                  alt="Logo"
                />
              </Link>
            </li>
          </ul>
          {activeIndex !== -1 && (
            <motion.div
              className="absolute top-0 bottom-0 left-0 bg-(--primary-color) rounded-full"
              style={{
                width: '7.5rem', // w-30 (120px)
                height: '3.5rem', // h-14 (56px)
              }}
              animate={{
                x: `${activeIndex * 8}rem`, // w-30 (7.5rem) + gap-2 (0.5rem) = 8rem
              }}
              transition={{
                type: 'spring',
                stiffness: 380,
                damping: 30,
              }}
            />
          )}
        </nav>
      </header>
    </>
  );
}

export default Header;
