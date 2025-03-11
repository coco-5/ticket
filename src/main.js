import Vue from 'vue'
import App from './App'

// 导入npm依赖
import hqView from '@hqwx/hqview-ui'
import request from './utils/requset'
import baseConfig from '@/configs/baseConfig'

Vue.use(hqView)

const $http = {
	get:request.get,
	post:request.post,
	put:request.put,
	delete:request.delete,
	http:request,
}

Vue.prototype.$http = $http

Vue.prototype.$hq.baseConfig = baseConfig

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	// store,
	...App
})

app.$mount()