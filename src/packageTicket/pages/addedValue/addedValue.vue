<template>
    <view class="page">
        <view class="tabs">
            <c-services-tab
                :tabIndex="tabIndex"
                @change="tabIndex = $event"
            ></c-services-tab>
        </view>

        <view 
            class="list"
            v-if="allList[tabIndex].list.length"
        >
            <c-added-card
                class="item"
                v-for="(item,index) in allList[tabIndex].list"
                :key="index"
                :item="item"
                @cbDetail="handleDetail"
                @cbeMinus="handleMinus"
                @cbAdd="handleAdd"
                @cbBlur="handleBlur"
                @cbChecked="hanlderChecked"
                v-if="item.display == 1"
            ></c-added-card>
        </view>

        <view 
            class="no-content"
            v-else
        >
            <c-no-content
                type="file"
                title="当前没有可选的增值服务"
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
                <view class="name">已选{{name}}</view>
                <view class="price">
                    总价
                    <text class="unit">MOP</text>
                    <text>{{mop}}</text>
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
import ticket from '@/types/ticket'
import { getOneWayTicketDetailApi, getRuleApi, getVipListApi, getAddedValuePageApi } from '@/api/ticket'
import { getPassengerListApi } from '@/api/passenger'
export default {
    data(){
        return{
            tabIndex:0,
            allList:[],
            addValueList:ticket.addValueList,
            actionsStyle:'',
            selectdData:{},
            name:'',
            mop:0
        }
    },
    onLoad(e){
        this.options = e

        this.fixActionsStyle()

        this.initList()

        this.getList()
    },
    methods:{
        fixActionsStyle(){
            let height = 0
            this.actionsStyle = `padding-bottom:${utils.fixIPhoneX() ? 68 + height : height}rpx;`
        },
        initList(){
            let addValueList = this.addValueList
            let allList = []

            addValueList.forEach((item)=>{
                allList.push({
                    type:item.value,
                    pageNum:1,   
                    list:[],
                    isRequest:false,
                    done:false
                })
            })

            this.allList = allList
        },
        getList(){
            let list = [
                this.getOneWayTicketDetail(),
                this.getRule(),
                this.getPassengerList(),
                this.getAddedValuePage()
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

                        //this.getOrderDiscount()
                    }
                    resolve()
                })
            })
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
        getVipList(){
            let options = this.options
            let params = {
                fromPortCode:options.fromPortCode,
                toPortCode:options.toPortCode,
            }

            getVipListApi(params).then((res)=>{
                if(res.data.code == 200){
                    let data = res.data.data || []
                }
            })
        },
        getAddedValuePage(){
            let target = this.allList[this.tabIndex]
            let options = this.options
            let pageSize = 20

            if(target.isRequest) return

            if(target.done) return

            target.isRequest = true

            let params = {
                fromPortCode:options.fromPortCode,  
                toPortCode:options.toPortCode,
                type:target.type,
                pageNum:target.pageNum,
                pageSize,
            }

            return new Promise((resolve)=>{
                getAddedValuePageApi(params).then((res)=>{
                    target.isRequest = false

                    if(res.data.code == 200){
                        let rows = res.data.rows || []

                        if(rows.length == 0){
                            target.done = true
                        }

                        if(rows.length < pageSize){
                            target.done = true
                        }else{
                            target.pageNum++
                        }

                        rows.length && rows.forEach((item)=>{
                            item.value = 1
                            item.checked = false
                        })

                        target.list = target.list.concat(rows)
                    }

                    resolve()
                })    
            })
        },
        handleDetail(item){

        },
        handleMinus(item){
            if(item.value == 1) return

            item.value--
        },
        handleAdd(item){
            if(item.value == item.num) return
            item.value++
        },
        handleInput(item,e){
        },
        handleBlur(item,e){
            let value = e.detail.value
            let v = 1

            if(value < 1){
                v = 1
            }else if(value > item.num){
                v = item.num
            }else{
                v = value
            }

            item.value = Number(v)
        },
        hanlderChecked(item){
            let allList = this.allList
            let tabIndex = this.tabIndex
            let list = allList[tabIndex].list
            let type = allList[tabIndex].type
            let selectdData = this.selectdData
            let name = []
            let mop = 0

            if(selectdData[type]){
                selectdData[type] = {}
            }

            list.forEach((v)=>{
                if(v.id == item.id){
                    v.checked = true
                    selectdData[type] = v
                }else{
                    v.checked = false
                }
            })

            for(let p in selectdData){
                name.push(selectdData[p].name)
                mop += item.price * item.value
            }

            this.name = name.join('、')
            this.mop = mop

            console.log(9999,'name',name)
            console.log(9999,'mop',mop)
        },
        confirm(){
            //addedValue
            uni.setStorageSync('addedValue', this.selectdData)     

            uni.navigateBack({
                delta:1
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.page {
    min-height:100vh;
    background:#f8f8f8;
}

.tabs {
    padding:40rpx 50rpx;
}

.list {
    margin:0 20rpx;
    .item {
        position:relative;
        padding:25rpx 160rpx 0 260rpx;
        height:250rpx;
        background:#FFF;
        border-radius:20rpx;
        .left {
            position:absolute;
            top:0;
            left:25rpx;
            width:200rpx;
            .img {
                width:100%;
                height:200rpx;
                border-radius:20rpx;
                overflow:hidden;
            }
            .left-desc {
                margin-top:4rpx;
                color:#989595;
                font-size:24px;
                text-align:center;
            }
        }
        .content-box {
            overflow:hidden;
            .ellipsis {
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
            }
            .name {
                margin-bottom:16rpx;
                font-weight:500;
                font-size:24rpx;
                color:#222;
            }
            .desc {
                font-size:24rpx;
                color:rgba(0,0,0,.7);
            }
            .stepper-box {
                margin:32rpx 0 16rpx;
                .group {
                    position:relative;
                    display:inline-block;
                    height:56rpx;
                    .add,
                    .minus,
                    .input {
                        display:inline-block;
                        vertical-align:top;
                    }
                    .add,
                    .minus {
                        position:relative;
                        width:56rpx;
                        height:56rpx;
                        line-height:56rpx;
                        border:1px solid #e6e6e6;
                        &::before {
                            content:' ';
                            position:absolute;
                            top:50%;
                            left:50%;
                            transform:translate(-50%,-50%);
                            width:50%;
                            height:2rpx;
                            background:rgba(0,0,0);
                        }
                        &::after {
                            content:' ';
                            position:absolute;
                            top:50%;
                            left:50%;
                            transform:translate(-50%,-50%);
                            width:2rpx;
                            height:50%;
                            background:rgba(0,0,0);
                        }
                        &.disabled {
                            &::before {
                                background:rgba(204,204,204);    
                            }
                            &::after {
                                background:rgba(204,204,204);        
                            }
                        }
                    }
                    .minus {
                        border-radius:8rpx 0 0 8rpx;
                        &::after {
                            display:none;
                        }
                    }
                    .add {
                        border-radius:0 8rpx 8rpx 0;
                    }
                    .input {
                        padding:0 8rpx;
                        width:50rpx;
                        height:56rpx;
                        border:1px solid #e6e6e6;
                        border-left:0;
                        border-right:0;
                        text-align:center;
                        input {
                            display:inline-block;
                            width:100%;
                            height:100%;   
                            vertical-align:top;
                        }
                    }
                }
            }
            .price-box {
                display:flex;
                align-items:center;
                justify-content:flex-end;
                .price-item {
                    display:flex;
                    align-items:flex-end;
                    margin-left:38rpx;
                    color:#fd5a26;
                    font-weight:500;
                    &.rmb {
                        color:#000;
                    }
                    .unit {
                        font-size:22rpx;
                        margin-right:6rpx;
                    }
                }
                .num {
                    font-size:34rpx;
                }
            }
        }
        .checkbox {
            position:absolute;
            right:36rpx;
            top:184rpx;
            .icon {
                position:absolute;
                display:inline-block;
                bottom:24rpx;
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
    margin:400rpx auto 0;
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