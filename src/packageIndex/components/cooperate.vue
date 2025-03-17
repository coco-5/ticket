<template>
    <view class="c-cooperate">
        <view 
            class="item"
            @click="go(item)"
            v-for="(item,index) in list"
            :key="index"
        >
            <img :src="item.ico"/>
            <view class="text">{{item.name}}</view>
        </view>

        <card
            :isShow="isShowCard"
            @cbClosePop="cbCloseCard"
        ></card>
    </view>
</template>

<script>
import card from '@/packageIndex/components/card'
export default {
    components:{
        card,
    },
    data() {
        return {
            list:[
                {type:'buy',name:'票卡购票',ico:'http://182.254.192.167:6003/vue/upload/static/index/ad-pkgp.png'},
                {type:'stop',name:'停航航班',ico:'http://182.254.192.167:6003/vue/upload/static/cooperate/ad2.png'},
                {type:'note-buy',name:'购票通知',ico:'http://182.254.192.167:6003/vue/upload/static/cooperate/ad1.png'},
                {type:'note-stop',name:'退票须知',ico:'http://182.254.192.167:6003/vue/upload/static/cooperate/ad3.png'},
                {type:'mall',name:'优选商城',ico:'http://182.254.192.167:6003/vue/upload/static/cooperate/ad4.png'},
                {type:'aomen',name:'海上看澳门',ico:'http://182.254.192.167:6003/vue/upload/static/cooperate/ad5.png'},
                {type:'book',name:'邮轮预定',ico:'http://182.254.192.167:6003/vue/upload/static/cooperate/ad6.png'},
                {type:'island',name:'海岛游',ico:'http://182.254.192.167:6003/vue/upload/static/cooperate/ad7.png'}
            ],
            isShowCard:false       
        }
    },
    mounted(){

    },
    methods: {
        go(item){
            if(item.type == 'buy'){
                this.isShowCard = true
                return
            }
        },
        cbCloseCard(){
            this.isShowCard = false
        }   
    }
}
</script>

<style lang="scss" scoped>
.c-cooperate {
    padding-bottom:46rpx;
    background:#FFF;
    border-radius:24rpx;
    .item {
        display:inline-block;
        width:25%;
        height:155rpx;
        vertical-align:top;
        text-align:center;
        img {
            display:block;
            margin:48rpx auto 20rpx;
            width:54rpx;
            height:54rpx;
        }
        .text {
            color:#000;
            font-size:22rpx;
        }
    }
}
</style>