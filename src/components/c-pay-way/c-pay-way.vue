<template>
    <view class="list">
        <view 
            class="item"
            v-for="(item,index) in payList"
            :key="index"
        >
            <image 
                class="ico" 
                :src="item.ico"
            />
            <view class="name">
                <view class="n">{{item.name}}</view>
                <view class="d">{{item.desc}}</view>
            </view>
            <view class="actions">
                <view class="btn"></view>
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
            payList:[
                {type:'wxpay', name:'微信支付（澳门币支付）',desc:'微信安全支付',ico:'http://182.254.192.167:6003/vue/upload/static/paylist/wxzf.png'},
            ]
        }
    },
    mounted(){

    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
.item {
    position:relative;
    height:82rpx;
    .ico {
        display:inline-block;
        margin-right:12rpx;
        width:82rpx;
        height:82rpx;
        vertical-align:middle;
    }
    .name {
        display:inline-block;
        vertical-align:middle;
        .n {
            margin-top:16rpx;
            height:30rpx;
            line-height:30rpx;
            color:#202020;
            font-size:28rpx;
        }
        .d {
            color:#7D7D7D;
            font-size:22rpx;
        }
    }
}
</style>