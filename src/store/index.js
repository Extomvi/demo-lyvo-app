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
        alertType: '',
    },
    mutations: {
        [SUBMIT_REQUEST](state) {
            state.loading = true
        },
        [SUBMIT_SUCCESS](state) {
            state.alertMsg = "Submission Successful"
            state.loading = false
            state.alertType = 'success'
        },
        [SUBMIT_FAILURE](state) {
            state.alertMsg = 'Submission failed'
            state.loading = false
            state.alertType = 'error'
        }
    },
    actions: {
        async submitApplication({ commit }, postData) {
            commit(SUBMIT_REQUEST)
            try {
                const payload = await httpPost('', postData)
            } catch (e) {
                console.log(e)
                commit(SUBMIT_FAILURE)
            }
        }
    },
    modules: {},
})

const httpPost = async(apiEndPoint, postData) => {
    await axios({
        method: 'POST',
        url: apiEndPoint,
        data: postData,
        config: { headers: { 'Content-Type': 'application/json' } }
    })
}