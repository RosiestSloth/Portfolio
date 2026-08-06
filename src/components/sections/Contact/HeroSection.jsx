import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaSpinner,
  FaWhatsapp,
} from 'react-icons/fa6';
import { checkRateLimit, recordSubmission } from '@/utils/rateLimiter';

// ─── CONFIGURAÇÃO DO SERVIÇO DE EMAIL ─────────────────────────────────────────
// A chave é carregada com segurança de arquivos de ambiente (.env ou .env.local).
// Obtenha sua chave gratuita em https://web3forms.com e configure-a em seu arquivo .env local.
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';

function HeroSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    botcheck: '',
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Anti-spam Honeypot: se preenchido por robôs, rejeita silenciosamente
    if (formData.botcheck) {
      return;
    }

    // Rate Limiting local (sem captura de IP ou dados pessoais)
    const rateCheck = checkRateLimit();
    if (!rateCheck.allowed) {
      setStatus('error');
      setErrorMessage(rateCheck.message);
      return;
    }

    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus('error');
      setErrorMessage(
        'Erro de configuração: Chave de API de e-mail não encontrada.',
      );
      console.error(
        'VITE_WEB3FORMS_ACCESS_KEY não está definida nas variáveis de ambiente.',
      );
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // Usando Web3Forms para envio sem servidor backend
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Novo contato do Portfólio - ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        recordSubmission();
        setStatus('success');
        setFormData({ name: '', email: '', message: '', botcheck: '' }); // Limpa o formulário
      } else {
        throw new Error(
          result.message || 'Ocorreu um erro ao enviar a mensagem.',
        );
      }
    } catch (error) {
      console.error('Erro no envio do form:', error);
      setStatus('error');
      setErrorMessage(
        error.message ||
          'Erro de conexão. Verifique sua rede ou tente novamente.',
      );
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      link: 'https://linkedin.com/in/rosiestsloth',
      color: 'hover:bg-blue-600',
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      link: 'https://github.com/RosiestSloth',
      color: 'hover:bg-gray-800',
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      link: 'https://wa.me/5562992846807',
      color: 'hover:bg-green-500',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      link: 'https://instagram.com/vinicius___santos1',
      color: 'hover:bg-pink-600',
    },
  ];

  return (
    <section className="px-6 md:px-10 lg:px-20 pt-10 bg-gray-50 lg:pt-30 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heading text-4xl font-bold mb-6 text-(--tertiary-color)">
            Vamos conversar?
          </h1>
          <p className="text-(--tertiary-color)/90 mb-8 font-body text-lg">
            Seja para um projeto, uma colaboração ou apenas para dar um "oi",
            estou sempre aberto a novas conexões.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-(--primary-color)/10 flex items-center justify-center">
                <FaEnvelope className="size-6 text-(--primary-color)" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-(--tertiary-color)">
                  Email
                </h4>
                <p className="font-body text-(--tertiary-color)/70 text-sm">
                  vs17012005santos@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-(--primary-color)/10 flex items-center justify-center">
                <FaLocationDot className="size-6 text-(--primary-color)" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-(--tertiary-color)">
                  Localização
                </h4>
                <p className="font-body text-(--tertiary-color)/70 text-sm">
                  Brasil
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h4 className="font-heading font-bold text-(--tertiary-color) mb-4">
              Redes Sociais
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`size-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110 group`}
                >
                  <social.icon className="size-5 text-gray-700 group-hover:text-white transition-all" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Campo Honeypot para proteção contra Bots (invisível para usuários humanos) */}
            <input
              type="checkbox"
              id="botcheck"
              name="botcheck"
              className="hidden"
              style={{ display: 'none' }}
              checked={Boolean(formData.botcheck)}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, botcheck: e.target.checked }))
              }
            />
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-heading font-bold text-(--tertiary-color) mb-1"
              >
                Nome
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                disabled={status === 'loading'}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-(--primary-color) focus:ring-2 focus:ring-(--primary-color)/20 outline-none transition-all font-body disabled:opacity-50"
                placeholder="Seu nome"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-heading font-bold text-(--tertiary-color) mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                disabled={status === 'loading'}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-(--primary-color) focus:ring-2 focus:ring-(--primary-color)/20 outline-none transition-all font-body disabled:opacity-50"
                placeholder="seu@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-heading font-bold text-(--tertiary-color) mb-1"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'loading'}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-(--primary-color) focus:ring-2 focus:ring-(--primary-color)/20 outline-none transition-all font-body resize-none disabled:opacity-50"
                placeholder="Como posso ajudar?"
                required
              ></textarea>
            </div>

            {/* Banners de Feedback com Animação */}
            <AnimatePresence mode="wait">
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-body flex items-center gap-2"
                >
                  <span>✅</span> Mensagem enviada com sucesso! Entrarei em
                  contato em breve.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm font-body flex items-center gap-2"
                >
                  <span>⚠️</span> {errorMessage || 'Erro ao enviar a mensagem.'}
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-(--primary-color) text-white font-accent font-bold py-4 rounded-lg hover:bg-(--primary-color)/90 transition-all shadow-lg shadow-(--primary-color)/30 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <FaSpinner className="animate-spin h-5 w-5 text-white" />
                  Enviando...
                </>
              ) : (
                'Enviar Mensagem'
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
