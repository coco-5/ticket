<template>
    <view class="page">
        <destination
            :options="options"
        ></destination>

        <div class="list">
            <div 
                class="item-list"
                v-if="listDeparture.length"
            >
                <view class="hd">
                    <view class="text">去程 {{departureDate}}</view>
                    <view class="ico"></view>
                </view>
                <view class="bd">
                    <card
                        :item="item"
                        v-for="(item,index) in listDeparture"
                        @cbChoose="choose(item,'departure')"
                        :key="index"
                    ></card>
                </view>
            </div>
            <div 
                class="item-list arrival"
                v-if="listArrival.length"
            >
                <view class="hd">
                    <view class="text">返程 {{arrivalDate}}</view>
                    <view class="ico"></view>
                </view>
                <view class="bd">
                    <card
                        :item="item"
                        v-for="(item,index) in listArrival"
                        @cbChoose="choose(item,'arrival')"
                        :key="index"
                    ></card>
                </view>
            </div>
        </div>

        <view class="actions">
            <view 
                class="btn"
                @click="go"
            >
                下一步
            </view>
        </view>

        <c-bottom></c-bottom>
    </view>
</template>

<script>
import utils from '@/utils/utils'
import destination from '@/packageBook/components/destination'
import card from '@/packageBook/components/card'
export default {
    components:{
        destination,
        card
    },
    data(){
        return{
            options:{},
            departureDate:0,
            arrivalDate:0,
            listDeparture:[{id:1,isChoose:false},{id:2,isChoose:false},{id:3,isChoose:false},{id:4,isChoose:false},{id:5,isChoose:false}],
            listArrival:[{id:6,isChoose:false},{id:7,isChoose:false},{id:8,isChoose:false},{id:9,isChoose:false},{id:10,isChoose:false}],
        }
    },
    onLoad(e){
        this.options = e

        this.initDate()
    },
    methods:{
        initDate(){
            this.departureDate = utils.timeFormat(this.options.departureDate,'yyyy-mm-dd')
            this.arrivalDate = utils.timeFormat(this.options.arrivalDate,'yyyy-mm-dd')
        },
        choose(item,type){
            let id = item.id
            let list = type == 'departure' ? this.listDeparture : this.listArrival
            console.log(item,type)

            for(let i=0;i<list.length;i++){
                if(list[i].id == id){
                    list[i].isChoose = !list[i].isChoose
                }else{
                    list[i].isChoose = false
                }
            }
        },
        go(){
            let query = {
                type:'round',
                
            }

            let url = `/packageBook/pages/space/space?${utils.paramsStringify(query)}`

            uni.navigateTo({
                url
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
            font-weight:500;
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

.actions {
    position:fixed;
    padding-bottom:48rpx;
    bottom:0;
    left:0;
    width:100%;
    height:100rpx;
    .btn {
        margin:0 auto;
        width:664rpx;
        height:100rpx;
        line-height:100rpx;
        background:linear-gradient(87deg, #FFA63F, #EB5628);
        border-radius:50rpx;
        color:#FFF;
        font-size:34rpx;
        text-align:center;
    }
}
</style>