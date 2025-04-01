<template>
    <view class="c-desc">
        <view class="detail">
            <view class="tag">去程</view>
            <view class="date">10月23日 周五</view>
        </view>
        <view class="dates">
            <view class="date-item">
                <view class="d">08:00</view>
                <view class="t">蛇口港口</view>
            </view>
            <view class="long">
                <view class="time">耗时5分</view>
                <view class="ico"></view>
                <view class="type">普通位</view>
            </view>
            <view class="date-item">
                <view class="d">08:00</view>
                <view class="t">蛇口港口</view>
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
.c-desc {
    .detail {
        margin:28rpx 0;
        height:32rpx;
        .tag,
        .date {
            display:inline-block;
            vertical-align:middle;
        }
        .tag {
            margin-right:8rpx;
            width:50rpx;
            height:30rpx;
            line-height:30rpx;
            border:1px solid #FE6630;
            border-radius:5rpx;
            color:#FE6630;
            font-size:18rpx;
            text-align:center;
            &.back {
                border-color:#368EF6;
                color:#368EF6;
            }
        }
        .date {
            color:#000;
            font-size:22rpx;
        }
    }
    .dates {
        position:relative;
        padding-bottom:32rpx;
        border-bottom:1px solid rgba(0,0,0,0.08);
        .date-item {
            display:inline-block;
            width:48%;
            vertical-align:middle;
            text-align:left;
            &:last-child {
                text-align:right;
            }
            .d {
                margin-bottom:16rpx;
                height:50rpx;
                line-height:50rpx;
                color:#000;
                font-size:48rpx;
            }
            .t {
                height:30rpx;
                line-height:30rpx;
                font-size:26rpx;
                color:#737272;
            }
        }
        .long {
            position:absolute;
            top:35%;
            left:50%;
            transform:translate(-50%,-50%);
            width:110rpx;
            color:rgba(0,0,0,.7);
            font-size:22rpx;
            text-align:center;
            .ico {
                margin:4rpx auto;
                width:83rpx;
                height:5rpx;
                background:url('http://182.254.192.167:6003/vue/upload/static/order/car2.png') no-repeat;
                background-size:contain;
            }
        }
    }
}
</style>