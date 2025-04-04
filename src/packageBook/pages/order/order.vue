<template>
    <view class="page">
        <view class="wrap-top">
            <view class="top">
                <c-trip-detail
                    :isShowLong="true"
                ></c-trip-detail>
                <c-trip-detail
                    :isShowLong="true"
                ></c-trip-detail>
                <view class="more">
                    <view class="item">
                        <view class="label">退票</view>
                        <view class="text">退票请参照退票规则处理</view>
                        <view class="notice">购票退票须知</view>
                    </view>
                    <view class="item">
                        <view class="label">入闸</view>
                        <view class="text">开航前5分钟停止入闸</view>
                    </view>
                    <view class="item">
                        <view class="label">票价</view>
                        <view class="text">MOP30/RMB25/成人 MOP0/儿童 免费/携童</view>
                    </view>
                </view>
            </view>
        </view>

        <view class="list-passenger">
            <view class="hd">乘客信息</view>
            <view 
                class="bd"
                v-if="listPassenger.length"
            >
                <view 
                    class="item"
                    v-for="(item,index) in listPassenger"
                    :key="index"
                >
                    <view class="ico"></view>
                    <view class="name">
                        <text class="n">童嘉颖</text>
                        <text class="t">成人</text>
                    </view>
                    <view class="passport">
                        <view class="n">身份证</view>
                        <view class="t">32**************05</view>
                    </view>
                </view>
            </view>
            <view class="ft">
                <view class="btn">添加/删减乘客</view>
            </view>
        </view>

        <view class="wrap-coupon">
            <view class="name">优惠</view>
            <view class="tag">粤通珠澳次数卡 </view>
            <view class="price">
                <text class="text">-$30</text>
                <text class="ico"></text>
            </view>
        </view>

        <view class="wrap-added">
            <view class="name">增值服务</view>
            <view class="more">
                <text class="text">已选珠海大酒店 +接车服务</text>
                <text class="price">-$30</text>
                <text class="ico"></text>
            </view>
        </view>

        <view class="wrap-tips">
            <view class="hd">儿童身高说明</view>
            <view class="bd">儿童身高超过1.2米，需要购票成人票。1.2米及以下的儿童需要携带儿童到售票处领取免费的儿童票，才可以验票通过检票闸机。</view>
        </view>

        <view class="wrap-actions">
            <view class="notice">
                <text class="ico"></text>
                <text class="text">勾选表示已阅读并同意 购取票/退订须知</text>
            </view>
            <view class="actions">
                <view class="text">订单总金额</view>
                <view class="btn">
                    <view class="item">
                        <view class="price">RMB<text>0</text></view>
                        <view class="t">提交订单</view>
                    </view>
                    <view class="item rmb">
                        <view class="price">MOP<text>0</text></view>
                        <view class="t">提交订单</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data(){
        return{
            options:'',
            listPassenger:[{},{}],    
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

.wrap-top {
    padding:24rpx 20rpx;
    .top {
        position:relative;
        padding:0 40rpx;
        background:linear-gradient(205deg, #FFF7F4, #FFFFFF);
        border-radius:20rpx;
        overflow:hidden;
        .more {
            padding:28rpx 0;
            .item {
                position:relative;
                margin-bottom:8rpx;
                height:30rpx;
                line-height:30rpx;
                color:rgba(0,0,0,.6);
                font-size:22rpx;
                .label,
                .text,
                .notice {
                    display:inline-block;
                    vertical-align:middle;
                }
                .text {
                    margin-left:24rpx;
                    color:rgba(0,0,0,0.9);
                }
                .notice {
                    margin-left:40rpx;
                    color:#FE5B28;
                    text-decoration:underline;
                }
            }
        }
    }
}

.list-passenger {
    margin:20rpx;
    padding:0 30rpx;
    background:#FFF;
    border-radius:20rpx;
    .hd {
        padding:30rpx 0 0;
        height:80rpx;
        line-height:80rpx;
        color:#000;
        font-size:36rpx;
        font-weight:500;
    }
    .item {
        position:relative;
        margin-left:72rpx;
        padding:28rpx 0;
        border-bottom:1px solid rgba(0,0,0,0.06);
        height:80rpx;
        .ico {
            position:absolute;
            top:32rpx;
            left:-72rpx;
            width:38rpx;
            height:38rpx;
            background:#000;
            border-radius:50%;
        }
        .name {
            margin-bottom:16rpx;
            height:32rpx;
            line-height:32rpx;
            .t,
            .n {
                display:inline-block;
                vertical-align:middle;
            }
            .n {
                color:#000;
                font-size:30rpx;
            }
            .t {
                margin-left:12rpx;
                padding:0 10rpx;
                height:30rpx;
                line-height:30rpx;
                border:1px solid rgba(0,0,0,.5);
                border-radius:5rpx;
                color:rgba(0,0,0,.5);  
                font-size:18rpx;  
            }
        }
        .passport {
            height:30rpx;
            line-height:30rpx;
            color:rgba(0,0,0,.5);
            font-size:24rpx;
            .t,
            .n {
                display:inline-block;
                vertical-align:middle;
            }
            .n {
                margin-right:12rpx;
            }
        }
    }
    .ft {
        height:109rpx;
        line-height:109rpx;
        font-size:30rpx;
        color:#FD5925;
        text-align:center;
    }
}

.wrap-coupon {
    position:relative;
    margin:24rpx 20rpx;
    padding-left:24rpx;
    height:90rpx;
    line-height:90rpx;
    background:#FFF;
    border-radius:20rpx;
    .name,
    .tag {
        display:inline-block;
    }
    .name {
        margin-right:12rpx;
        color:#000;
        font-size:30rpx;
    }
    .tag {
        padding:0 12rpx;
        height:42rpx;
        line-height:42rpx;
        background:#FFF5F2;
        border:1px solid #FD5A26;
        border-radius:10rpx;
        font-size:22rpx;
        color:#FD5A26;
    }
    .price {
        position:absolute;
        top:50%;
        right:44rpx;
        transform:translateY(-50%);
        color:#FD5A26;
        font-size:30rpx;
        text {
            display:inline-block;
            vertical-align:middle;
        }
        .ico {
            margin-left:40rpx;
            width:14rpx;
            height:25rpx;
            background:url('http://182.254.192.167:6003/vue/upload/static/my/icon-arrow.png') no-repeat;
            background-size:contain;
        }
    }
}

.wrap-added {
    position:relative;
    margin:24rpx 20rpx;
    padding-left:24rpx;
    height:90rpx;
    line-height:90rpx;
    background:#FFF;
    border-radius:20rpx;
    .name {
        display:inline-block;
        color:#000;
        font-size:30rpx;
        vertical-align:middle;
    }
    .more {
        position:absolute;
        top:50%;
        right:44rpx;
        transform:translateY(-50%);
        text {
            display:inline-block;
            color:rgba(0,0,0,.7);
            font-size:30rpx;
            vertical-align:middle;
        }
        .price {
            color:#FD5A26;
        }
        .ico {
            margin-left:40rpx;
            width:14rpx;
            height:25rpx;
            background:url('http://182.254.192.167:6003/vue/upload/static/my/icon-arrow.png') no-repeat;
            background-size:contain;
        }
    }
}

.wrap-tips {
    margin:24rpx 20rpx;
    .hd {
        margin-bottom:24rpx;
        height:40rpx;
        line-height:40rpx;
        color:#333;
        font-size:30rpx;
    }
    .bd {
        color:#939292;
        font-size:24rpx;
    }
}

.wrap-actions {
    .notice {
        padding:0 44rpx;
        height:50rpx;
        line-height:50rpx;
        background:#FFF2D7;
        color:#FF7143;
        font-size:24rpx;
        text {
            display:inline-block;
            vertical-align:middle;
        }
        .ico {
            margin-right:12rpx;
            width:30rpx;
            height:30rpx;
            background:#000;
        }
    } 
    .actions {
        position:relative;
        height:128rpx;;
        .text {
            display:inline-block;
            padding-left:28rpx;
            line-height:128rpx;
            color:rgba(0,0,0,.3);
            font-size:30rpx;
            vertical-align:middle;
        }
        .btn {
            position:absolute;
            top:50%;
            right:20rpx;
            transform:translateY(-50%);
            width:500rpx;
            height:90rpx;
            background:#FFF4F1;
            border-radius:45rpx;
            border:1px solid #FD5A26;
            color:#FD5A26;
            font-size:22rpx;
            .item {
                display:inline-block;
                width:50%;
                height:90rpx;
                font-size:22rpx;
                text-align:center;
                vertical-align:middle;
                overflow:hidden;
                .price {
                    margin:8rpx 0 0;
                    height:40rpx;
                    line-height:40rpx;
                    font-size:22rpx;
                    text {
                        display:inline-block;
                        margin-left:4rpx;
                        font-size:38rpx;
                    }
                }
                .t {
                    margin-top:-4rpx;
                }
                &.rmb {
                    background:linear-gradient(87deg, #FFA63F, #EB5628);
                    border-radius:0 45rpx 45rpx 0;
                    color:#FFF;
                }
            }
        }
    }
}
</style>