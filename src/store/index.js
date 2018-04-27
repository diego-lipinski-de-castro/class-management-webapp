import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {
    i18n,
    connection,
    notification
} from './modules/'

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        i18n,
        connection,
        notification
    },
    plugins: []
})

export default store
