<template>
    <view 
        class="book"
        :class="tabType"
    >
        <view class="tab">
            <view 
                class="item"
                @click="changeType(item)"
                v-for="(item,index) in tabList"
                :key="index"
            >
                {{ item.name }}
            </view>
        </view>

        <view class="notice">
            <view class="mic"></view> 
            <view class="text">【重要提示】珠海旅客来深注意事项</view>
            <view class="ico"></view>
        </view>

        <view class="destination">
            <view 
                class="item"
                v-for="(item,index) in destinationList"
                :key="index"
            >
                <view class="t1">
                    {{item.name}}
                </view>
                <view 
                    class="t2"
                    @click="showDestPop(item)"
                >
                    {{item.value}} 
                </view>
            </view>
            <view 
                class="exchange"
                @click="exChangeDest"
            ></view>
        </view>

        <view class="date">
            <template
            >
                <view 
                    class="item"
                    v-if="tabType == 'round' || (tabType == 'one' && item.type == 'departureDate')"
                    v-for="(item,index) in dateList"
                    :key="index"
                >
                    <view 
                        class="t1"
                    >
                        {{item.name}}
                    </view>
                    <view 
                        class="t2"
                        @click="showDatePop(item)"
                    >
                        {{item.value}} 
                    </view>
                </view>  
            </template>  
        </view>
        
        <c-pop
            height="65vh"
            :isShow="isShowDeparturePop"
            @cbClosePop="cbCloseDepartPop"
        >
            <template #content>
                <c-place-picker
                    :list="departureList"
                    :title="'出发港'"
                    @cbClosePop="cbCloseDepartPop"
                    @cbChoose="cbChooseDeparture"
                >
                </c-place-picker>
            </template>
        </c-pop>

        <c-pop
            height="65vh"
            :isShow="isShowArrivalPop"
            @cbClosePop="cbCloseArrivalPop"
        >
            <template #content>
                <c-place-picker
                    :list="arrivalList"
                    :title="'到达港'"
                    @cbClosePop="cbCloseArrivalPop"
                    @cbChoose="cbChooseArrival"
                >
                </c-place-picker>
            </template>
        </c-pop>

        <c-pop
            height="65vh"
            :isShow="isShowDatePop"
            @cbClosePop="cbCloseDatePop"
        >
            <template #content>
                <c-date></c-date>
            </template>
        </c-pop>
    </view>
</template>

<script>
export default {
    data(){
        return{
            tabList:[
                {type:'one', name:'单程',active:true},
                {type:'round', name:'往返',active:false}
            ],
            destinationList:[
                {type:'departureDest', name:'出发港',value:'111'},
                {type:'arrivalDest', name:'到达港',value:'222'}
            ],
            dateList:[
                {type:'departureDate', name:'出发时间',value:'111'},
                {type:'arrivalDate', name:'往返时间',value:'222'}
            ],
            tabType:'one',
            isShowDeparturePop:false,
            departureList:[
                {
                    name:'北京1'
                },
                {
                    name:'北京2'
                },
                {
                    name:'北京3'
                },
            ],
            isShowArrivalPop:false,
            arrivalList:[
                {
                    name:'上海1'
                },
                {
                    name:'上海2'
                },
                {
                    name:'上海3'
                },
            ],
            isShowDatePop:false,
        }
    },
    mounted(){
    },
    methods:{
        cbCloseDepartPop(){
            this.isShowDeparturePop = false
        },
        cbChooseDeparture(item){

        },
        cbCloseArrivalPop(){
            this.isShowArrivalPop = false
        },
        cbChooseArrival(item){

        },
        cbCloseDatePop(){
            this.cbCloseDatePop = false
        },
        changeType(item){
            this.tabType = item.type
        },
        showDestPop(item){
            if(item.type == 'departureDest'){
                this.isShowDeparturePop = true
            }else{
                this.isShowArrivalPop = true
            }    
        },
        showDatePop(item){
            this.isShowDatePop = true
        },
        exChangeDest(){
            let destinationList = this.destinationList
            let departureDest = destinationList[0].value
            let arrivalDest = destinationList[1].value

            destinationList[0].value = arrivalDest
            destinationList[1].value = departureDest
        },
    }
}
</script>

<style lang="scss" scoped>
.book {
    margin:0 15rpx 24rpx;
    background:#FFF;
    border-radius:30rpx;
    .tab {
        display:flex;
        height:104rpx;
        line-height:104rpx;
        .item {
            flex:1;
            background:#FFF;
            border-radius:30rpx 30rpx 0 0;
            color:#000;
            font-weight:500; 
            text-align:center;
        }
    }
    .notice {
        position:relative;
        margin:24rpx 44rpx 0;
        padding:0 16rpx;
        height:55rpx;
        line-height:55rpx;
        background:#FCF2EC;
        border-radius:4rpx;
        color:#EC702E;
        font-size:25rpx;
        .mic {
            display:inline-block;
            width:24rpx;
            height:21rpx;
            background:url('http://182.254.192.167:6003/vue/upload/static/index/volume.png') no-repeat;
            background-size:contain;
            vertical-align:middle;
        }
        .text {
            display:inline-block;
            vertical-align:middle;
        }
        .ico {
            position:absolute;
            top:50%;
            right:24rpx;
            transform:translateY(-50%);
            width:9rpx;
            height:14rpx;
            background:url('http://182.254.192.167:6003/vue/upload/static/index/arrows.png') no-repeat;
            background-size:contain;
        }
    }
    .destination,
    .date {
        position:relative;
        display:flex;
        margin:0 44rpx;
        border-bottom:1px solid #EDEDED;
        .item {
            flex:1;
            .t1 {
                margin-top:40rpx;
                margin-bottom:22rpx;
                height:32rpx;
                line-height:32rpx;
                color:#999;
                font-size:28rpx;
            }
            .t2 {
                padding-bottom:24rpx;
                height:40rpx;
                line-height:40rpx;
                color:#000;
                font-size:32rpx;
                font-weight:500;
            }
            &:nth-child(2){
                text-align:right;
            }
        }
        .exchange {
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            width:54rpx;
            height:54rpx;
            background:url('http://182.254.192.167:6003/vue/upload/static/index/qh2.png') no-repeat;
            background-size:contain;
        }
    }
    &.one {
        .tab {
            .item {
                &:nth-child(2){
                    color:rgba(0,0,0,.6);
                    font-weight:400;
                    background:url('http://182.254.192.167:6003/vue/upload/static/index/border2.png') no-repeat;
                    background-size:cover;
                }
            }
        }
    }
    &.round {
        .tab {
            .item {
                &:nth-child(1){
                    color:rgba(0,0,0,.6);
                    font-weight:400;
                    background:url('http://182.254.192.167:6003/vue/upload/static/index/border1.png') no-repeat;
                    background-size:cover;
                }
            }
        }
        .destination {
            .exchange {
                background-image:url('http://182.254.192.167:6003/vue/upload/static/index/qh.png');    
            }
        }
    }
}
</style>