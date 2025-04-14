import Vue from 'vue'
let _this = Vue.prototype
export function getPassengerListApi(params){
    params = Object.assign({}, params)

    return new Promise((resolve, reject)=>{
        _this.$http.get(`/stage-api/passenger/getPassengerList`,params).then((res)=>{
            resolve(res)
        })
    })
}

export function getPassengerUpdateApi(params){
    params = Object.assign({}, params)

    return new Promise((resolve, reject)=>{
        _this.$http.post(`/stage-api/passenger/update`,params).then((res)=>{
            resolve(res)
        })
    })
}
