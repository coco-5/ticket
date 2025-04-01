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
            <view 
                class="item"
                v-for="(item,index) in payList"
                :key="index"
            >
                <image 
                    class="ico" 
                    :src="item.ico"
                />
                <view class="name">
                    <view class="n">{{item.name}}</view>
                    <view class="d">{{item.desc}}</view>
                </view>
                <view class="actions">
                    <view class="btn"></view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data(){
        return{
            payList:[
                {type:'wxpay', name:'微信支付（澳门币支付）',desc:'微信安全支付',ico:'http://182.254.192.167:6003/vue/upload/static/paylist/wxzf.png'},
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
    .item {
        position:relative;
        height:82rpx;
        .ico {
            display:inline-block;
            margin-right:12rpx;
            width:82rpx;
            height:82rpx;
            vertical-align:middle;
        }
        .name {
            display:inline-block;
            vertical-align:middle;
            .n {
                margin-top:16rpx;
                height:30rpx;
                line-height:30rpx;
                color:#202020;
                font-size:28rpx;
            }
            .d {
                color:#7D7D7D;
                font-size:22rpx;
            }
        }
    }
}
</style>