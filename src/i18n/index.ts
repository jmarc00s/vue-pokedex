import { createI18n } from 'vue-i18n';
import { en } from '@/i18n/en';
import { pt } from '@/i18n/pt-BR';

const messages = {
  en,
  'pt-BR': pt,
};

export const i18n = createI18n({
  legacy: false,
  locale: 'pt-BR',
  fallbackLocale: 'en',
  messages,
});
