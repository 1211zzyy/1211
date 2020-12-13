import Ajax from './ajax.js'


// https://elm.cangdu.org/v1/pois?city_id=1&keyword=迪士尼&type=search 
// export const getCityNameList = (cityId,cityName)=>{
//    return Ajax({
//         url:`https://elm.cangdu.org/v1/pois?city_id=${cityId}&keyword=${cityName}`,
//         method:'GET',

//     })
// }
//https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762 获取商家名称
export const getShopNameList = (latitude,longitude)=>{
    return Ajax({
         url:`https://elm.cangdu.org/shopping/restaurants?latitude=${latitude}&longitude=${longitude}`,
         method:'GET',
 
     })
 }

//https://elm.cangdu.org/v2/index_entry 获取食品分类列表
// export const getCategoryFoodList =()=>{
//     return Ajax({
//         url:'https://elm.cangdu.org/v2/index_entry',
//         method:'GET'
//     })
// }

//https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1 获取食品列表
export const getFoodList =(shopId)=>{
    return Ajax({
        url:`https://elm.cangdu.org/shopping/v2/menu?restaurant_id=${shopId}`,
        method:'GET'
    })
}

//获取城市列表
export const reqCityList = ()=>Ajax.get("https://elm.cangdu.org/v1/cities?type=hot")

// 删除餐馆
//https://elm.cangdu.org/shopping/restaurant/:restaurant_id