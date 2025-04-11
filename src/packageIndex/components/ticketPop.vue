<template>
    <view class="c">
        <view class="bg"></view>
        <view class="win">
            
        </view>
    </view>
</template>

<script>
import { getTicketPopupApi } from '@/api/ticket'
export default {
    data(){
        return{
            list:[]
        }
    },
    mounted(){
        console.log(9999,'getTicketPopup')
        this.getTicketPopup()
    },
    methods:{
        getTicketPopup(){
            getTicketPopupApi({}).then((res)=>{
                if(res.data.code == 200){
                    let data = res.data.data || []

                    this.list = data

                    console.log(9999,'data',data)
                }
            })
        },
    }
}
</script>

<style lang="scss" scoped>
.c {

}
</style>