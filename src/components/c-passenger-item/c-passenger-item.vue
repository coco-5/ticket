<template>
    <view class="c-passenger">
        <view class="label">
            <text class="name">童嘉颖</text>
            <text class="tag">成人</text>
        </view>
        <view class="right">
            <text>港澳通行证</text>
            <text class="b">C10****41</text>
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
.c-passenger {
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
</style>