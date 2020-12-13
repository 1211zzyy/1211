//引入
import Login from '@/pages/login'
import cart from '@/pages/cart'
import addGood from '@/pages/cart/components/addGood'
import address from '@/pages/cart/components/address'
import cartList from '@/pages/cart/components/cartList'
//66
export default [
    // {
    //     path: "/cart/components/addGood",
    //     component: addGood
    // },
    {
        path: "/cart",
        component: cart,
        children:[
            {
                path: "addGood",
                component:addGood 
            },
            {
                path: "address",
                component:address 
            },
            {
                path: "cartList",
                component:cartList 
            }
            
        ]
    },
    {
        path: "/login",
        component: Login,
        meta: { isLogin: true }
    },

    {
        path: "/",
        redirect: "/login"
    },

]