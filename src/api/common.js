import utils from '@/utils/utils'
import Vue from 'vue'

let _this = Vue.prototype
export function getBannerListApi(params){
    params = Object.assign({
        Authorization:uni.getStorageSync('token')
    }, params)
    return new Promise((resolve, reject)=>{
        _this.$http.get(`/stage-api/banner/list`,params).then((res)=>{
            resolve(res)
        })
    })
}

export function smsLoginApi(params){
    params = Object.assign({
        unionCode:434343445
    }, params)

    return new Promise((resolve, reject)=>{
        _this.$http.get(`/stage-api/login/wx/smsLogin`,params).then((res)=>{
            resolve(res)
        })
    })
}


export function getTicketCardApi(params){
    params = Object.assign({}, params)

    return new Promise((resolve, reject)=>{
        _this.$http.get(`/stage-api/ticketCard/sale/page`,params).then((res)=>{
            resolve(res)
        })
    })
}