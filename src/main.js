import Vue from 'vue'

// vue setup
Vue.config.silent = false
Vue.config.devtools = true
Vue.config.productionTip = true

Vue.config.keyCodes = {
  // v: 86,
  // f1: 112,
  // "media-play-pause": 179,
  // up: [38, 87]
}

Vue.config.errorHandler = (err, vm, info) => {}

Vue.config.warnHandler = (msg, vm, trace) => {}

// plugins setup
import store from './store'
import router from './router'

import { sync } from 'vuex-router-sync'
sync(store, router, { moduleName: 'router' })

import i18n from './i18n'

// pre-setup
store.subscribe(mutation => {
    if(mutation.type === 'SET_LOCALE') {
        i18n.locale = mutation.payload
    }
})

// init
import app from './app'

// export all
export default new Vue({
    el: '#app',
    name: 'root',
    store,
    router,
    i18n,
    render: h => h(app)
})
