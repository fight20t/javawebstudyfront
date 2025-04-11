import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)
// 在这里配置路由，不同的url对应不同的组件
const routes = [
  {
    path: '/emp',
    name: 'emp',
    component: () => import( '../views/tlias/EmpView.vue')
  },
  {
    path: '/ele',
    name: 'ele',
    
    component: () => import( '../views/element/ElementView.vue')
  },
  {
    path: '/',
      redirect: '/emp',
  }
]

const router = new VueRouter({
  routes
})

export default router
