const SET_CONNECTION = 'SET_CONNECTION'

const state = {
    online: navigator.onLine
}

const mutations = {
    [SET_CONNECTION] (state, connection) {
        state.online = connection
    }
}

const actions = {

    setConnection ({commit}, connection) {
        commit(SET_CONNECTION, connection)
    }

}

const getters = {
    isOnline: state => state.online
}

export default {
    state,
    mutations,
    actions,
    getters
}
