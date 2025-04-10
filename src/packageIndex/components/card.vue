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
                                :class="item.class"
                                v-for="(item,index) in list"
                                :key="index"
                                v-if="item.display == 1"
                                @click="choose(item)"
                            >
                                <view class="left">
                                    <template v-if="item.type == 1">
                                        <view class="num">{{item.num}}</view>
                                        <view class="imtes">可用（次）</view>
                                    </template>
                                    <template v-else-if="item.type == 3">
                                        <view class="num">{{item.discountRate / 10}}折</view>
                                        <view class="imtes">购买享受</view>
                                    </template>
                                    <template v-else>
                                        <view class="num">{{item.faceValueMoney}}</view>
                                        <view class="imtes">可用（元）</view>
                                    </template>
                                </view>
                                <view class="info">
                                    <view class="title">{{item.name}}</view>
                                    <view class="tags">
                                        <view class="tag">限湾仔-内港航线</view>
                                        <view class="tag">限深圳-内港航线</view>
                                    </view>
                                    <view class="date">有效期：{{item.st}}-{{item.et}}</view>
                                </view>
                            </view>
                            <view class="detail">
                                <rich-text :nodes="item.desc"></rich-text>
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
                        let data = res.data.rows 
                        //type 类型 1-次卡；2-现金卡（澳门币）；3-折扣卡；4 - 现金卡(人民币)

                        data.length > 0 && data.forEach((item)=>{
                            if(item.type == 1){
                                item.class = 'times'
                            }else if(item.type == 2){
                                item.class = 'cash'
                            }else if(item.type == 3){
                                item.class = 'discount'
                            }else if(item.type == 4){
                                item.class = 'cash'
                            }

                            item.st = item.validateStartTime.split(' ')[0]
                            item.st = item.st.replace(/\-/g,'.')
                            item.et = item.validateEndTime.split(' ')[0]
                            item.et = item.et.replace(/\-/g,'.')
                        })

                        this.list = data

                        resolve(data)
                    }
                })

            })
        },
        cbClosePop(){
            this.$emit('cbClosePop')
        },
        choose(item){

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
        overflow-y:auto;
        .item {
            position:relative;
            margin:0 24rpx 12rpx;
            padding-left:194rpx;
            height:194rpx;
            .info {
                height:100%;
                background:#FFF3EC;
                border-radius:12rpx;
                .title {

                }
                .tags {
                    .tag {
                        display:inline-block;
                        vertical-align:middle;
                    }
                }
                .date {

                }
            }
            .left {
                position:absolute;
                top:0;
                left:0;
                width:194rpx;
                height:194rpx;
                background:#EEE;
                color:#FFF;
                text-align:center;
                overflow:hidden;
                .num {
                    margin:50rpx 0 20rpx;
                    height:62rpx;
                    line-height:62rpx;
                    font-weight:500;
                    font-size:60rpx;
                }
                .times {
                    font-size:24rpx;
                }
            }
            .detail {

            }
            &.discount {
                .info {
                    background:#E0EFEA;
                }
            }
            &.cash {
                .info {
                    background:#E3F1FE;
                }
            }
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