<template>
    <view class="page">
        <view class="block"></view>

        <view class="search">
            <view class="input">
                <input type="text">
                <view class="btn">兑换</view>
            </view>
        </view>
        
        <view 
            class="list"
            v-if="list.length"
        >
            <view 
                class="item"
                v-for="(item,index) in list"
                :key="index"
            >
                <view class="coupon-conent">
                    <view class="content">
                        <view class="left">
                            <view class="num">
                                <text class="unit">{{item.type === 4 ? '-RMB' : '-MOP'}}</text>
                                <text class="desc">{{item.type === 4 ? item.discountRmbPrice : item.discountPrice}}</text>
                            </view>
                            <view class="times">
                                <template 
                                    v-if="item.type == 1"
                                >
                                    可用{{item.useNum}}次
                                </template>
                                <template 
                                    v-else-if="item.type == 2 || item.type == 4">
                                    可用{{item.usePrice}}{{item.type === 2 ? 'MOP' : 'RMB'}}
                                </template>
                                <template 
                                    v-else-if="item.type === 3"
                                >
                                    购买享受{{item.discountRate >= 100 ? 1 : item.discountRate / 10}}折
                                </template>
                            </view>
                        </view>
                        <view class="info">
                            <view class="name">{{item.name}}</view>
                            <view 
                                class="tags"
                                v-if="item.ticketProtList.length"
                            >
                                <view 
                                    class="tag"
                                    v-for="(tag,i) in item.ticketProtList"
                                    :key="i"
                                >
                                    限{{tag.fromPortName}}-{{tag.toPortName}}
                                </view>
                                <view 
                                    class="last"
                                    v-if="item.ticketProtList.length > 2"
                                >
                                    更多航线
                                </view>
                            </view>
                            <view class="date">有效期：{{item.st}}-{{item.et}}</view>
                            <view 
                                class="shuoming"
                                @click="showMore(item)"
                            >
                                详细说明<text class="ico"></text>
                            </view>
                        </view>
                    </view>
                    <view 
                        class="more"
                        v-show="item.showMore"
                    >
                        <view class="item">
                            <view class="left">票卡名称：</view>
                            <view class="ov">
                                <view class="p">{{item.name}}</view>
                            </view>
                        </view>
                        <rich-text :nodes="item.desc"></rich-text>
                    </view>
                </view>
                <view class="coupon-right">
                    <view 
                        class="icon"
                        :class="item.checked ? 'on' : ''"
                        @click="hanlderChecked(item)"
                    ></view>
                </view>
            </view>
        </view>

        <view 
            class="no-content"
            v-else
        >
            <c-no-content
                type="file"
                title="当前没有可选的票卡"
            ></c-no-content>    
        </view>

        <view 
            class="bottom-actions"
            :style="actionsStyle"
        >
            <view 
                class="desc"
                v-if="selectdData"
            >
                <view class="name">已选{{selectdData.name || ''}}</view>
                <view class="price">
                    总价
                    <text class="unit">{{selectdData.type === 4 ? 'RMB' : 'POM' }}</text>
                    <text>{{selectdData.type === 4 ? selectdData.discountRmbPrice : selectdData.discountPrice}}</text>
                </view>
            </view>
            <view 
                class="btn"
                @click="confirm"
            >
                确定
            </view>
        </view>

        <c-bottom></c-bottom>
    </view>
</template>

<script>
import utils from '@/utils/utils'
import { getOneWayTicketDetailApi } from '@/api/ticket'
import { getPassengerListApi } from '@/api/passenger'
import { getOrderDiscountApi } from '@/api/order'
export default {
    data(){
        return{
            actionsStyle:'',
            list:[],
            selectdData:{},//选中的票卡
        }
    },
    onLoad(e){
        this.options = e

        this.fixActionsStyle()

        this.getList()
    },
    methods:{
        fixActionsStyle(){
            let height = 0
            this.actionsStyle = `padding-bottom:${utils.fixIPhoneX() ? 68 + height : height}rpx;`
        },
        getList(){
            let list = [
                this.getOneWayTicketDetail(),
                this.getPassengerList(),
            ]

            Promise.all(list)
        },
        getOneWayTicketDetail(){
            let options = this.options
            let params = {
                fromPortCode:options.fromPortCode,
                toPortCode:options.toPortCode,
                sailDate:options.sailDate,
                voyageId:options.voyageId,
                isRoundTrip:0,
                seatRankId:options.seatRankId,
                type:options.type,
                channel:1,//userStroe.user?.merchantAcitve ? 2 : 1,
            }

            return new Promise((resolve)=>{
                getOneWayTicketDetailApi(params).then((res)=>{
                    if(res.data.code == 200){
                        let data = res.data.data || {}
                    }
                    resolve()

                })
            })
        },
        getPassengerList(){
            return new Promise((resolve)=>{
                getPassengerListApi({}).then((res)=>{
                    if(res.data.code == 200){
                        let data = res.data.data || []
                        this.passengerlist = data

                        this.getOrderDiscount()
                    }
                    resolve()
                })
            })
        },
        getOrderDiscount(){
            let options = this.options
            let orderVoyage = {
                departDate:options.sailDate,
                seatRankId:options.seatRankId,
                voyageId:options.voyageId
            }
            let orderVoyageReturn = {
                seatRankId:options.seatRankId    
            }
            let passengerList = this.passengerlist.filter(item=>item.isDefault)
            let params = {
                addedValueList:'',
                channel:1,//userStroe.user?.merchantAcitve ? 2 : 1,
                fromPortCode:options.fromPortCode,
                isRoundTrip:options.isRoundTrip,
                orderVoyage,
                orderVoyageReturn,
                passengerList,
                toPortCode:options.toPortCode,
                type:options.type
            }

            getOrderDiscountApi(params).then((res)=>{
                if(res.data.code == 200){
                    let data = res.data.data || []

                    data.forEach((item)=>{
                        item.st = item.validateStartTime.split(' ')[0]
                        item.st = item.st.replace(/\-/g,'.')
                        item.et = item.validateEndTime.split(' ')[0]
                        item.et = item.et.replace(/\-/g,'.')
                        item.showMore = false
                        item.checked = false
                    })

                    this.list = data
                }
            })
        },
        showMore(item){
            item.showMore = !item.showMore
        },
        hanlderChecked(item){
            let list = this.list

            this.selectdData = {}

            list.forEach((v)=>{
                if(v.code == item.code){
                    v.checked = true
                    this.selectdData = v
                }else{
                    v.checked = false
                }
            })
        },
        confirm(){
            if(!this.selectdData.code){
                uni.showToast({
                    title:'请选择优惠券',
                    icon:'none'
                })
                return
            }

            uni.setStorageSync('coupon',this.selectdData)

            uni.navigateBack({
                delta:1
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.page {

}

.block {
    height:44rpx;
}

.search {
    position:relative;
    margin:0 22rpx 48rpx;
    height:78rpx;
    border:1px solid #FF7143;
    border-radius:39rpx;
    .input {
        box-sizing:border-box;
        display:inline-block;
        padding:20rpx;
        width:80%;
        height:100%;
        vertical-align:middle;
        input {
            display:block;
            width:100%;
            height:100%;
        }
    }
    .btn {
        position:absolute;
        top:50%;
        right:10rpx;
        transform:translateY(-50%);
        width:128rpx;
        height:62rpx;
        line-height:62rpx;
        background:#FF7143;
        border-radius:31rpx;
        color:#FFF;
        font-size:24rpx;
        text-align:center;
    }
}

.list {
    margin:0 22rpx;
    .item {
        position:relative;
        margin-bottom:16rpx;
        .coupon-conent {
            position:relative;
            width:652rpx;
            .content {
                position:relative;
                display:flex;
                border-radius:10rpx;
                overflow:hidden;
                .left {
                    position:relative;
                    flex-shrink:0;
                    width:196rpx;
                    min-height:196rpx;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    flex-direction:column;
                    background:linear-gradient(205deg, #ff7e50, #f74939);
                    color:#FFF;
                    .nums {
                        font-weight:500;
                        font-size:40rpx;
                        .unit {
                            font-size:24rpx;
                            margin-right:12rpx;
                        }
                    }
                    .times {
                        font-size:24rpx;
                    }
                }
                .info {
                    position:relative;
                    flex:1;
                    padding:20rpx 16rpx 24rpx 16rpx;
                    background:#fff3ec;
                    .name {
                        margin-bottom:8rpx;
                        font-weight:500;
                        font-size:30rpx;
                        color:#000;
                    }
                    .tags {
                        display:flex;
                        width:100%;
                        flex-wrap:wrap;
                        .tag {
                            padding:2rpx 8rpx;
                            border-radius:6rpx;
                            border:1px solid #fe6630;
                            font-size:18rpx;
                            color:#fe6630;
                            margin-right:8rpx;
                            margin-bottom:8rpx;
                        }
                        .last {
                            color:rgba(0, 0, 0, 0.6);
                            font-size:20rpx;
                            text-decoration:underline;
                        }
                    }
                    .date {
                        color:rgba(0,0,0,.6);
                        font-size:20rpx;
                    }
                    .shuoming {
                        margin-top:8rpx;
                        color:#585351;
                        font-size:20rpx;
                        .ico {
                            display:inline-block;
                            margin-left:8rpx;
                            width:11rpx;
                            height:6rpx;
                            margin-left:10rpx;
                            background:url('http://8.138.130.153:6003/vue/upload/static/common/WechatIMG1020.png') no-repeat;
                            background-size:contain;
                            vertical-align:4rpx;
                        }
                    }
                }
            }
            .more {
                margin-top:1px;
                padding:20rpx;
                background:#F5F5F5;
                border-radius:20rpx;
                .item {
                    position:relative;
                    padding-left:96rpx;
                    font-size:18rpx;
                    .left {
                        position:absolute;
                        top:0;
                        left:0;
                        height:24rpx;
                        line-height:24rpx;
                        color:#333;
                    }
                    .ov {
                        color:#999;
                        .p {
        
                        }
                    }
                }
            }
        }
        .coupon-right {
            position:absolute;    
            top:0;
            right:0;
            .icon {
                position:absolute;
                display:inline-block;
                top:80rpx;
                right:0;  
                width:34rpx;
                height:34rpx;
                border-radius:50%;
                border:1px solid rgba(0, 0, 0, 0.4);
                &.on {
                    border:0 none;
                    background:url('http://8.138.130.153:6003/vue/upload/static/common/ico-checked.png') no-repeat;
                    background-size:contain;
                }
            } 
        }
    }
}

.no-content {
    margin:300rpx auto 0;
}

.bottom-actions {
    position:fixed;
    z-index:2;
    bottom:0;
    left:0;
    padding-top:20rpx;
    width:100%;
    height:108rpx;
    border-top:1px solid rgba(0, 0, 0, 0.08);
    background:#FFF;
    text-align:right;
    .btn {
        display:inline-block;
        margin-right:24rpx;
        width:280rpx;
        height:90rpx;
        line-height:90rpx;
        border-radius:45rpx;
        background:linear-gradient(87deg, #FFA63F, #EB5628);
        color:#FFF;
        font-size:32rpx;
        text-align:center;
        vertical-align:middle;
    }
    .desc {
        display:inline-block;
        margin-right:24rpx;
        text-align:right;
        overflow:hidden;
        vertical-align:middle;
        .name {
            margin:34rpx 0 8rpx;
            height:34rpx;
            line-height:34rpx;
            color:rgba(0,0,0,.55);
            font-size:30rpx;
        }
        .price {
            color:#FE6630;
            font-weight:500;
            font-size:28rpx;
            .unit {
                font-size:22rpx;
            }
        }
    }
}
</style>