import Vue from 'vue'
let _this = Vue.prototype

export function getAdvertiseListApi(params){
    params = Object.assign({}, params)
    return new Promise((resolve, reject)=>{
        _this.$http.get(`/stage-api/advertise/list`,params).then((res)=>{
            resolve(res)
        })
    })
}

export function getBannerListApi(params){
    params = Object.assign({}, params)
    return new Promise((resolve, reject)=>{
        _this.$http.get(`/stage-api/banner/list`,params).then((res)=>{
            resolve(res)
        })
    })
}

export function getNoticeListApi(params){
    params = Object.assign({}, params)

    return new Promise((resolve, reject)=>{
        _this.$http.get(`/stage-api/notice/list`,params).then((res)=>{
            resolve(res)
        })
    })
}

export function getPartnerListApi(params){
    params = Object.assign({}, params)

    return new Promise((resolve, reject)=>{
        _this.$http.get(`/stage-api/partner/list`,params).then((res)=>{
            resolve(res)
        })
    })
}

export function getPortRouteApi(params){
    params = Object.assign({}, params)

    return new Promise((resolve, reject)=>{
        _this.$http.get(`/stage-api/ticketPort/getPortRoute`,params).then((res)=>{
            resolve(res)
        })
    })
}