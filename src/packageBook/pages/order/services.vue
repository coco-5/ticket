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
        services
    </view>
</template>

<script>
export default {
    data(){
        return{
            tabs:[
                {
                    name:'酒店',
                    value:0
                },
                {
                    name:'接车服务',
                    value:1
                },
                {
                    name:'其他',
                    value:2
                }
            ],
            tabIndex:0, 
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
    padding:40rpx 50rpx;
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

</style>