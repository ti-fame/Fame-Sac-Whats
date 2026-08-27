/**
 * Lógica compartilhada de redirecionamento WhatsApp (round-robin).
 * Usada pelas funções serverless da Netlify e Vercel.
 */

const DEFAULT_NUMBERS = [
  '5511983937530',
  '5511958515391',
  '5511958516013',
];

const DEFAULT_MESSAGE = 'Olá! Gostaria de falar com o SAC da FAME.';

function getNumbersFromEnv() {
  const envNumbers = process.env.WHATSAPP_NUMBERS;
  if (envNumbers) {
    return envNumbers.split(',').map((n) => n.trim()).filter(Boolean);
  }
  return DEFAULT_NUMBERS;
}

function getMessageFromEnv() {
  return process.env.WHATSAPP_MESSAGE || DEFAULT_MESSAGE;
}

/**
 * Round-robin usando contador em memória do processo.
 * Em serverless, distribui entre invocações quentes; complementado por índice temporal.
 */
let memoryCounter = 0;

function getNextIndex(total) {
  memoryCounter = (memoryCounter + 1) % total;
  const timeIndex = Math.floor(Date.now() / 1000) % total;
  return (memoryCounter + timeIndex) % total;
}

function buildRedirectUrl() {
  const numbers = getNumbersFromEnv();
  const message = encodeURIComponent(getMessageFromEnv());
  const index = getNextIndex(numbers.length);
  const number = numbers[index];

  return `https://wa.me/${number}?text=${message}`;
}

module.exports = { buildRedirectUrl, getNumbersFromEnv, getMessageFromEnv };
