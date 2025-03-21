<template>
    <view class="page">
        <div class="list-card">
            <view class="card">
                <view class="detail">
                    <view class="tag">去程</view>
                    <view class="date">10月23日 周五</view>
                </view>
                <view class="dates">
                    <view class="date-item">
                        <view class="d">08:00</view>
                        <view class="t">蛇口港口</view>
                    </view>
                    <view class="long"></view>
                    <view class="date-item">
                        <view class="d">08:00</view>
                        <view class="t">蛇口港口</view>
                    </view>
                </view>
                <view class="card-type">
                    <text class="t">票型</text>
                    <text class="tag">成人票、儿童票</text>
                </view>
                <view class="more">
                    <view 
                        class="item"
                        v-for="(item,index) in ruleList"
                        :key="index"
                        @click="chooseRule(item)"
                    >
                        {{ item.name }}
                    </view>
                </view>
            </view>
        </div>

        <view class="list-space">
            <view class="item">
                <view class="type">
                    <view class="t">
                        <text class="t1">普通舱</text>
                        <text class="t2">（49张）</text>
                    </view>
                    <view class="a">+</view>
                    <view class="t">
                        <text class="t1">普通舱</text>
                        <text class="t2">（49张）</text>
                    </view>
                </view>
                <view class="price">
                    <view class="item-price mop">
                        <text class="t1">MOP</text>
                        <text class="t2">65</text>
                    </view>
                    <view class="item-price">
                        <text class="t1">RMB</text>
                        <text class="t2">65</text>
                    </view>
                </view>
                <view class="btn">预定</view>
            </view>
        </view>

        <view class="tips">如需要购买VIP包房请到线下售票厅购买</view>

        <c-pop
            height="65vh"
            :isShow="isShoPop"
            @cbClosePop="cbClosePop"
        >
            <template #content>
                <view v-if="popType == 'book'">book</view>
                <view v-else-if="popType == 'ticket'">ticket</view>
                <view v-else-if="popType == 'refund'">refund</view>
            </template>
        </c-pop>
    </view>
</template>

<script>
export default {
    data(){
        return{
            opetions:{},
            ruleList:[
                {type:'book',name:'预定须知'},
                {type:'ticket',name:'取票说明'},    
                {type:'refund',name:'退票说明'}
            ],
            isShoPop:false,
            popType:''
        }
    },
    onLoad(e){
        this.opetions = e
    },
    methods:{
        chooseRule(item){
            this.isShoPop = true

            this.popType = item.type
        },
        cbClosePop(){
            this.isShoPop = false
            this.popType = ''
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

.list-card {
    padding:24rpx 20rpx;
    .card {
        position:relative;
        padding:0 40rpx;
        height:334rpx;
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
                height:100rpx;
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
                    color:rgba(0,0,0,.7)
                }
            }
            .long {
                position:absolute;
                top:50%;
                left:50%;
                transform:translate(-50%,-50%);
                width:103rpx;
                height:5rpx;
                background:url('http://182.254.192.167:6003/vue/upload/static/order/car2.png') no-repeat;
                background-size:contain;
            }
        }
        .card-type {
            padding-top:24rpx;
            height:24rpx;
            line-height:24rpx;
            text {
                display:inline-block;
                font-size:22rpx;
                vertical-align:middle;
            }
            .t {
                color:rgba(0,0,0,.6);
            }
            .tag {
                color:#000;
            }
        }
        .more {
            margin-top:8rpx;
            text-align:right;
            .item {
                display:inline-block;
                margin-left:32rpx;
                color:rgba(0,0,0,.6);
                font-size:22rpx;
                vertical-align:middle;
                text-decoration:underline;
            }
        }
    }
}

.list-space {
    margin:0 20rpx;
    .item {
        position:relative;
        margin-bottom:16rpx;
        padding-left:40rpx;
        padding-right:200rpx;
        height:136rpx;
        background:#FFF;
        border-radius:20rpx;
        .type {
            line-height:136rpx;
            .t,
            .a {
                display:inline-block;
                vertical-align:middle;
            }
            .t {
                .t1,
                .t2 {
                    display:inline-block;
                    vertical-align:middle;
                }
                .t1 {
                    color:#000;
                    font-size:32rpx;
                    font-weight:500;
                }
                .t2 {
                    color:#EC702E;
                    font-size:18rpx;
                }
            }
            .a {
                margin:0 16rpx;
                color:rgba(0,0,0,.5);
                font-size:26rpx;
            }
        }
        .price {
            position:absolute;
            top:50%;
            right:140rpx;
            transform:translateY(-50%);
            .item-price {
                height:45rpx;
                line-height:45rpx;
                color:#000;
                text-align:right;  
                .t1,
                .t2 {
                    display:inline-block;
                    vertical-align:middle;
                } 
                .t1 {
                    font-size:22rpx;
                }
                .t2 {
                    font-size:40rpx;
                    font-weight:500;
                }
                &.mop {
                    color:#FE6630;
                }  
            }
        }
        .btn {
            position:absolute;
            top:50%;
            right:34rpx;
            transform:translateY(-50%);
            width:84rpx;
            height:84rpx;
            line-height:84rpx;
            background:linear-gradient(142deg, #FFA63F, #EB5628);
            border-radius:10rpx;
            color:#FFF;
            font-size:20rpx;
            text-align:center;
        }
    }
}

.tips {
    position:absolute;
    bottom:60rpx;
    left:0;
    width:100%;
    height:30rpx;
    line-height:30rpx;
    color:#939292;
    font-size:24rpx;
    text-align:center;
}
</style>