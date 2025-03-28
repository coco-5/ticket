<template>
    <view class="page">
        <view class="tabs">
            <view 
                class="item"
                :class="tabIndex == index ? 'on' : ''"
                v-for="(item,index) in tabs"
                :key="index"
            >
                <text>{{item.name}}</text>
            </view>
        </view>

        <view class="list">
            <card
                :item="item"
                class="item"
                v-for="(item,index) in list"
                :key="index"
            ></card>
        </view>

        <view class="actions">
            <view class="btn">购买票卡</view>
        </view>
    </view>
</template>

<script>
import card from '@/packageUser/components/card'
export default {
    components:{
        card
    },
    data(){
        return{
            tabs:[
                {
                    name:'未使用/生效中',
                    value:0
                },
                {
                    name:'历史票卡',
                    value:1
                }
            ],
            tabIndex:0, 
            list:[
                {},
                {},
                {}
            ]     
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

.tabs {
    padding:40rpx 100rpx;
    height:77rpx;
    line-height:77rpx;
    text-align:center;
    .item {
        position:relative;
        display:inline-block;
        margin:0 40rpx;
        color:#555;
        font-size:34rpx;
        vertical-align:middle;
        &.on {
            color:#333;
            font-weight:500;
            &::before {
                content:' ';
                position:absolute;
                bottom:17rpx;
                left:50%;
                transform:translateX(-50%);
                width:47rpx;
                height:12rpx;
                background:linear-gradient(205deg, #FA7358, #FE6630);
                border-radius:6rpx;
            }
        }
        text {
            position:relative;
            z-index:2;
        }
    }
}

.list {
    box-sizing:border-box;
    margin:0 auto;
    padding:32rpx;
    width:710rpx;
    background:#FFF;
    border-radius:20rpx;
}

.actions {
    position:fixed;
    bottom:50rpx;
    left:50%;
    transform:translateX(-50%);
    width:664rpx;
    height:100rx;
    line-height:100rpx;
    border-radius:50rpx;
    background:linear-gradient(87deg, #FFA63F, #EB5628);
    color:#FFF;
    font-size:34rpx;
    font-weight:500;
    text-align:center;
}
</style>