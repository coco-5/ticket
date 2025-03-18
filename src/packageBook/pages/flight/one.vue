<template>
    <view class="page">
        <view class="destination">
            <view class="text">深圳蛇口</view>
            <view class="ico"></view>
            <view class="text">澳门氹仔</view>
        </view>

        <view class="dates">
            <date></date>
        </view>

        <view class="list">
            <view class="item"></view>
        </view>
    </view>
</template>

<script>
import date from '@/packageBook/components/date'
export default {
    components:{
        date,
    },
    data(){
        return{

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

.destination {
    padding:32rpx 0;
    color:#000;
    font-size:34rpx;
    font-weight:500;
    text-align:center;
    .text,
    .ico {
        display:inline-block;
        vertical-align:middle;
    }
    .ico {
        margin:0 16rpx;
        width:40rpx;
        height:5rpx;
        background:url('http://182.254.192.167:6003/vue/upload/static/ticket/car2.png') no-repeat;
        background-size:contain;
    }
}

.dates {
    margin:0 0 32rpx;
}
</style>