import utils from '@/utils/utils'
import Vue from 'vue'

let _this = Vue.prototype
export function getBannerListApi(params){
    params = Object.assign({}, params)
    return new Promise((resolve, reject)=>{
        _this.$http.get(`/main/stage-api/banner/list`,params).then((res)=>{
            resolve(res)
        })
    })
}