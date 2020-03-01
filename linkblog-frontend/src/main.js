// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import iView from 'iview'
import 'iview/dist/styles/iview.css'    // 使用 CSS

// iView UI 组件引入
import {
  Row,
  Col,
  Button,
  Progress,
  Tag,
  Icon,
  Affix,
  Rate,
  Modal,
  Message,
  Notice
} from 'iview'
Vue.component('iv-row', Row)
Vue.component('iv-col', Col)
Vue.component('iv-button', Button)
Vue.component('iv-progress', Progress)
Vue.component('iv-tag', Tag)
Vue.component('iv-icon', Icon)
Vue.component('iv-affix', Affix)
Vue.component('iv-rate', Rate)



Vue.use(iView)
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
