import Vue from 'vue';
import Vuex from 'vuex';
// import data from '../model/data'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data:{}
    },
    getters: {
        getAllServers: state => {
            return state.data;
        },
    },
    mutations: {
        addNewServer(state,data) {
            state.data.push(data);

        },
        addAllServer(state, serversData) {
            state.data = serversData;
        }
    }

})

