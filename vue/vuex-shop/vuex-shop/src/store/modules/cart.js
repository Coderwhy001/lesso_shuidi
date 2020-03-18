import products from "./products"

const state = {
  items: [],
  checkoutStatus: null
}
const mutations = {
  pushProductToCart(state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  },
  incrementItemQuantity(state, { id }) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  }
}
const actions = {
  addProductToCart({commit}, product) {
    if (product.inventory > 0) {
      const catItem = state.items.find(item => item.id === product.id)
      if (!catItem) {
        commit('pushProductToCart', {id: product.id})
      } else {
        commit('incrementItemQuantity', catItem)
      }
    }
    // console.log(payload)
    // return state.items.map(({id, quantity}) => {
    //   // const product = rootState.products.all.find(
    //   //   product => product.id === id)
    //   return {
    //     title: products.title,
    //     price: products.price
    //   }
    // })
  }
}
const getters = {

}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}