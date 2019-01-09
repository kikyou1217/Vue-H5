# Vue+Vuex实现的简单demo:https://cangdu.org/happyfri/

> 刚入门Vue，利用Vue+Vuex实现的简单demo，逻辑也较简单，搞清楚组件间的传值，对做项目很有帮助。

## 创建Vue实例

```
import App from './App'
import router from './router'
import store from './store'
import ajax from './config/ajax.js'
import './config/rem.js'
import './style/commons.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
```

## 路由配置

``` bash
import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: App,
      children:[{
            path: '',
            component: r => require.ensure([], () => r(require('../page/home')), 'home')
        }, {
            path: '/item',
            component: r => require.ensure([], () => r(require('../page/item')), 'item')
        }, {
            path: '/score',
            component: r => require.ensure([], () => r(require('../page/score')), 'score')
        }]
    }]
})
```

## 

## 创建Vuex.Store实例

```
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'
import ajax from '../config/ajax.js'

Vue.use(Vuex)
const state={...}
export default new Vuex.Store({
	state,
	actions,
	mutations
})
```
