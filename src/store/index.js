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
    productDetail: {
      id: -1,
      title: "",
      price: 0,
      imageUrl: "images/nike.webp",
      detail: null
    }
  },
  actions: {
    [ActionType.GET_PRODUCTS]({ commit }) {
      const products = ApiService.getProducts();

      //commit to mutation
      commit(MutationType.GET_PRODUCTS, products);
    },
    loadData({commit}, payload) {
      const id = payload.id;
      const product = ApiService.getProductDetail(id);
      commit("getProductDetail", product);
    }
  },
  mutations: {
    [MutationType.GET_PRODUCTS]: (state, products) => (state.products = products),
    getProductDetail: (state, productDetail) => (state.productDetail = productDetail),
  },
  modules: {
  }
})
