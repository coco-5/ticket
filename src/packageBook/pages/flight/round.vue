<template>
    <view class="page">
        <destination></destination>
        <div class="list">
            <div 
                class="item-list"
                v-if="listDeparture.length"
            >
                <view class="hd">
                    <view class="text">去程 2024-06-12</view>
                    <view class="ico"></view>
                </view>
                <view class="bd">
                    <card
                        :item="item"
                        v-for="(item,index) in listDeparture"
                        :key="index"
                    ></card>
                </view>
            </div>
            <div 
                class="item-list arrival"
                v-if="listArrival.length"
            >
                <view class="hd">
                    <view class="text">返程 2024-06-13</view>
                    <view class="ico"></view>
                </view>
                <view class="bd">
                    <card
                        :item="item"
                        v-for="(item,index) in listArrival"
                        :key="index"
                    ></card>
                </view>
            </div>
        </div>
    </view>
</template>

<script>
import destination from '@/packageBook/components/destination'
import card from '@/packageBook/components/card'
export default {
    components:{
        destination,
        card
    },
    data(){
        return{
            listDeparture:[{},{}],
            listArrival:[{},{}]
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

.list {
    margin:0 17rpx;
    .item-list {
        display:inline-block;
        width:354rpx;
        vertical-align:top;
        .hd {
            height:83rpx;
            line-height:83rpx;
            background:url('http://182.254.192.167:6003/vue/upload/static/round/tab1.png') no-repeat;
            background-size:contain;
            color:#FFF;
            font-size:30rpx;
            text-align:center;
            .text,
            .ico {
                display:inline-block;
                vertical-align:middle;
            }
            .ico {
                margin-left:8rpx;
                width:11rpx;
                height:19rpx;
                background:url('http://182.254.192.167:6003/vue/upload/static/round/ico-arrow.png') no-repeat;
                background-size:contain;
            }
        }
        &.arrival {
            margin-left:10rpx;
            .hd {
                background-image:url('http://182.254.192.167:6003/vue/upload/static/round/tab2.png');
            }
        }
        .bd {
            background:#FFF;
            border-radius:0 0 20rpx 20rpx;
        }
    }
}
</style>