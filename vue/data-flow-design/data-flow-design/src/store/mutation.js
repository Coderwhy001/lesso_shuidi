import {
  RECORD_USERINFO,
  ADD_CART,
  INCREMENT_QUANTITY,
  CHECKOUT
} from './mutation-types'
export default {
  [RECORD_USERINFO]() {
    state.userInfo = info;
    state.login = true
  },
  [ADD_CART](state, {productId}){
    
  },
  [INCREMENT_QUANTITY](state) {

  },
  [CHECKOUT]() {

  }
}