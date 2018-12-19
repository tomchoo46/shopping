import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    products: [
      {
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Music_01754.jpg",
        id: 'dfjgjkgdhkdfgfd',
        title: "Kids Girls Chiffon Lace Princess Wedding Bridesmaid Pageant Party Formal Dresses",
        rating: 22,
        brands: ['OEM', 'Girls from OEM'],
        price: 53.00,
        originalPrice: 88.40,
        discount: 40,
        colorFamilies: ['Blue', 'Green', 'Red', 'Yellow'],
        sizes: ['7-8', '9-10', '11-12', '5-6', '3-4'],
        store: 'MM88 Store',
        shippingFee: 7.05
      }
    ],
    userData: {
      selectedColor: '',
      selectedSize: '',
      orderQty: 1
    }
  },
  mutations: {
    setProductColor (state, payload) {
      state.userData.selectedColor = payload
    },
    setProductSize (state, payload) {
      state.userData.selectedSize = payload
    },
    setOrderQty (state, payload) {
      state.userData.orderQty = payload
    }
  },
  actions: {
    setProductColor({commit}, payload){
      commit('setProductColor', payload)
    },
    setProductSize({commit}, payload){
      commit('setProductSize', payload)
    },
    setOrderQty({commit}, payload){
      commit('setOrderQty', payload)
    },
  },
  getters: {
    products(state){
      return state.products
    },
    userData(state){
      return state.userData
    }
  }
})
