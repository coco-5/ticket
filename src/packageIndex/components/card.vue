<template>
    <view class="c-card">
        <c-pop
            height="65vh"
            :isShow="isShow"
            @cbClosePop="cbClosePop"
        >
            <template #content>
                <view class="hd">
                    票卡
                    <view class="close"></view>
                </view>
                <view class="bd">
                    <view 
                        class="item"
                        v-for="(item,index) in list"
                        :key="index"
                        @tap="choose(item)"
                    >
                        <view class="left">
                            <view class="num">20</view>
                            <view class="imtes">可用（次）</view>
                        </view>
                        <view class="info">
                            <view class="title">珠澳卡</view>
                            <view class="tags">
                                <view class="tag">限湾仔-内港航线</view>
                                <view class="tag">限深圳-内港航线</view>
                            </view>
                            <view class="date">有效期：2024.05.01-2024.05.31</view>
                            <view class="detail"></view>
                        </view>
                    </view>
                </view>
                <view class="ft">
                    <view 
                        class="btn" 
                        @click="confirm"
                    >
                        确定
                    </view>
                </view>
            </template>
        </c-pop>
    </view>
</template>

<script>
import { getTicketCardApi } from '@/api/common'
export default {
    props:{
        isShow:{
            type:Boolean,
            default:false
        }
    },
    data() {
        return {
            list:[{type:1},{type:2},{type:3}]
        }
    },
    mounted(){
        this.getList()
    },
    methods:{
        getList(){
            let params = {}

            return new Promise((resolve)=>{
                getTicketCardApi(params).then((res)=>{
                    if(res.data.code == 200){
                        let data = res.data.data || []

                        resolve(data)
                    }
                })

            })
        },
        cbClosePop(){
            this.$emit('cbClosePop')
        },
        confirm(){

        }
    }
}
</script>

<style lang="scss" scoped>
.c-card {
    .hd {
        position:relative;
        height:148rpx;
        line-height:148rpx;
        color:#000;
        font-size:40rpx;
        font-weight:500;
        text-align:center;
        .close {
            position:absolute;
            top:50%;
            right:24rpx;
            transform:translateY(-50%);
            width:42rpx;
            height:43rpx;
            background:url('http://182.254.192.167:6003/vue/upload/static/common/icon-colse.png') no-repeat;
            background-size:contain;
        }
    }
    .bd {
        margin:0 25rpx;
        height:620rpx;
        overflow-y:auto;
        .item {
            margin-bottom:12rpx;
            height:194rpx;
        }
    }
}
</style>