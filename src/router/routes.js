//引入
import Login from '@/pages/login'
import Food from '@/pages/food'
import SearchFood from '@/pages/food/components/SearchFood'
import AddFood from '@/pages/food/components/AddFood'
import FoodList from '@/pages/food/components/FoodList'


//66
export default [
    {
        path: "/login",
        component: Login,
        meta:{isLogin:true}
    },
    {
        path:'/food',
        component:Food,
        name:"Food",
        meta:{title:"食品管理"},
        children:[
            {
                path:'searchfood',
                component:SearchFood,
                name:"SearchFood",
                meta:{title:"搜索食品",categoryTitle:"食品管理"}
            },
            {
                path:'addfood',
                component:AddFood,
                name:"AddFood",
                meta:{title:"增加食品",categoryTitle:"食品管理"}
            },
            {
                path:'foodlist',
                component:FoodList,
                name:"FoodList",
                meta:{title:"食品列表",categoryTitle:"食品管理"}
            }
        ]
    },
    
    {
        path:"/",
        redirect:"/food/searchfood"
    }
        
]