// import ajax from '@/api/ajax'
export default {
    // 获取店铺地址
    //  https://elm.cangdu.org/shopping/v2/restaurant/category
    getShopping(){
        return ajax.get(`/shopping/v2/restaurant/category`)
    }
}