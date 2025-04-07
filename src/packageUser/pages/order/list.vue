<template>
    <view class="page">
        <view class="tabs">
            <view 
                class="item"
                :class="tabIndex == index ? 'on' : ''"
                @click="tabIndex = index"
                v-for="(item,index) in tabList"
                :key="index"
            >
                {{item.name}}
            </view>
        </view>

        <view 
            class="banner"
            v-if="bannerList.length > 0"
        >
            <c-banner
                style="height:190rpx;"
                :list="bannerList"
            ></c-banner>
        </view>

        <view 
            class="list"
            v-if="allList[`type-`+tabIndex].list.length"
        >
            <view 
                class="item"
                :data-item="item"
                @click="goDetail"
                v-for="(item,index) in allList[`type-`+tabIndex].list"
                :key="index"
            >
                <view class="state">代支付</view>
                <view class="name">
                    <text class="t">澳门内港</text>
                    <text class="i"></text>
                    <text class="t">澳门内港</text>
                </view>
                <view class="desc">普通舱1位</view>
                <view class="date">去程时间：2024-05-31  08:00</view>
                <view class="date">去程时间：2024-05-31  08:00</view>
                <view class="price">
                    <text class="t">MOP</text>
                    <text class="p">120.00</text>
                </view>
                <view class="actions">
                    <view class="btn">取消订单</view>
                    <view 
                        class="btn orange"
                        :data-item="item"
                        @click.stop="goCode"
                    >
                        验票二维码
                    </view>
                </view>
            </view>
        </view>

        <view 
            class="no-content"
            v-else
        >
            <c-no-content
                type="note"
                title="当前没有相关订单"
            ></c-no-content>
        </view>

        <c-bottom
            current="1"
            :isShowNav="true"
        ></c-bottom>
    </view>
</template>

<script>
import utils from '@/utils/utils'
export default{
    data(){
        return{
            options:'',
            tabList:[
                {
                    name:'全部',
                    type:'0'
                },
                {
                    name:'待支付',
                    type:'1'
                },
                {
                    name:'已支付',
                    type:'2'
                },
                {
                    name:'已登船',
                    type:'3'
                }
            ],
            allList:{
                'type-0':{
                    isRequest:false,
                    done:false,
                    pageNo:1,
                    list:[{},{},{},{}],
                },
                'type-1':{
                    isRequest:false,
                    done:false,
                    pageNo:1,
                    list:[{}],
                },
                'type-2':{
                    isRequest:false,
                    done:false,
                    pageNo:1,
                    list:[{},{}],
                },
                'type-3':{
                    isRequest:false,
                    done:false,
                    pageNo:1,
                    list:[],
                }      
            },
            tabIndex:0,
            bannerList:['https://oss-hqwx-edu24ol.hqwx.com/miniapp/takepicture/common/ico-home.png','https://oss-hqwx-edu24ol.hqwx.com/miniapp/takepicture/common/ico-home-on.png','https://oss-hqwx-edu24ol.hqwx.com/miniapp/takepicture/common/ico-user.png'],
        }
    },
    onLoad(e){
        this.options = e
    },
    methods:{
        goDetail(item){
            let query = {}

            let url = `/packageUser/pages/order/detail?${utils.paramsStringify(query)}`

            uni.navigateTo({
                url
            })

        },
        goCode(item){
            let query = {}

            let url = `/packageUser/pages/order/code?${utils.paramsStringify(query)}`

            uni.navigateTo({
                url
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

.tabs {
    display:flex;
    height:108rpx;
    line-height:108rpx;
    .item {
        position:relative;
        flex:1;
        color:#000;
        font-size:30rpx;
        text-align:center;
        &.on {
            &::before {
                content:' ';
                position:absolute;
                bottom:25rpx;
                left:50%;
                transform:translateX(-50%);
                width:36rpx;
                height:8rpx;
                background:#EF672D;
                border-radius:4rpx;
                overflow:hidden;
            }
        }
    }
}

.banner {
    margin:0 auto;
    width:710rpx;
    height:190rpx;
    background:#CCC;
}

.list {
    margin:0 auto;
    width:710rpx;
    .item {
        position:relative;
        margin-bottom:24rpx;
        padding:30rpx;
        background:#FFF;
        border-radius:20rpx;
        overflow:hidden;
        .name {
            margin-bottom:24rpx;
            height:32rpx;
            line-height:32rpx;
            color:#000;
            font-size:28rpx;
            font-weight:500;
            text {
                display:inline-block;
                vertical-align:middle;
            }
            .i {
                margin:0 8rpx;
                width:24rpx;
                height:19rpx;
                background:url('http://182.254.192.167:6003/vue/upload/static/order/icon-wf.png') no-repeat;
                background-size:contain;
            }
        }
        .desc {
            margin-bottom:24rpx;
            height:32rpx;
            line-height:32rpx;
            color:rgba(0,0,0,.8);
            font-size:24rpx;    
        }
        .date {
            margin-bottom:24rpx;
            height:32rpx;
            line-height:32rpx;
            color:rgba(0,0,0,.8);
            font-size:24rpx;  
        }
        .price {
            margin-bottom:24rpx;
            text-align:right;
            text {
                display:inline-block;
                color:#000;
                vertical-align:middle;
                .t {
                    font-size:22rpx;
                }
                .p {
                    margin-left:8rpx;
                    font-size:32rpx;
                    font-weight:500;
                }
            }
        }
        .actions {
            text-align:right;
            .btn {
                display:inline-block;
                width:164rpx;
                height:60rpx;
                line-height:60rpx;
                border-radius:30rpx;
                border:1px solid rgba(0,0,0,.2);
                color:rgba(0,0,0,.2);
                font-size:26rpx;
                text-align:center;
                vertical-align:middle;
                &.orange {
                    margin-left:40rpx;
                    border-color:#FF480E;
                    color:#FF480E;
                }
            }
        }
        .state {
            position:absolute;
            top:32rpx;
            right:32rpx;
            color:#FB6217;
            font-size:26rpx;
        }
    }
}

.no-content {
    margin:300rpx auto 0;
}
</style>