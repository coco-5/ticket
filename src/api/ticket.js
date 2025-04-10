import Vue from 'vue'

let _this = Vue.prototype
export function getTicketCardListApi(params){
    params = Object.assign({}, params)

    return new Promise((resolve, reject)=>{
        _this.$http.get(`/stage-api/ticketCard/sale/page`,params).then((res)=>{
            resolve(res)
        })
    })
}
