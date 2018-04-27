import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// VueI18n.prototype.setLocale = async (locale) => {

//     try {

//         const localeJSON = await import(`./locales/${locale}.json`)

//         i18n.setLocaleMessage(locale, localeJSON)
//         i18n.locale = locale

//         return true

//     } catch (error) {

//         console.log(error)

//         return false

//     }

// }

const i18n = new VueI18n({
    locale: 'pt-br',
    fallbackLocale: 'pt-br',
    messages: {
      'pt-br': {
        cm: require('./locales/pt-br.json'),
        'at-ui': require('at-ui/dist/locale/pt-BR').default
      },
      'en-us': {
        cm: require('./locales/en-us.json'),
        'at-ui': require('at-ui/dist/locale/en-US').default
      }
    }
})

export default i18n
