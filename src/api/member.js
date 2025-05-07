import Vue from 'vue'
let _this = Vue.prototype

export function getMemberCardInfoApi(params){
    params = Object.assign({}, params)

    return new Promise((resolve, reject)=>{
        _this.$http.get(`/member/memberCardInfo`,params).then((res)=>{
            resolve(res)
        })
    })
}

export function memberUpdateApi(params){
    params = Object.assign({}, params)

    return new Promise((resolve, reject)=>{
        _this.$http.post(`/passenger/update/merchant`,params).then((res)=>{
            resolve(res)
        })
    })
}