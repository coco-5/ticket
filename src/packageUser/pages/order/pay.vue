<template>
    <view class="page">
        <view class="wrap-code">
            <view class="tips">还剩<text>00:04:25</text>订单自动取消</view>
            <view class="tips">请使用澳门国际银行App扫码支付</view>
            <view class="code">
                <image />
            </view>
            <view class="price">
                <view class="text">MOP<text>30.00</text></view>
                <view class="text">RMB<text>25.00</text></view>
            </view>
        </view>

        <view class="wrap-way">
            <view class="hd">支付方式</view>
            <view class="bd">
                <c-pay-way></c-pay-way>
            </view>
        </view>

        <view class="wrap-passanger">
            <view class="hd">
                乘客
            </view>
            <view class="bd">
                <c-passenger-item></c-passenger-item>
                <c-passenger-item></c-passenger-item>
            </view>
        </view>

        <view class="wrap-order">
            <view class="hd">
                订单明细
            </view>
            <view class="bd">
                <c-order-item></c-order-item>
            </view>
        </view>

        <view class="actions">
            <view class="btn">取消订单</view>
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

.wrap-passanger,
.wrap-order {
    margin:20rpx auto;
    width:710rpx;
    background:#FFF;
    border-radius:20rpx;
    .hd {
        position:relative;
        padding:0 40rpx;
        height:110rpx;
        line-height:110rpx;
        color:#000;
        font-size:32rpx;
        font-weight:500;
    }
    .bd {
        padding:0 40rpx;
        font-size:28rpx;
        overflow:hidden;
    }
}

.actions {
    position:fixed;
    bottom:40rpx;
    left:50%;
    transform:translateX(-50%);
    width:664rpx;
    height:100rpx;
    line-height:100rpx;
    .btn {
        border-radius:50rpx;
        border:1px solid rgba(0,0,0,.5);
        color:rgba(0,0,0,.5);
        font-size:34rpx;
        text-align:center;
    }
}
</style>