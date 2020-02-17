import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import * as MasterData from "../constants/data";

const ApiService = {
    init(baseURL) {
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = baseURL;
    },

    query(resource, params) {
        return Vue.axios.get(resource, params).catch(error => {
            throw new Error(`ApiService ${error}`);
        });
    },

    get(resource) {
        return Vue.axios.get(`${resource}`).catch(error => {
            throw new Error(`ApiService ${error}`);
        });
    },

    post(resource, data) {
        return Vue.axios.post(resource, data).catch(error => {
            throw new Error(`ApiService ${error}`);
        });
    },

    getProducts(){
        return MasterData.products;
    }
}

export default ApiService;
