const SET_LOCALE = 'SET_LOCALE'

const state = {
    locale: 'pt-br'
}

const mutations = {
    [SET_LOCALE] (state, locale) {
        state.locale = locale
    }
}

const actions = {

    setLocale ({commit}, locale) {
        commit(SET_LOCALE, locale)
    }

}

const getters = {
    getLocale: state => state.locale
}

export default {
    state,
    mutations,
    actions,
    getters
}
