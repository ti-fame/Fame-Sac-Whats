/**
 * Configuração dos números de WhatsApp do SAC.
 *
 * Formato: apenas dígitos com código do país (55) + DDD + número.
 * Exemplo: 5511999998888
 *
 * Edite os números abaixo com os links reais da equipe.
 */
const SAC_CONFIG = {
  whatsappNumbers: [
    '5511983937530',
    '5511958515391',
    '5511958516013',
  ],

  defaultMessage: 'Olá! Gostaria de falar com o SAC da FAME.',

  /** Chave usada no localStorage para controlar a rotação */
  storageKey: 'fame_sac_whatsapp_index',
};
