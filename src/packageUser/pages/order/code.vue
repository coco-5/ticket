<template>
    <view class="page">
        <view class="tabs">
            <view 
                class="item"
                :class="tabIndex == index ? 'on' : ''"
                @click="changeTab(index)"
                v-for="(item,index) in tabs"
                :key="index"
            >
                {{item.name}}
            </view>
        </view>

        <view v-if="tabIndex == 0">
            <view class="wrap-code">
                <view class="dest">
                    <text class="t">内港码头</text>
                    <text class="i"></text>
                    <text class="t">内港码头</text>
                </view>
                <view class="tips-nodes">
                    <rich-text :nodes="nodes"></rich-text>
                </view>
                <view class="tips-code">凭二维码验票乘船</view>
                <view class="swpier-code">
                    <view 
                        class="btn prev"
                        :class="codeIndex == 0 ? 'disabled' : ''"
                    ></view>
                    <view 
                        class="btn next"
                    ></view>
                    <swiper class="swiper">
                        <swiper-item 
                            class="swiper-item"
                            v-for="(item,index) in codeList"
                            :key="index"
                        >
                            <image />
                        </swiper-item>
                    </swiper>
                    <view class="dots">
                        <view 
                            class="dot"
                            :class="index == codeIndex ? 'on' : ''"
                            v-for="(item,index) in codeList"
                            :key="index"
                        ></view>
                    </view>
                </view>
                <view class="btn-refresh">刷新二维码</view>
                <view class="btn-line"></view>
                <view class="item-passenger">
                    <view class="user">
                        <view class="name">
                            <text class="n">童嘉颖</text>
                            <text class="t">成人</text>
                        </view>
                        <view class="cheng">去程</view>
                    </view>
                    <view class="item">
                        <text class="label">港澳通行证</text>
                        <text class="right">C10****41</text>
                    </view>
                    <view class="item">
                        <text class="label">票号</text>
                        <text class="right">1180747363</text>
                    </view>
                    <view class="item">
                        <text class="label">座位</text>
                        <text class="right">55号</text>
                        <view class="tips">*座位号以当天入闸后的实际座位号为准</view>
                    </view>
                    <view class="item">
                        <text class="label">出发时间</text>
                        <text class="right">2024-04-01  10:40</text>
                    </view>
                </view>
            </view>

            <view class="thanks">感谢您购买我司轮渡航班，祝您旅途愉快！</view>

            <view 
                class="banner"
                v-if="bannerList.length > 0"
            >
                <c-banner
                    style="height:189rpx;"
                    :list="bannerList"
                ></c-banner>
            </view>
        </view>

        <view v-if="tabIndex == 1">
            <view class="wrap-top">
                <c-trip-detail></c-trip-detail>
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
        </view>

        <view class="actions">
            <view class="btn">退票</view>
        </view>
    </view>
</template>

<script>
export default {
    data(){
        return{
            tabs:[
                {type:'code',name:'验票二维码'},
                {type:'detail',name:'详细信息'},
            ],
            tabIndex:0,
            nodes:'<p>请在发船当天提前半小时</p><p>携带所有乘船人的有效出境证件</p>',
            bannerList:['','',''],
            codeList:['','',''],
            codeIndex:0
        }
    },
    onLoad(e){

    },
    methods:{
        changeTab(index){
            this.tabIndex = index
        }
    }
}
</script>

<style lang="scss" scoped>
.page {
    min-height:100vh;
    background:url('http://182.254.192.167:6003/vue/upload/static/order/bg.png') #F8F8F8 no-repeat;
    background-size:contain;
}

.tabs {
    display:flex;
    padding:0 100rpx;
    height:130rpx;
    line-height:130rpx;
    color:#FFF;
    font-size:32rpx;
    text-align:center;
    .item {
        flex:1;
        height:130rpx;
        &.on {
            position:relative;
            font-size:36rpx;
            font-weight:500;
            &::before {
                content:' ';
                position:absolute;
                bottom:0;
                left:50%;
                transform:translateX(-50%);
                width:17rpx;
                height:13rpx;
                background:url('http://182.254.192.167:6003/vue/upload/static/common/active.png') no-repeat;
                background-size:contain;
            }
        }
    }
}

.wrap-code {
    margin:0 auto;
    width:710rpx;
    background:#FFF;
    border-radius:20rpx;
    overflow:hidden;
    .dest {
        height:132rpx;
        line-height:132rpx;
        color:rgba(0,0,0,.9);
        font-size:36rpx;
        text-align:center;
        text {
            display:inline-block;
            vertical-align:middle;
        }
        .i {
            margin:0 20rpx;
            width:103rpx;
            height:5rpx;
            background:url('http://182.254.192.167:6003/vue/upload/static/order/car2.png') no-repeat;
            background-size:cover;
        }
    }
    .tips-nodes {
        color:rgba(0,0,0,.7);
        font-size:26rpx;
        text-align:center;
    }
    .tips-code {
        margin:24rpx auto;
        width:285rpx;
        height:48rpx;
        line-height:48rpx;
        border-radius:24rpx;
        background:rgba(255, 72, 14, 0.08);
        color:#FF480E;
        font-size:26rpx;
        text-align:center;
    }
    .btn-refresh {
        margin:26rpx 0;
        height:32rpx;
        line-height:32rpx;
        color:rgba(0,0,0,.5);
        font-size:26rpx;
        text-align:center;
    }
}

.swpier-code {
    position:relative;
    height:400rpx;
    .btn {
        position:absolute;
        top:40%;
        transform:translateY(-50%);
        width:64rpx;
        height:64rpx;
        background-repeat:no-repeat;
        background-position:top center;
        background-size:contain;
        &.prev {
            left:80rpx;
            background-image:url('http://182.254.192.167:6003/vue/upload/static/order/icon-right.png');
        }
        &.next {
            right:80rpx;
            background-image:url('http://182.254.192.167:6003/vue/upload/static/order/icon-left.png');
        }
        &.disabled {
            opacity:.5;
        }
    }
    .swiper {
        margin:0 auto;
        width:356rpx;
        height:356rpx;
        background:#EEE;
        .swiper-item {
            width:100%;
            height:100%;
        }
    }
    .dots {
        margin:24rpx 0;
        text-align:center;
        .dot {
            display:inline-block;
            margin-right:20rpx;
            width:14rpx;
            height:14rpx;
            background:rgba(0, 0, 0, 0.1);
            border-radius:7rpx;
            vertical-align:middle;
            &.on {
                background:rgba(255, 72, 14,0.5);
            }
        }
    }
}

.btn-line {
    margin:40rpx auto;
    width:642rpx;
    height:2rpx;
    background:url('http://182.254.192.167:6003/vue/upload/static/common/ewdsfdsfe.png') no-repeat;
    background-size:cover;
}

.item-passenger {
    margin:0 40rpx;
    .user {
        position:relative;
        margin-bottom:40rpx;
        height:40rpx;
        line-height:40rpx;
        color:rgba(0,0,0,.9);
        font-size:38rpx;
        .name {
            display:inline-block;
            vertical-align:middle;
            .n,
            .t {
                vertical-align:middle;
            }
            .t {
                margin-left:16rpx;
                padding:0 10rpx;
                height:30rpx;
                line-height:30rpx;
                border:1px solid rgba(0,0,0,.3);
                border-radius:5rpx;
                color:rgba(0,0,0,.3);
                font-size:18rpx;
                text-align:center;
            }
        }
        .cheng {
            position:absolute;
            top:0;
            width:81rpx;
            height:40rpx;
            right:0;
            font-size:34rpx;
            text-align:center;
            &::before {
                content:' ';
                position:absolute;
                bottom:-5rpx;
                left:59%;
                transform:translateX(-50%);
                width:81rpx;
                height:5rpx;
                background:url('http://182.254.192.167:6003/vue/upload/static/order/car3.png') no-repeat;
                background-size:contain;
            }
        }
    }
    .item {
        position:relative;
        margin-bottom:32rpx;
        line-height:30rpx;
        font-size:28rpx;
        .label {
            display:inline-block;
            margin-right:16rpx;
            width:140rpx;
            color:#777;
            vertical-align:middle;
        }
        .right {
            display:inline-block;
            color:#000;
            vertical-align:middle;
        }
        .tips {
            margin-top:16rpx;
            color:rgba(255, 72, 14,0.7);
            font-size:22rpx;
        }
    }
}

.thanks {
    margin:40rpx 0;
    height:30rpx;
    line-height:30rpx;
    color:#898989;
    font-size:26rpx;
    text-align:center;
}

.banner {
    height:189rpx;
    background:#CCC;
}

.wrap-top {
    margin:24rpx 20rpx;
    position:relative;
    padding:0 40rpx;
    background:linear-gradient(205deg, #FFF7F4, #FFFFFF);
    border-radius:20rpx;
    overflow:hidden;
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
    bottom:0;
    left:0;
    width:100%;
    height:150rpx;
    background:#FFF;
    overflow:hidden;
    .btn {
        margin:14rpx auto 0;
        width:664rpx;
        height:100rpx;
        border-radius:50rpx;
        border:1px solid #B2B2B2;
        line-height:100rpx;
        color:#B2B2B2;
        font-size:34rpx;
        text-align:center;
    }
}
</style>