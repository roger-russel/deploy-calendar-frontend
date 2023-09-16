import { createI18n } from "vue-i18n";

import vEn from 'vuetify/lib/locale/en'
import en from '@/locales/en'

const messages = {
  en: {
    en,
    $vuetify: vEn,
  },
}

export default new createI18n({
  locale: import.meta.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: import.meta.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  globalInjection: true,
  messages,
})


