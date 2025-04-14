import Vue from 'vue'
let _this = Vue.prototype

export function getOrderListApi(params){
    params = Object.assign({}, params)
    return new Promise((resolve, reject)=>{
        _this.$http.get(`/stage-api/order/list`,params).then((res)=>{
            resolve(res)
        })
    })
}

export function getOrderDetailApi(params){
    params = Object.assign({}, params)
    return new Promise((resolve, reject)=>{
        _this.$http.get(`/stage-api/order/detail`,params).then((res)=>{
            resolve(res)
        })
    })
}