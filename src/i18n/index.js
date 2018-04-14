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
      'pt-br': require('./locales/pt-br.json'),
      'en-us': require('./locales/en-us.json')
    }
})

export default i18n
