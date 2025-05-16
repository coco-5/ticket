<template>
    <view class="page">
        <div class="list-card">
            <view class="card">
                <template v-if="tripList.length">
                    <c-trip-detail
                        v-for="(item,index) in tripList"
                        :key="index"
                        :item="item"
                        :isShowLong="true"
                    ></c-trip-detail>
                </template>
                <view class="more">
                    <view 
                        class="item"
                        v-for="(item,index) in ruleList"
                        :key="index"
                        @click="chooseRule(item,index)"
                    >
                        {{item.label}}
                    </view>
                </view>
            </view>
        </div>

        <view 
            class="list-space"
            v-if="listSpace.length"
        >
            <view 
                class="item"
                v-for="(item,index) in listSpace"
                :key="index"
            >
                <view class="type">
                    <view class="t">
                        <view class="name">
                            <text class="t1">{{item.seatRank}}</text>
                            <text 
                                class="t2"
                                v-if="item.type != 1"
                            >
                                {{item.typeName}} 
                            </text>
                        </view>
                        <view 
                            class="num"
                            v-if="detail.tportCode == 'HKM' || detail.fportCode == 'HKM'"
                        >
                            {{item.seatNum >= 5 ? '>5' : '<5' }}张
                        </view>
                        <view class="num">
                            {{item.seatNum}}张   
                        </view>
                    </view>
                    <!-- 
                    <div v-if="dataInfo.tportCode === 'HKM' || dataInfo.fportCode === 'HKM'" class="num">
                        {{ item.seatNum >= 5 ? '>5' : '<5' }} 张
                      </div>
                      <div v-else class="num">{{ item.seatNum }} 张</div> -->

                    <!-- <view class="a">+</view>
                    <view class="t">
                        <text class="t1">普通舱</text>
                        <text class="t2">（49张）</text>
                    </view> -->
                </view>
                <view class="price">
                    <view class="item-price mop">
                        <text class="t1">MOP</text>
                        <text class="t2">{{item.price1}}</text>
                    </view>
                    <view 
                        class="item-price"
                        v-if="item.price5 && Number(item.price5) > 0"
                    >
                        <text class="t1">RMB</text>
                        <text class="t2">{{item.price5}}</text>
                    </view>
                </view>
                <view 
                    class="btn"
                    @click="book(item)"
                >
                    预定
                </view>
            </view>
        </view>

        <view 
            class="no-content"
            v-else
        >
            <c-no-content
                type="file"
                title=""
            ></c-no-content>  
        </view>

        <view class="tips">
            <view class="p"><text>* </text>MOP即澳门币</view>
            <view class="p"><text>* </text>RMB即人民币</view>
            <view 
                class="p"
                v-if="['MAO', 'WZ'].includes(options.fromPortCode) || ['MAO', 'WZ'].includes(options.toPortCode)"
            >
                <text>* </text>所有单程票当天有效,不限票面显示的班次
            </view>
        </view>

        <view class="bottom-tips">如需要购买VIP包房请到线下售票厅购买</view>

        <c-pop
            height="65vh"
            :isShow="isShoPop"
            @cbClosePop="cbClosePop"
        >
            <template #content>
                <view class="tabs">
                    <view 
                        class="item"
                        :class="{'active': ruleIndex == index}"
                        @click="ruleIndex = index"
                        v-for="(item,index) in ruleList"
                        :key="index"
                    >
                        <text>{{item.label}}</text>
                    </view>   
                    <view 
                        class="close" 
                        @click="isShoPop = false"
                    >
                    </view> 
                </view>
                <view class="contents">
                    <view 
                        class="item"
                        v-for="(item,index) in ruleList"
                        v-if="ruleIndex == index"
                        :key="index"
                    >
                        <rich-text :nodes="item.content"></rich-text>
                    </view>
                </view>
            </template>
        </c-pop>

        <c-bottom></c-bottom>
    </view>
</template>
 
<script>
import utils from '@/utils/utils'
import ticket from '@/types/ticket'
import { getOneWayTicketDetailApi, getRuleApi, getRoundTicketDetailApi } from '@/api/ticket'
export default {
    data(){
        return{
            options:{},
            ruleList:ticket.ruleList,
            ruleIndex:0,
            listSpace:[],
            isShoPop:false,
            popType:'',
            detail:'',
            tripList:[]
        }
    },
    onLoad(e){
        this.options = e

        this.getList()
    },
    methods:{
        getList(){
            let list = [
                this.getRule()
            ]

            if(this.options.isRoundTrip == 1){
                list.push(this.getRoundTicketDetail())
            }else{
                this.getOneWayTicketDetail()
            }

            uni.showLoading()

            Promise.all(list).then(()=>{
                uni.hideLoading()
            })
        },
        getOneWayTicketDetail(){
            let options = this.options
            let params = {
                fromPortCode:options.fromPortCode,
                toPortCode:options.toPortCode,
                sailDate:options.sailDate,
                voyageId:options.voyageId,
                isRoundTrip:0,
                channel:1,//userStroe.user?.merchantAcitve ? 2 : 1,
            }

            return new Promise((resolve)=>{
                getOneWayTicketDetailApi(params).then((res)=>{
                    if(res.data.code == 200){
                        let data = res.data.data || {}
                        let tripList = []

                        tripList.push(this.returnTripData(data,0))

                        data.dtseatrankPrice.forEach((item)=>{
                            item.typeName = utils.getValue(ticket.typeMap,item.type)
                        })

                        this.detail = data

                        this.tripList = tripList

                        this.listSpace = data.dtseatrankPrice || []

                        this.iniNavigationBarTitle(data)
                    }
                    resolve()

                })
            })
        },
        getRoundTicketDetail(){
            let options = this.options
            let params = {
                sailDate:options.sailDate,
                sailDateReturn:options.sailDateReturn,
                fromPortCode:options.fromPortCode,
                toPortCode:options.toPortCode,
                isRoundTrip:1,
                returnVoyageId:options.returnVoyageId,
                voyageId:options.voyageId,
            }

            return new Promise((resolve)=>{
                getRoundTicketDetailApi(params).then((res)=>{
                    if(res.data.code == 200){
                        let data = res.data.data || {}
                        let tripList = []
                        let voyage = data.voyage || {}
                        let voyageReturn = data.voyageReturn || {}

                        voyage.ticketType = data.ticketType || []

                        voyageReturn.ticketType = data.returnTicketType || []

                        tripList.push(this.returnTripData(voyage,0))

                        tripList.push(this.returnTripData(voyageReturn,1))

                        voyage.dtseatrankPrice && voyage.dtseatrankPrice.length && voyage.dtseatrankPrice.forEach((item)=>{
                            item.typeName = utils.getValue(ticket.typeMap,item.type)
                        })

                        this.listSpace = voyage.dtseatrankPrice || []

                        this.detail = data

                        this.tripList = tripList

                        this.iniNavigationBarTitle(voyage)
                    }
                    resolve()    
                })
            })
        },
        returnTripData(data, trip = 0){
            return {
                formattedSetoffDate:data.formattedSetoffDate,
                setoffTime:data.setoffTime,
                fromPort:data.fromPort,
                arriveTime:data.arriveTime,
                toPort:data.toPort,
                ticketType:data.ticketType,
                duration:data.duration,
                trip,
            }
        },
        getRule(){
            //获取购票退票规则
            let options = this.options
            let params = {
                fromPortCode:options.fromPortCode,
                toPortCode:options.toPortCode,
                sailDate:options.sailDate,
                voyageId:options.voyageId,
                isRoundTrip:0,
            }

            return new Promise((resolve)=>{
                getRuleApi(params).then((res)=>{
                    resolve()
                })
            })
        },
        iniNavigationBarTitle(data){
            uni.setNavigationBarTitle({
                title:`${data.fromPort}-${data.toPort}`
            })
        },
        book(item){
            let query = {
                seatRankId:item.seatRankId,
                type:item.type
            }

            query = Object.assign(query, this.options)

            let url = `/packageTicket/pages/inputInfo/inputInfo?${utils.paramsStringify(query)}`

            uni.navigateTo({
                url
            })
        },
        chooseRule(item,index){
            this.isShoPop = true
            this.ruleIndex = index
            this.popType = item.type
        },
        cbClosePop(){
            this.isShoPop = false
            this.popType = ''
        }
    }
}
</script>

<style lang="scss" scoped>
.page {
    min-height:100vh;
    background:url('http://8.138.130.153:6003/vue/upload/static/order/bg.png') #F8F8F8 no-repeat;
    background-size:contain;
}

.list-card {
    padding:24rpx 20rpx;
    .card {
        position:relative;
        padding:0 40rpx 40rpx;
        background:linear-gradient(205deg, #FFF7F4, #FFFFFF);
        border-radius:20rpx;
        overflow:hidden;
        .more {
            padding-top:40rpx;
            text-align:right;
            .item {
                display:inline-block;
                margin-left:32rpx;
                color:rgba(0,0,0,.6);
                font-size:22rpx;
                vertical-align:middle;
                text-decoration:underline;
            }
        }
    }
}

.list-space {
    margin:0 20rpx;
    .item {
        position:relative;
        margin-bottom:16rpx;
        padding-left:40rpx;
        padding-right:200rpx;
        height:136rpx;
        background:#FFF;
        border-radius:20rpx;
        .type {
            .t,
            .a {
                display:inline-block;
                vertical-align:middle;
            }
            .t {
                margin-top:28rpx;
                .t1,
                .t2 {
                    display:inline-block;
                    vertical-align:middle;
                }
                .t1 {
                    color:#000;
                    font-size:32rpx;
                    font-weight:500;
                }
                .t2 {
                    margin-left:12rpx;
                    background:#fff5f2;
                    border-radius:10rpx;
                    border:1px solid #fd5a26;
                    padding:4rpx 8rpx;
                    font-size:22rpx;
                    color:#fd5925;
                }
                .num {
                    color:#EC702E;
                    font-size:20rpx;
                }
            }
            .a {
                margin:0 16rpx;
                color:rgba(0,0,0,.5);
                font-size:26rpx;
            }
        }
        .price {
            position:absolute;
            top:50%;
            right:140rpx;
            transform:translateY(-50%);
            .item-price {
                height:45rpx;
                line-height:45rpx;
                color:#000;
                text-align:right;  
                .t1,
                .t2 {
                    display:inline-block;
                    font-weight:500;
                } 
                .t1 {
                    margin-right:4rpx;
                    font-size:22rpx;
                }
                .t2 {
                    font-size:40rpx;
                }
                &.mop {
                    color:#FE6630;
                }  
            }
        }
        .btn {
            position:absolute;
            top:50%;
            right:34rpx;
            transform:translateY(-50%);
            width:84rpx;
            height:84rpx;
            line-height:84rpx;
            background:linear-gradient(142deg, #FFA63F, #EB5628);
            border-radius:10rpx;
            color:#FFF;
            font-size:20rpx;
            text-align:center;
        }
    }
}

.bottom-tips {
    position:absolute;
    bottom:60rpx;
    left:0;
    width:100%;
    height:30rpx;
    line-height:30rpx;
    color:#939292;
    font-size:24rpx;
    text-align:center;
}

.tips {
    margin-top:20rpx;
    padding:0 44rpx;
    line-height:48rpx;
    font-size:32rpx;
    color:#c36b54;
    .p {
        margin-bottom:8rpx;
        line-height:36rpx;
        color:rgba(119, 119, 119, 1);
        font-size:24rpx;
        text {
            margin-right:4rpx;
            color:#ff0000;
        }
    }
}

.tabs {
    position:relative;
    padding:60rpx 50rpx;
    height:42rpx;
    line-height:42rpx;
    color:#000;
    font-size:32rp;
    font-weight:500;
    .close {
        position:absolute;
        top:30rpx;
        right:24rpx;
        width:42rpx;
        height:43rpx;
        background:url('http://8.138.130.153:6003/vue/upload/static/common/icon-colse.png') no-repeat;
        background-size:contain;
    }
    .item {
        position:relative;
        display:inline-block;
        margin-right:84rpx;
        color:#888;
        vertical-align:middle;
        &:last-child {
            margin-right:0;
        }
        &.active {
            color:#000;
            font-weight:500;
            &::before {
                content:' ';
                position:absolute;
                bottom:0;
                left:50%;
                transform:translateX(-50%);
                width:130rpx;
                height:13rpx;
                background:rgba(#FF7937,0.5);
                text-align:center;
            }
            text {
                position:relative;
                z-index:1;
            }
        }
    }
}

.no-content {
    margin:300rpx auto 0;
}
</style>