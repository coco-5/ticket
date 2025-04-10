<template>
    <view class="c-card">
        <c-pop
            height="65vh"
            :isShow="isShow"
            @cbClosePop="cbClosePop"
        >
            <template #content>
                <view 
                    class="a"
                    :style="{height:'calc(65vh - ' + bottom + 'rpx)'}"
                >
                    <template v-if="list.length > 0">
                        <view class="hd">
                            票卡
                            <view class="close"></view>
                        </view>
                        <view 
                            class="bd"
                        >
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

                    <view 
                        class="c-no-content"
                        v-else
                    >
                        <c-no-content
                            type="note"
                            title="当前没有相关订单"
                        ></c-no-content>    
                    </view>
                </view>
            </template>
        </c-pop>
    </view>
</template>

<script>
import utils from '@/utils/utils'
import { getTicketCardListApi } from '@/api/ticket'
export default {
    props:{
        isShow:{
            type:Boolean,
            default:false
        }
    },
    watch:{
        isShow:{
            deep:true,
            handler(n){
                if(n && this.list.length == 0){
                    this.getList()     
                }
            }
        } 
    },
    data() {
        return {
            list:[],
            bottom:0
        }
    },
    mounted(){
        this.bottom = utils.fixIPhoneX() ? 48 : 0
    },
    methods:{
        getList(){
            let list = [
                this.getTicket()
            ]

            Promise.all(list)
        },
        getTicket(){
            return new Promise((resolve)=>{
                getTicketCardListApi({}).then((res)=>{
                    if(res.data.code == 200){
                        let data = res.data.data || []

                        this.list = data

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
    .a {
        position:relative;
    }
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
        background:#000;
        overflow-y:auto;
        .item {
            margin-bottom:12rpx;
            height:194rpx;
        }
    }
    .ft {
        position:absolute;
        bottom:0;
        left:50%;
        transform:translateX(-50%);
        width:664rpx;
        .btn {
            width:100%;
            height:100rpx;
            line-height:100rpx;
            background:linear-gradient(87deg, #FFA63F, #EB5628);
            border-radius:50rpx;
            color:#FFF;
            font-size:34rpx;
            text-align:center;
        }
    }
}
</style>