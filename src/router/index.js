/*
* 路由器模块
* */
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/msite',
      component:MSite,
      meta:{
        isShow:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        isShow:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        isShow:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        isShow:true
      }
    },
    {
      path:'/',
      redirect:'/msite'
    },
    {
      path:'/login',
      component:Login
    }
  ]
})
