import Vue from 'vue'

let _this = Vue.prototype
export function getTicketCardListApi(params){
    params = Object.assign({}, params)

    return new Promise((resolve, reject)=>{
        _this.$http.get(`/ticketCard/sale/page`,params).then((res)=>{
            resolve(res)
        })
    })
}

export function getTicketPopupApi(params){
    params = Object.assign({}, params)

    return new Promise((resolve, reject)=>{
        _this.$http.get(`/ticketPopup/list`,params).then((res)=>{
            resolve(res)
        })
    })
}

export function getPortRouteApi(params){
    params = Object.assign({}, params)

    return new Promise((resolve, reject)=>{
        _this.$http.get(`/ticketPort/getPortRoute`,params).then((res)=>{
            resolve(res)
        })
    })
}
