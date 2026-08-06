/**
 * Utility para limitação de requisições (Rate Limiting) baseada no navegador (localStorage).
 * 100% focado em privacidade: Armazena apenas marcas temporais (timestamps) numéricas.
 * NENHUM dado pessoal, IP, nome ou email é coletado ou armazenado.
 */

const STORAGE_KEY = 'contact_form_rate_limit';

// Configurações do Limite
const COOLDOWN_SECONDS = 60; // Cooldown mínimo entre envios (1 minuto)
const MAX_SUBMISSIONS_PER_WINDOW = 3; // Limite máximo de envios por janela de tempo
const WINDOW_MINUTES = 60; // Janela de tempo (1 hora)

/**
 * Obtém a lista de timestamps válidos dentro da janela de tempo atual
 */
function getValidTimestamps() {
  try {
    const rawData = localStorage.getItem(STORAGE_KEY);
    if (!rawData) return [];

    const timestamps = JSON.parse(rawData);
    if (!Array.isArray(timestamps)) return [];

    const now = Date.now();
    const windowMs = WINDOW_MINUTES * 60 * 1000;

    // Mantém apenas os envios feitos na última hora
    return timestamps.filter(
      (ts) => typeof ts === 'number' && now - ts < windowMs,
    );
  } catch {
    return [];
  }
}

/**
 * Verifica se o usuário pode fazer um novo envio
 * @returns {{ allowed: boolean, message?: string, remainingSeconds?: number }}
 */
export function checkRateLimit() {
  const timestamps = getValidTimestamps();
  const now = Date.now();

  // 1. Verifica se está dentro do tempo de espera entre envios sucessivos (cooldown)
  if (timestamps.length > 0) {
    const lastSubmission = timestamps[timestamps.length - 1];
    const elapsedSeconds = Math.floor((now - lastSubmission) / 1000);

    if (elapsedSeconds < COOLDOWN_SECONDS) {
      const remainingSeconds = COOLDOWN_SECONDS - elapsedSeconds;
      return {
        allowed: false,
        remainingSeconds,
        message: `Por favor, aguarde ${remainingSeconds} segundo(s) antes de enviar outra mensagem.`,
      };
    }
  }

  // 2. Verifica se atingiu o número máximo de envios por hora
  if (timestamps.length >= MAX_SUBMISSIONS_PER_WINDOW) {
    const oldestSubmission = timestamps[0];
    const windowMs = WINDOW_MINUTES * 60 * 1000;
    const resetTimeMs = oldestSubmission + windowMs;
    const remainingMinutes = Math.ceil((resetTimeMs - now) / (1000 * 60));

    return {
      allowed: false,
      remainingSeconds: Math.ceil((resetTimeMs - now) / 1000),
      message: `Limite de envios atingido (${MAX_SUBMISSIONS_PER_WINDOW} mensagens por hora). Tente novamente em cerca de ${remainingMinutes} minuto(s).`,
    };
  }

  return { allowed: true };
}

/**
 * Registra o timestamp do envio bem-sucedido no localStorage
 */
export function recordSubmission() {
  try {
    const timestamps = getValidTimestamps();
    timestamps.push(Date.now());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(timestamps));
  } catch (error) {
    console.warn(
      'Aviso: Não foi possível salvar o limite no localStorage:',
      error,
    );
  }
}
