// 接口请求函数
import Ajax from './ajax'
// import axios from 'axios'

// export {default as addGood} from './cart/addGood'

// 获取商铺信息
// https://elm.cangdu.org/shopping/v2/restaurant/category
// get
// latitude  longitude
export const reqShopCartList = () => {
    return Ajax({
        url:'https://elm.cangdu.org/shopping/v2/restaurant/category',
        method:'get'
    })
}

// 下边是购物车接口
export const addGood =(obj)=> {
    // 获取店铺地址
    return Ajax({
        url:'/shopping/restaurants',
        params:obj,
        method:'get'
    })
}
export const addGoodone =(obj)=> {
    // 获取店铺地址
    return Ajax({
        url:'/shopping/v2/menu',
        params:obj,
        method:'get'
    })
}
export const addGoodTwo =(str)=> {
    // 获取店铺地址
    return Ajax({
        url:`/shopping/v2/menu/${str}`,
        method:'get'
    })
}
export const getPic =(str)=> {
    // 获取店铺地址
    return Ajax({
        url:`/ugc/v2/restaurants/1/ratings/tags`,
        method:'get'
    })
}