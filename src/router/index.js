import {createRouter,createWebHashHistory} from "vue-router"
import List from "../views/List.vue"
import Cart from "../views/Cart.vue"
import Message from "../views/Message.vue"
import Person from "../views/Person.vue"
import Home from "../views/Home.vue"
import ProductDetails from "../views/ProductDetails.vue"
import Tabbar from "../components/Tabbar.vue"
import ProductDetailsTabbar from "../components/ProductDetailsTabbar.vue"
import Order from "../views/Order.vue"
import Suceess from "../views/Success.vue"
import Pause from "../views/Pause.vue"
import Login from "../views/Login.vue"
const router =  createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:'/',
            redirect: '/Home'
        },
        {
            path: '/Home',
            components:{
                default:Home,
                Tabbar:Tabbar
            }
        },
        {
            path: '/List',
            components:{
                default:List,
                Tabbar:Tabbar
            }
        },
        {
            path: '/Message',
            components:{
                default:Message,
                Tabbar:Tabbar
            }
        },
        {
            path: '/Person',
            components:{
                default:Person,
                Tabbar:Tabbar
            }
        },
        {
            path: '/Cart',
            components:{
                default:Cart,
                Tabbar:Tabbar
            }
        },
        {
            path: '/ProductDetails',
            components:{
                default:ProductDetails,
                Tabbar:ProductDetailsTabbar
            }
        },
        {
            path:'/Order',
            components:{
                default:Order
            }
        },
        {
            path:'/Success',
            component:Suceess
        },
        {
            path: '/pause',
            component:Pause
        },
        {
            path: '/Login',
            component:Login
        }
    ],
    
})
router.afterEach(()=>{
    window,scrollTo(0,0);
})

router.beforeEach((to, from, next) => {
    let a = sessionStorage.getItem("userinfo")
    if(to.fullPath === "/Order"&&a === null)
    {
        router.push("/Login")
    }
    if(from.fullPath === "/Login"){
        router.back(-2);
    }
    next()
  })
export default router