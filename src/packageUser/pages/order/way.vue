<template> 
    <view class="page">
        <view class="block"></view>
        <view class="order">
            <view class="label">订单编号</view>
            <view class="right">{{options.orderSn}}</view>
        </view>
        <view class="price">
            <view class="label">订单金额</view>
            <view class="right">
                <view 
                    class="t m"
                    v-if="options.currencyType == 1"
                >
                    MOP {{Number(options.price).toFixed(2)}}
                </view>
                <view 
                    class="t"
                    v-else-if="options.currencyType == 2"
                >
                    RMB {{Number(options.rmbPrice).toFixed(2)}}
                </view>
            </view>
        </view>

        <view class="list">
            <c-pay-way
                :options="options"
                @pay="pay"
                v-if="options"
            ></c-pay-way>
        </view>
    </view>
</template>

<script>
import { getWechatPayApi } from '@/api/pay'
export default {
    data(){
        return{
            options:{}
        }
    },
    onLoad(e){
        this.options = e
    },
    methods:{
        pay(item){
            let options = this.options
            let params = {
                addedValuePrice:options.addedValuePrice,
                addedValueRmbPrice:options.addedValueRmbPrice,
                currencyType:options.currencyType,
                discountPrice:options.discountPrice,
                discountRmbPrice:options.discountRmbPrice,
                orderId:options.orderId,
                orderSn:options.orderSn,
                orderType:options.orderType,
                price:options.price,
                rmbPrice:options.rmbPrice,
                rmbTicketPrice:options.rmbTicketPrice,
                ticketPrice:options.ticketPrice,
            }

            getWechatPayApi(params).then((res)=>{
                if(res.data.code == 200){

                }else{
                    uni.showToast({
                        title:res.data.msg,
                        icon:'none'
                    })
                }
            })
        }
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