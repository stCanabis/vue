import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data: {}
    },
    getters: {
        getAllServers: state => state.data,
        getServerData: state => id => state.data.find(data => data.Id === id)
    },
    mutations: {
        addNewServer(state, data) {
            state.data.push(data);
        },
        addAllServers(state, serversData) {
            state.data = serversData;
        },
        changeServerData(state, serverData) {
            state.data.splice(state.data.findIndex(data => data.Id === serverData.Id), 1, serverData);
        },
        removeServerData(state, serverData) {
            state.data.splice(state.data.findIndex(data => data.Id === serverData.Id), 1);
        },

    },
    actions: {
        addNewServer(state, data) {
            setTimeout(() => {
                state.commit('addNewServer', data);
            }, 1000);
        },
        removeServerData(state, data) {
            setTimeout(() => {
                state.commit('removeServerData', data);
            }, 1000);
        },

    }

})

