<template>
    <view class="page">
        <view class="block"></view>
        <view class="list">
            <view 
                class="item"
                :class="item.type + (item.disabled ? ' disabled' : '')"
                v-for="(item,index) in list"
                :key="index"
            >
                <view class="name">
                    <view class="ico"></view>
                    <view class="type">{{item.name}}</view>
                </view>
                <view class="line"></view>
                <view class="detail">
                    <text class="nickname">张先生</text>
                    <text class="mobile">1363147600</text>
                </view>
                <view class="date">有效期：2020.01.23-2021.02.23</view>
                <view class="num">LD2191</view>
            </view>
        </view>

        <view class="btn">申请成为会员</view>
    </view>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {type:'zhuaoka',name:'珠澳卡'},
                {type:'zhuaojumen',name:'珠澳居民'},
                {type:'zhuaojumen',name:'珠澳居民',disabled:true}
            ]
        }
    },
    onLoad(e){

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

.block {
    height:42rpx;
}

.list {
    margin:0 auto;
    width:710rpx;
    .item {
        position:relative;
        margin-bottom:20rpx;
        height:232rpx;
        background-repeat:no-repeat;
        background-position:top center;
        background-size:contain;
        overflow:hidden;
        .name {
            margin:40rpx 0 24rpx 40rpx;
            height:40rpx;
            line-height:40rpx;
            font-size:34rpx;
            .ico,
            .type {
                display:inline-block;
            }
            .ico {
                margin-right:12rpx;
                width:35rpx;
                height:27rpx;
                background-repeat:no-repeat;
                background-position:top center;
                background-size:contain;
            }
            .type {
                font-size:34rpx;
                font-weight:500;
            }
        }
        .line {
            margin:24rpx auto;
            width:636rpx;
            height:11rpx;
            background-repeat:no-repeat;
            background-position:top center;
            background-size:cover;
        }
        .detail {
            margin-left:40rpx;
            height:32rpx;
            line-height:32rpx;
            color:#FFF;
            font-size:28rpx;
            font-weight:500;
            text {
                display:inline-block;
                margin-right:40rpx;
            }
        }
        .date {
            margin-top:16rpx;
            margin-left:40rpx;
            height:30rpx;
            line-height:30rpx;
            color:#FFF;
            font-size:22rpx;
        }
        .num {
            position:absolute;
            top:40rpx;
            right:40rpx;
            color:#FFF;
            font-size:22rpx;
        }
        &.zhuaoka {
            background-image:url('http://182.254.192.167:6003/vue/upload/static/vip/type-bg1.png');
            .name {
                .ico {
                    background-image:url('http://182.254.192.167:6003/vue/upload/static/vip/type-id1.png');    
                }
                .type {
                    color:#FFF;
                }
            }
            .line {
                background-image:url('http://182.254.192.167:6003/vue/upload/static/vip/type-border1.png'); 
            }
        }
        &.zhuaojumen {
            background-image:url('http://182.254.192.167:6003/vue/upload/static/vip/type-bg2.png');
            .name {
                .ico {
                    background-image:url('http://182.254.192.167:6003/vue/upload/static/vip/type-id2.png');    
                }
                .type {
                    color:#9E6F3D;
                }

            }
            .line {
                background-image:url('http://182.254.192.167:6003/vue/upload/static/vip/type-border2.png'); 
            }
        }
        &.disabled {
            background-image:url('http://182.254.192.167:6003/vue/upload/static/vip/type-bg3.png');
            .name {
                .ico {
                    background-image:url('http://182.254.192.167:6003/vue/upload/static/vip/type-id3.png');    
                }
                .type {
                    color:rgba(0,0,0,.5);
                }
            }
            .line {
                background-image:url('http://182.254.192.167:6003/vue/upload/static/vip/type-border3.png'); 
            }
        }
    }
}

.btn {
    position:fixed;
    bottom:40rpx;
    left:50%;
    transform:translateX(-50%);
    width:664rpx;
    height:100rpx;
    line-height:100rpx;
    background:linear-gradient(87deg, #FFA63F, #EB5628);
    border-radius:50rpx;
    color:#FFF;
    font-size:34rpx;
    text-align:center;
}
</style>