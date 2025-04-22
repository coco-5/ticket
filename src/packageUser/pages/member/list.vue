<template>
    <view class="page">
        <view class="block"></view>
        <view class="list">
            <view 
                class="item"
                :class="item.type + (item.disabled ? ' disabled' : '')"
                v-for="(item,index) in list"
                :key="index"
            >
                <view class="name">
                    <view class="ico"></view>
                    <view class="type">{{item.type == 'zhuaoka' ? '珠澳卡' : '珠澳居民'}}</view>
                </view>
                <view class="line"></view>
                <view class="detail">
                    <text class="nickname">{{item.name}}</text>
                    <text class="mobile">{{item.mobile || ''}}</text>
                </view>
                <view class="date">有效期：{{item.validateStartTime ? item.validateStartTime : ''}}-{{item.validateEndTime ? item.validateEndTime : ''}}</view>
                <view class="num">{{item.idcard}}</view>
            </view>
        </view>

        <view 
            class="btn"
            @click="goBuy"
        >
            申请成为会员
        </view>
    </view>
</template>

<script>
import utils from '@/utils/utils'
import { getMemberCardInfoApi } from '@/api/member'
export default {
    data(){
        return{
            list:[]
        }
    },
    onLoad(e){
        this.optins = e

        this.getInfo()
    },
    methods:{
        getInfo(){
            let params = {}
            
            getMemberCardInfoApi(params).then((res)=>{
                if(res.data.code == 200){
                    // memberCitizenList  珠澳居民  
                    // memberCardList 珠澳卡
                    let data = res.data.data
                    let list = []

                    if(data.memberCardList && data.memberCardList.length > 0){
                        data.memberCardList.forEach((item)=>{
                            item.type = 'zhuaoka'
                            list.push(item)
                        })
                    }

                    if(data.memberCitizenList && data.memberCitizenList.length > 0){
                        data.memberCitizenList.forEach((item)=>{
                            item.type = 'zhuaojumen'
                            list.push(item)
                        })
                        
                    }

                    console.log(999,'list',list)
                    this.list = list
                }else{
                    uni.showToast({
                        title:res.data.msg,
                        icon:'none'
                    })
                }
            })
        },
        goBuy(){
            let url = `/packageUser/pages/member/apply`

            uni.navigateTo({
                url,
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.page {
    min-height:100vh;
    background:#F8F8F8;   
}

.block {
    height:42rpx;
}

.list {
    margin:0 auto;
    width:710rpx;
    .item {
        position:relative;
        margin-bottom:20rpx;
        height:232rpx;
        background-repeat:no-repeat;
        background-position:top center;
        background-size:contain;
        overflow:hidden;
        .name {
            margin:40rpx 0 24rpx 40rpx;
            height:40rpx;
            line-height:40rpx;
            font-size:34rpx;
            .ico,
            .type {
                display:inline-block;
            }
            .ico {
                margin-right:12rpx;
                width:35rpx;
                height:27rpx;
                background-repeat:no-repeat;
                background-position:top center;
                background-size:contain;
            }
            .type {
                font-size:34rpx;
                font-weight:500;
            }
        }
        .line {
            margin:24rpx auto;
            width:636rpx;
            height:11rpx;
            background-repeat:no-repeat;
            background-position:top center;
            background-size:cover;
        }
        .detail {
            margin-left:40rpx;
            height:32rpx;
            line-height:32rpx;
            color:#FFF;
            font-size:28rpx;
            font-weight:500;
            text {
                display:inline-block;
                margin-right:40rpx;
            }
        }
        .date {
            margin-top:16rpx;
            margin-left:40rpx;
            height:30rpx;
            line-height:30rpx;
            color:#FFF;
            font-size:22rpx;
        }
        .num {
            position:absolute;
            top:40rpx;
            right:40rpx;
            color:#FFF;
            font-size:22rpx;
        }
        &.zhuaoka {
            background-image:url('http://8.138.130.153:6003/vue/upload/static/vip/type-bg1.png');
            .name {
                .ico {
                    background-image:url('http://8.138.130.153:6003/vue/upload/static/vip/type-id1.png');    
                }
                .type {
                    color:#FFF;
                }
            }
            .line {
                background-image:url('http://8.138.130.153:6003/vue/upload/static/vip/type-border1.png'); 
            }
        }
        &.zhuaojumen {
            background-image:url('http://8.138.130.153:6003/vue/upload/static/vip/type-bg2.png');
            .name {
                .ico {
                    background-image:url('http://8.138.130.153:6003/vue/upload/static/vip/type-id2.png');    
                }
                .type {
                    color:#9E6F3D;
                }

            }
            .line {
                background-image:url('http://8.138.130.153:6003/vue/upload/static/vip/type-border2.png'); 
            }
        }
        &.disabled {
            background-image:url('http://8.138.130.153:6003/vue/upload/static/vip/type-bg3.png');
            .name {
                .ico {
                    background-image:url('http://8.138.130.153:6003/vue/upload/static/vip/type-id3.png');    
                }
                .type {
                    color:rgba(0,0,0,.5);
                }
            }
            .line {
                background-image:url('http://8.138.130.153:6003/vue/upload/static/vip/type-border3.png'); 
            }
        }
    }
}

.btn {
    position:fixed;
    bottom:40rpx;
    left:50%;
    transform:translateX(-50%);
    width:664rpx;
    height:100rpx;
    line-height:100rpx;
    background:linear-gradient(87deg, #FFA63F, #EB5628);
    border-radius:50rpx;
    color:#FFF;
    font-size:34rpx;
    text-align:center;
}
</style>