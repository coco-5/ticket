<template>
    <view class="page">
        <view class="block"></view>

        <view class="wrap-status">
            <view class="ico"></view>
            <view class="text">待支付</view>
            <view class="time">剩余09分50秒 </view>
        </view>

        <view class="wrap-top">
            <view class="top">
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
                <view class="detail">
                    <view class="tag back">去程</view>
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
        </view>

        <view class="wrap-passanger">
            <view class="hd">
                乘客<view class="ico"></view>
            </view>
            <view class="bd">
                <view class="item">
                    <view class="label">
                        <text class="name">童嘉颖</text>
                        <text class="tag">成人</text>
                    </view>
                    <view class="right">
                        <text>港澳通行证</text>
                        <text class="b">C10****41</text>
                    </view>
                </view>
                <view class="item">
                    <view class="label">
                        <text class="name">童嘉颖</text>
                        <text class="tag">成人</text>
                    </view>
                    <view class="right">
                        <text>居民身份证</text>
                        <text class="b">32**************05</text>
                    </view>
                </view>
            </view>
        </view>

        <view class="wrap-order">
            <view class="hd">
                订单明细<view class="ico"></view>
            </view>
            <view class="bd">
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
        </view>

        <view 
            class="banner"
            v-if="bannerList.length > 0"
        >
            <c-banner
                style="height:189rpx;"
                :list="bannerList"
            ></c-banner>
        </view>

        <view class="actions">
            <view class="btn">取消订单</view>
            <view class="btn orange">去支付</view>
        </view>
    </view>
</template>

<script>
export default {
    data(){
        return{
            bannerList:['','','']
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
    background:url('http://182.254.192.167:6003/vue/upload/static/order/bg.png') #F8F8F8 no-repeat;
    background-size:contain;
}

.block {
    height:32rpx;
}

.wrap-status {
    position:relative;
    margin:0 auto;
    width:710rpx;
    height:110rpx;
    line-height:110rpx;
    background:linear-gradient(179deg, #FDEDE8, #FFFFFF);
    border-radius:20rpx;
    overflow:hidden;
    .ico {
        display:inline-block;
        margin:32rpx 24rpx 0 40rpx;
        width:50rpx;
        height:50rpx;
        background:url('http://182.254.192.167:6003/vue/upload/static/order/icon-time.png') no-repeat;
        background-size:contain;
    }
    .text {
        display:inline-block;
        color:#000;
        font-size:34rpx;
        font-weight:500;
        vertical-align:12rpx;
    }
    .time {
        position:absolute;
        top:50%;
        right:40rpx;
        transform:translateY(-50%);
        color:#000;
        font-size:28rpx;
    }
}

.wrap-top {
    padding:24rpx 20rpx;
    .top {
        position:relative;
        padding:0 40rpx;
        background:linear-gradient(205deg, #FFF7F4, #FFFFFF);
        border-radius:20rpx;
        overflow:hidden;
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
        .ico {
            position:absolute;
            top:50%;
            right:40rpx;
            transform:translateY(-50%);
            width:21rpx;
            height:11rpx;
            background:url('http://182.254.192.167:6003/vue/upload/static/order/icon.png') no-repeat;
            background-size:contain;
        }
    }
    .bd {
        padding:0 40rpx;
        font-size:28rpx;
        overflow:hidden;
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
}

.wrap-passanger {
    .bd {

    }
}

.banner {
    height:189rpx;
    background:#CCC;
}

.actions {
    padding:0 32rpx;
    height:136rpx;
    line-height:136rpx;
    text-align:right;
    .btn {
        display:inline-block;
        margin-left:26rpx;
        width:200rpx;
        height:80rpx;
        line-height:80rpx;
        border-radius:40rpx;
        border:1px solid rgba(0,0,0,.2);
        color:rgba(0,0,0,.7);
        font-size:32rpx;
        text-align:center;
        vertical-align:middle;
        &.orange {
            border:1px solid #FD5A26;
            color:#FD5A26;
        }
    }
}
</style>