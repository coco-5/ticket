<template>
    <view class="c-order">
        <view class="item">
            <view class="label">
                <text class="name">订单编号</text>
            </view>
            <view class="right">
                <text>TK202404015693214</text>
            </view>
        </view>
        <view class="item">
            <view class="label">
                <text class="name">下单时间</text>
            </view>
            <view class="right">
                <text>2024-04-01 10:00</text>
            </view>
        </view>
        <view class="item">
            <view class="label">
                <text class="name">票价总额</text>
            </view>
            <view class="right">
                <text>MOP 300.00</text>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    props:{

    },
    data(){
        return{

        }
    },
    mounted(){

    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
.c-order {
    .item {
        position:relative;
        margin-bottom:24rpx;
        .label {
            display:inline-block;
            height:32rpx;
            line-height:32rpx;
            color:rgba(0,0,0,.9);
            vertical-align:middle;
        }
        .right {
            position:absolute;
            top:0;
            right:0;
            height:32rpx;
            color:rgba(0,0,0,.7);
        }
    }
}
</style>