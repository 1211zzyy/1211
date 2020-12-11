//引入
import Login from '@/pages/login'

//66
export default [{
        path: "/login",
        component: Login,
        meta:{isLogin:true}
    },
    
        {
            path:"/",
            redirect:"/login"
        }
        
]