import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Regist from '../components/pages/Regist'
import Index from '../components/index/Index'

//通用部分
import SimpleHeader from '../components/header/SimpleHeader/SimpleHeader'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/',
          name: 'index',
          components: {
            header: SimpleHeader,
            // content: HomeContent,
            // footer: CommonFooter
          },
          meta: {
            title: 'shark的个人博客'
          }
        },
      ]
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    }
  ]
})
