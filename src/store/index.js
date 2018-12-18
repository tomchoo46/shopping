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
        colorFamilies: ['Blue', 'Green', 'Red', 'Yellow']
      }
    ],
    userData: {
      selectedColor: ''
    }
  },
  mutations: {
    setProductColor (state, payload) {
      state.userData.selectedColor = payload
    },
  },
  actions: {
    setProductColor({commit}, payload){
      commit('setProductColor', payload)
    }
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
