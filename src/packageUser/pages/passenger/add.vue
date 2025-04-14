<template>
    <view class="page">
        <view class="list">
            <view 
                class="item"
                v-for="(item,index) in list"
                :key="index"
            >
                <view 
                    class="star"
                    v-if="item.required"
                >*</view>
                <view class="label">{{item.title}}</view>
                <template v-if="item.type == 'passengerType'">
                    <view 
                        class="placeholder"
                        v-if="!item.value"
                    >
                        {{item.placeholder}}
                    </view>
                    <c-picker
                        v-else
                    ></c-picker>
                </template>
                <template v-else-if="item.type == 'certificateType'">
                    <view 
                        class="placeholder"
                        v-if="!item.value"
                    >
                        {{item.placeholder}}
                    </view>
                    <c-picker
                        v-else
                    ></c-picker>
                </template>
                <template v-else-if="item.type == 'birthday'">
                    <view 
                        class="placeholder"
                        v-if="!item.value"
                    >
                        {{item.placeholder}}
                    </view>
                    <c-picker
                        v-else
                    ></c-picker>
                </template>
                <template v-else-if="item.type == 'mobile'">
                    <view class="input">
                        <input 
                            type="number" 
                            placeholder-style="color:#999;"
                            :placeholder="item.placeholder"
                            :value="item.value"
                            @input="input"
                        />
                    </view>
                </template>
                <template v-else>
                    <view class="input">
                        <input 
                            type="text" 
                            placeholder-style="color:#999;"
                            :placeholder="item.placeholder"
                            :value="item.value"
                            @input="input"
                        />
                    </view>
                </template>
                <view 
                    class="ico"
                    v-if="item.arrow"
                ></view>
            </view>
            <view class="default">
                <view class="label">设置默认乘客</view>
                <switch 
                    class="switch"
                    :checked="defaultPassenger" 
                    @change="defaultChange"
                />
            </view>
        </view>
        <view class="tips">
            <view class="hd">资料填写须知</view>
            <view class="bd">
                <view class="p">1.选择乘客类型为儿童票，必须填写儿童生日，如船票与实际乘船人不符，船务公司有权要求旅客更换船票补成人船票差价。</view>
                <view class="p">2.因应国家交通部要求内地始发所有交通工具必须填写乘客姓名、证件类型、证件号。</view>
                <view class="p">3.人脸信息采集后，用于过闸机时进行人脸检测，非必填项。</view>
                <view class="p">4.本司系统登记的证件信息，人脸信息等所有个人资料，仅供购票及检票使用。</view>
                <view class="p">5.关于收集个人资料声明。 </view>
                <view class="p">6.乘客本人须对填写上述资料之真实性负全部责任。</view> 
            </view>
        </view>

        <view 
            class="actions-wrap"
            :style="actionsStyle"
        >
            <view 
                class="actions"
                :style="actionsStyle"
            >
                <view 
                    class="btn"
                    @click="save"
                >
                    保存
                </view>
                <view 
                    class="btn b1"
                    @clcik="del"
                >
                    删除
                </view>
            </view>
        </view>

        <c-birth></c-birth>
    </view>
</template>

<script>
import utils from '@/utils/utils'
import { getPassengerUpdateApi } from '@/api/passenger'
export default {
    data(){
        return{
            options:{},
            list:[
                {
                    title:'乘客类型',
                    type:'passengerType',
                    placeholder:'请选择乘客类型',
                    required:true,
                    value:'',
                    link:'',
                    arrow:true
                },
                {
                    title:'姓名',
                    type:'passengerName',
                    placeholder:'请填写姓名',
                    required:true,
                    value:'',
                    link:'',
                    arrow:false
                },
                {
                    title:'手机号',
                    type:'mobile',
                    placeholder:'请填写手机号',
                    required:true,
                    value:'',
                    link:'',
                    arrow:false
                },
                {
                    title:'证件类型',
                    type:'certificateType',
                    placeholder:'请选择证件类型',
                    required:true,
                    value:'',
                    link:'',
                    arrow:true
                },
                {
                    title:'证件号码',
                    type:'certificateNumber',
                    placeholder:'请填写乘船人的证件号码',
                    required:true,
                    value:'',
                    link:'',
                    arrow:true
                },
                {
                    title:'出生日期',
                    type:'birthday',
                    placeholder:'请选择出生日期',
                    required:true,
                    value:'',
                    link:'',
                    arrow:true
                },
                {
                    title:'人脸信息',
                    type:'face',
                    placeholder:'点此采集',
                    required:false,
                    value:'',
                    link:'',
                    arrow:false
                }
            ],
            actionsStyle:'',
            defaultPassenger:false,
        }
    },
    onLoad(e){
        this.options = e

        this.fixActionsStyle()

        this.getPassenger()
    },
    methods:{
        getPassenger(){
            if(!this.options.id){
                return
            }

            return new Promise((resolve)=>{
                this.$http.get(`/stage-api/passenger/${this.options.id}`).then((res)=>{
                    if(res.data.code == 200){
                        let data = res.data.data
                        let list = this.list

                        for(let p in data){
                            list.forEach((item)=>{
                                if(p == item.type){
                                    item.value = data[p]
                                }
                            })
                        }
                    }
                })
            })
        },
        fixActionsStyle(){
            let height = 0
            this.actionsStyle = `padding-bottom:${utils.fixIPhoneX() ? 68 + height : height}rpx;`
            console.log(999,'actionsStyle',this.actionsStyle)   
        },
        defaultChange(e){
            this.defaultPassenger = !this.defaultPassenger
        },
        input(e){

        },
        save(){
            let list = this.list
            let params = {}

            getPassengerUpdateApi(params).then((res)=>{
                if(res.data.code == 200){
                    uni.showToast({
                        title:'保存成功',
                        icon:'none'
                    })
                }
            })
        },
        del(){

        }
    }
}
</script>

<style lang="scss" scoped>
.page {
    padding-top:32rpx;
    min-height:calc(100vh - 32px);
    background:#F8F8F8;   
}

.list {
    margin:0 auto;
    width:710rpx;
    background:#FFF;
    border-radius:20rpx;
    .item {
        position:relative;
        margin:0 40rpx 0 50rpx;
        height:116rpx;
        line-height:116rpx;
        border-bottom:1px solid #F7F7F7;
        .star {
            position:absolute;
            top:50%;
            transform:translateY(-50%);
            left:-20rpx;
            color:#FF0000;
            font-size:20rpx;
        }
        .label {
            display:inline-block;
            margin-right:50rpx;
            width:150rpx;
            vertical-align:middle;
        }
        .ico {
            position:absolute;
            top:50%;
            right:0;
            transform:translateY(-50%);
            width:21rpx;
            height:11rpx;background:url('http://182.254.192.167:6003/vue/upload/static/order/icon.png') no-repeat;
            background-size:contain;
        }
        .placeholder {
            display:inline-block;
            width:420rpx;
            color:#999;
            font-size:28rpx;
            vertical-align:middle;
        }
        .input {
            display:inline-block;
            width:420rpx;
            font-size:28rpx;
            vertical-align:middle;
        }
    }
    .default {
        position:relative;
        margin:0 40rpx 0 50rpx;
        padding-bottom:32rpx;
        height:116rpx;
        line-height:116rpx;
        .label {
            display:inline-block;
            margin-right:50rpx;
            width:200rpx;
            vertical-align:middle;
        }
        .switch {
            display:inline-block;
            height:30rpx;
            vertical-align:top;
        }
    }
}

.tips {
    margin:40rpx 40rpx;
    .hd {
        margin-bottom:24rpx;
        height:50rpx;
        line-height:50rpx;
        color:#333;
        font-size:30rpx;
        font-weight:500;
    }
    .bd {
        color:#939292;
        font-size:24rpx;
        text-align:justify;
        .p {
            margin-bottom:8rpx;
        }
    }
}

.actions-wrap {
    height:296rpx;
    .btn {
        margin:32rpx auto 0;
        width:664rpx;
        height:100rpx;
        line-height:100rpx;
        background:linear-gradient(87deg, #FFA63F, #EB5628);
        border-radius:50rpx;
        color:#FFF;
        font-size:34rpx;
        font-weight:500;
        text-align:center;
        &.b1 {
            background:#EBEBEB;
            color:#000;
        }
    }
}

.actions {
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    height:296rpx;
    background:#FFF;
}
</style>