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
        _this.$http.put(`/stage-api/passenger/update`,params).then((res)=>{
            resolve(res)
        })
    })
}

export function getPassengerAddApi(params){
    params = Object.assign({}, params)

    return new Promise((resolve, reject)=>{
        _this.$http.post(`/stage-api/passenger/add`,params).then((res)=>{
            resolve(res)
        })
    })
}

export function getPassengerDeleteApi(id){
    return new Promise((resolve, reject)=>{
        _this.$http.delete(`/stage-api/passenger/delete/${id}`,{}).then((res)=>{
            resolve(res)
        })
    })
}

export function getPassengerDetailApi(id){
    return new Promise((resolve, reject)=>{
        _this.$http.get(`/stage-api/passenger/${id}`,{}).then((res)=>{
            resolve(res)
        })
    })
}
