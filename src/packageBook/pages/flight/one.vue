<template>
    <view class="page">
        <destination></destination>

        <view class="dates">
            <date></date>
        </view>

        <view class="list">
            <view 
                class="item"
                v-for="(item,index) in list"
                :key="index"
            >
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
                        <text>MOP</text>
                        <text class="p">65</text>
                        <text class="t">起</text>
                    </view>
                    <view class="price-item">
                        <text>RMB</text>
                        <text class="p">65</text>
                    </view>
                </div>
            </view>
        </view>
    </view>
</template>

<script>
import date from '@/packageBook/components/date'
import destination from '@/packageBook/components/destination'
export default {
    components:{
        date,
        destination
    },
    data(){
        return{
            list:[{},{},{}]
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
.dates {
    margin:0 0 32rpx;
}

.list {
    margin:16rpx;
    .item {
        position:relative;
        margin-bottom:16rpx;
        padding-left:24rpx;
        padding-right:200rpx;
        height:176rpx;
        background:#FFF;
        border-radius:20rpx;
        overflow:hidden;
        .date {
            margin:40rpx 0 0 0;
            white-space:nowrap;
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
                    font-size:36rpx;
                }
                .t {
                    margin-top:8rpx;
                    color:#9D9D9D;
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
                    width:129rpx;
                    height:9rpx;
                    background:url('http://182.254.192.167:6003/vue/upload/static/ticket/car.png') no-repeat;
                    background-size:contain;
                }
            }
        }
        .grade {
            .i {
                display:inline-block;
                margin-right:28rpx;
                color:#8D8D8D;
                font-size:20rpx;
                vertical-align:middle;
                text {
                    color:#EC702E;
                }
            }
        }
    }
    .price {
        position:absolute;
        top:50%;
        right:50rpx;
        transform:translateY(-50%);
        text-align:center;
        .price-item {
            margin-bottom:8rpx;
            height:45rpx;
            line-height:45rpx;
            color:#000;
            font-size:22rpx;
            text {
                display:inline-block;
            }
            .p {
                margin:0 4rpx;
                font-size:40rpx;
            }
            .t {
                color:#A3A3A3;
                font-size:20rpx;
                font-weight:500;
            }
            &.mop {
                color:#FE6630;
            }
        }
    }
}
</style>