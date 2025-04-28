import Vue from 'vue'
let _this = Vue.prototype

export function getOrderListApi(params){
    params = Object.assign({}, params)
    return new Promise((resolve, reject)=>{
        _this.$http.get(`/order/list`,params).then((res)=>{
            resolve(res)
        })
    })
}

export function getOrderDetailApi(params){
    params = Object.assign({}, params)
    return new Promise((resolve, reject)=>{
        _this.$http.get(`/order/detail`,params).then((res)=>{
            resolve(res)
        })
    })
}

export function getOrderDiscountApi(params){
    params = Object.assign({}, params)
    return new Promise((resolve, reject)=>{
        _this.$http.post(`/order/discount/calculate`,params).then((res)=>{
            resolve(res)
        })
    })
}

export function getOrderCalculateApi(params){
    params = Object.assign({}, params)

    return new Promise((resolve, reject)=>{
        _this.$http.post(`/order/card/discount/calculate`,params).then((res)=>{
            resolve(res)
        })
    })
}

export function getOrderSubmitApi(params){
    params = Object.assign({}, params)

    return new Promise((resolve, reject)=>{
        _this.$http.post(`/order/submit`,params).then((res)=>{
            resolve(res)
        })
    })
}

//