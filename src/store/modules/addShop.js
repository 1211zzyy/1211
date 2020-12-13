import { getShopCartList } from '@/api'

const state = {
    getShopCartList:[] 
}
const mutations = {
    RECEIVESHOPCARTLIST(state,shopCartList){
        state.shopCartList = shopCartList
    }
}
const actions = {
    async getShopCartList({commit}){
        const result = await reqShopCartList()
        if(result.code === 200){
          commit('RECEIVESHOPCARTLIST',result.data)
        }
      },
}