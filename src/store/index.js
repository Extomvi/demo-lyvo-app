import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const SUBMIT_REQUEST = 'SUBMIT_REQUEST'

export default new Vuex.Store({
    state: {
        alertMsg: '',
    },
    mutations: {
        success(state) {
            state.alertMsg = 'Success'
        }
    },
    actions: {},
    modules: {},
})