<template>
    <view 
        class="c-passenger"
        :class="needAction ? 'action' : ''"
    >
        <view class="ico"></view>
        <view class="name">
            <text class="n">童嘉颖</text>
            <text class="t">成人</text>
        </view>
        <view class="passport">
            <text class="n">港澳通行证</text>
            <text class="t">C10****41</text>
        </view>
    </view>
</template>

<script>
export default {
    props:{
        needAction:{
            type:Boolean,
            default:false
        },
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
.c-passenger {
    .name {
        .n,
        .t {
            display:inline-block;
            vertical-align:middle;
        }
        .n {
            margin-right:12rpx;
            color:#000;
            font-size:30rpx;
        }
        .t {
            padding:0 10rpx;
            height:30rpx;
            line-height:30rpx;
            border:1px solid #B2B2B2;
            border-radius:5rpx;
            color:#A3A3A3;
            font-size:18rpx;
        }
    }
}

.c-passenger {
    &.no {
        position:relative;
        margin-bottom:24rpx;
        .ico {
            display:inline-block;
            margin-right:32rpx;
            width:38rpx;
            height:38rpx;
            background:#EEE;
            vertical-align:middle;
        }
        .name {
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

.c-passenger {
    position:relative;
    &.action {
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
        }
        .passport {
            height:30rpx;
            line-height:30rpx;
            color:#8D8D8D;
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
}
</style>