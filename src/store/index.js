import Vue from 'vue'
import Vuex from 'vuex'
import ApiService from '../services/api-service'
import * as ActionType from '../store/action-types'
import * as MutationType from '../store/mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    products: [],
    productDetail: null
  },
  actions: {
    [ActionType.GET_PRODUCTS]({commit}) {     
        const products = ApiService.getProducts();
        console.log(products);
        
        //commit to mutation
        commit(MutationType.GET_PRODUCTS, products);  
    }
  },
  mutations: {
    [MutationType.GET_PRODUCTS]: (state, products) => (state.products = products),
  },
  modules: {
  }
})
