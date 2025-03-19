<template>
    <view class="destination">
        <view class="text">深圳蛇口</view>
        <view class="ico"></view>
        <view class="text">澳门氹仔</view>
    </view>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    methods:{
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
        background:url('http://182.254.192.167:6003/vue/upload/static/ticket/car2.png') no-repeat;
        background-size:contain;
    }
}
</style>