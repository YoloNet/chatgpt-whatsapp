export const APP_NAME = 'ChatGPT BOT';
export const PREFIXES = [
  'gpt',
  'GPT',
  'gpt3',
  'GPT3',
  'gpt-3',
  'GPT-3',
  'bot',
  'Bot',
  'BOT',
]; // Prefixes that when included in the user's input, the message will be sent to the model (GROUP CHATS ONLY)

export const REMOVABLE_PREFIXES = ['bot']; // Prefixes that should be removed from the user's input before message is sent to the model

export const OPENAI_MODEL = 'gpt-4o-mini';

export const DEFAULT_SYSTEM_MESSAGE = `You are ChatGPT running as a WhatsApp bot developed by OpenAI; Answer as concisely as possible.`;
