<template>
    <view class="c-cooperate">
        <view 
            class="item"
            @click="go(item)"
            v-for="(item,index) in list"
            :key="index"
            v-if="item.display == 1"
        >
            <img :src="item.icon"/>
            <view class="text">{{item.title}}</view>
        </view>

        <card
            :isShow="isShowCard"
            @cbClosePop="cbCloseCard"
        ></card>
    </view>
</template>

<script>
import { getPartnerListApi } from '@/api/common'
import card from '@/packageIndex/components/card'
export default {
    components:{
        card,
    },
    data() {
        return {
            list:[
                {
                    type:'card',
                    sort:0,
                    display:1, 
                    title:'票卡购票',
                    icon:'http://182.254.192.167:6003/vue/upload/static/index/ad-pkgp.png'
                }
            ],
            isShowCard:false       
        }
    },
    mounted(){
        this.getPartnerList()
    },
    methods: {
        getPartnerList(){
            getPartnerListApi().then(res=>{
                if(res.data.code == 200){
                    let data = res.data.data || []

                    this.list = this.list.concat(data)

                    this.list.sort((a, b) => a.sort - b.sort)
                }
            })
        },
        go(item){
            if(item.type == 'card'){
                this.isShowCard = true
                return
            }else{
                if(item.link){
                    let url = `/pages/notice/notice?url=${item.link}`

                    uni.navigateTo({
                        url:url
                    })
                }else{
                    uni.showToast({
                        title:'即将上线，敬请期待',
                        icon:'none'
                    })

                }
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