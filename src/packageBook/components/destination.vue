<template>
    <view 
        class="destination"
        v-if="options.departureDest"
    >
        <view class="text">{{decode(options.departureDest)}}</view>
        <view class="ico"></view>
        <view class="text">{{decode(options.arrivalDest)}}</view>
    </view>
</template>

<script>
export default {
    props:{
        options:{
            type:Object,
            default:{}
        }
    },
    watch:{
        options:{
            deep:true,
            handler(n){}
        }
    },
    data(){
        return{
        }
    },
    methods:{
        decode(txt){
            return decodeURIComponent(txt)
        }
    }
}
</script>

<style lang="scss" scoped>
.destination {
    padding:32rpx 0;
    color:#000;
    font-size:34rpx;
    font-weight:500;
    text-align:center;
    .text,
    .ico {
        display:inline-block;
        vertical-align:middle;
    }
    .ico {
        margin:0 16rpx;
        width:40rpx;
        height:5rpx;
        background:url('http://8.138.130.153:6003/vue/upload/static/ticket/car2.png') no-repeat;
        background-size:contain;
    }
}
</style>