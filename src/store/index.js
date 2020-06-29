import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const SUBMIT_REQUEST = 'SUBMIT_REQUEST'
const SUBMIT_SUCCESS = 'SUBMIT_SUCCESS'
const SUBMIT_FAILURE = 'SUBMIT_FAILURE'

export default new Vuex.Store({
    state: {
        loading: false,
        alertMsg: '',
    },
    mutations: {
        [SUBMIT_REQUEST](state) {
            state.loading = true
        },
        [SUBMIT_SUCCESS](state) {
            state.alertMsg = "Submission Successful"
            state.loading = false
        },
        [SUBMIT_FAILURE](state) {
            state.alertMsg = 'Submission failed'
            state.loading = false
        }
    },
    actions: {
        async submitApplication({ commit }, postData) {
            commit(SUBMIT_REQUEST)

            commit(SUBMIT_SUCCESS)
        }
    },
    modules: {},
})