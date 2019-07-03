import Vue from 'vue';
import Vuex from 'vuex';
import data from '../model/data'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data: data.List,
    },
    getters: {
        getAllServers: state => {
            return state.data
        },
    },
    mutations: {
        addNewServer(state) {
            state.data.push(
                {
                    "Id": 1,
                    "Name": "HomeServer",
                    "Value": "https://home.siberianhealth.com",
                    "Description": "",
                    "GroupId": 0,
                });
        }
    }

})

