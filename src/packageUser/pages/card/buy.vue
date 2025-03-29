<template>
    <view class="page">
        <view class="block"></view>
        <view class="list">
            <card
                class="item"
                v-for="(item,index) in list"
                :key="index"
            ></card>
        </view>
    </view>
</template>

<script>
import card from '@/packageUser/components/card'
export default {
    components:{
        card
    },
    data(){
        return{
            tabs:[
                {
                    name:'未使用/生效中',
                    value:0
                },
                {
                    name:'历史票卡',
                    value:1
                }
            ],
            tabIndex:0, 
            list:[
                {},
                {},
                {}
            ]     
        }
    },
    onLoad(e){
        this.options = e
    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
.page {
    min-height:100vh;
    background:#F8F8F8;  
}

.block {
    height:24rpx;
}

.list {
    box-sizing:border-box;
    margin:0 auto;
    padding:32rpx;
    width:710rpx;
    background:#FFF;
    border-radius:20rpx;
}

</style>