<template>
    <view class="c-card">
        <view class="date">
            <view class="date-item">
                <view class="d">08:00</view>
                <view class="t">蛇口港口</view>
            </view>
            <view class="long">
                <view class="t">1小时40分</view>
                <view class="ico"></view>
            </view>
            <view class="date-item">
                <view class="d">08:00</view>
                <view class="t">蛇口港口</view>
            </view>
        </view>
        <view class="grade">
            <view class="i">
                普通舱<text>（49张）</text>
            </view>
            <view class="i">
                头等舱<text>（49张）</text>
            </view>
        </view>
        <div class="price">
            <view class="price-item mop">
                <text class="t">MOP</text>
                <text class="p">65</text>
                <text class="q">起</text>
            </view>
            <view class="price-item">
                <text class="t">RMB</text>
                <text class="p">65</text>
            </view>
        </div>
    </view>
</template>

<script>
export default {
    props:{
        item:{
            type:Object,
            default:[]
        }
    },
    data(){
        return{
        }
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
.c-card {
    position:relative;
    margin-top:-1px;
    padding:0 24rpx;
    height:200rpx;
    border-top:1px solid #E5E5E5;
    overflow:hidden;
    .date {
        margin:20rpx 0 8rpx 0;
        white-space:nowrap;
        text-align:center;
        .date-item,
        .long {
            display:inline-block;
            text-align:center;
        }
        .date-item {
            width:80rpx;
            vertical-align:middle;
            .d {
                height:40rpx;
                line-height:40rpx;
                color:#000;
                font-size:30rpx;
                font-weight:500;
            }
            .t {
                color:#8D8D8D;
                font-size:20rpx;
            }
        }
        .long {
            margin:0 24rpx 0;
            vertical-align:16rpx;
            .t {
                margin-bottom:8rpx;
                height:24rpx;
                line-height:24rpx;
                color:#A3A3A3;
                font-size:18rpx;
            }
            .ico {
                width:91rpx;
                height:9rpx;
                background:url('http://182.254.192.167:6003/vue/upload/static/round/ico-arrow2.png') no-repeat;
                background-size:contain;
            }
        }
    }
    .grade {
        .i {
            display:inline-block;
            color:#A3A3A3;
            font-size:20rpx;
            vertical-align:middle;
            text {
                color:#EC702E;
            }
        }
    }
    .price {
        height:36rpx;
        text-align:right;
        .price-item {
            display:inline-block;
            margin-left:40rpx;
            height:45rpx;
            line-height:45rpx;
            color:#000;
            font-size:20rpx;
            vertical-align:middle;
            text {
                display:inline-block;
            }
            .p {
                margin:0 4rpx;
                font-size:30rpx;
                font-weight:500;
            }
            .t {
                font-weight:500;
            }
            .q {
                color:#A3A3A3;
            }
            &.mop {
                color:#FE6630;
            }
        }
    }
}
</style>