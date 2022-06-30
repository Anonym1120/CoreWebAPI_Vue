import { createI18n } from 'vue-i18n'
import localeZH from 'element-plus/lib/locale/lang/zh-cn'
import localeEN from 'element-plus/lib/locale/lang/en'

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */
 const i18n = createI18n({
  locale: localeZH.name,
  fallbackLocale: localeEN.name,
})

export default createI18n({
  legacy: false,
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
})
