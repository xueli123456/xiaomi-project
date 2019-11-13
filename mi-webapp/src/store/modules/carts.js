import { INITCART } from '../types/actionTypes'
// import cartApi from '../../apis/cartApi'

export default {
  state: {
    cartInfo: []  //共享数据的存放位置
  },
  mutations: {
    'INIT': (state, data) => {
      console.log('#3 mutations: init'+data)
      // state.cartInfo = data
        state.cartInfo.push(data)
    }
  },
  actions: {   //接收动作要求，提交到mutations中处理
    [INITCART]: async ({ commit },data) => {
      // let data = await cartApi.getCarData()
      console.log('#2 actions: data'+data)
      commit('INIT', data)
    }
  },
  getters: {   //获取更新的共享数据状态
    'GETCART': ({ cartInfo }) => {
      return cartInfo
    }
  }
}
