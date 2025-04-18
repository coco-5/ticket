<template> 
    <view class="page">
        <view class="block"></view>
        <view class="order">
            <view class="label">订单编号</view>
            <view class="right">TK20240401115635874134</view>
        </view>
        <view class="price">
            <view class="label">订单金额</view>
            <view class="right">
                <view class="t m">MOP 30.00 </view>
                <view class="t">RMB 25.00</view>
            </view>
        </view>

        <view class="list">
            <c-pay-way></c-pay-way>
        </view>
    </view>
</template>

<script>
export default {
    data(){
        return{
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
    height:30rpx;
}

.order,
.price {
    position:relative;
    box-sizing:border-box;
    margin:0 auto;
    padding:0 30rpx;
    width:710rpx;
    height:90rpx;
    line-height:90rpx;
    background:#FFF;
    border-radius:20rpx;
    font-size:30rpx;
    .label {
        display:inline-block;
        color:#000;
        vertical-align:middle;
    }
    .right {
        position:absolute;
        top:0;
        right:30rpx;
        height:90rpx;
        color:#000;
        vertical-align:middle;
    }
}

.price {
    margin:20rpx auto 0;
    .right {
        box-sizing:border-box;
        padding-top:16rpx;
        font-size:24rpx;
        .t {
            line-height:30rpx;
        }
        .m {
            color:#FE6630;
        }
    }
}

.list {
    margin:40rpx auto 0;
    padding:20rpx 0;
    width:710rpx;
    background:#FFF;
    border-radius:20rpx;
}
</style>