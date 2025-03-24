<template>
    <view class="page">
        <view class="block"></view>
        <view class="list">
            <view 
                class="item"
                v-for="(item,index) in list"
                :key="index"
            >
                <view class="label">{{item.title}}</view>
                <view class="input">
                    <input type="text" />
                </view>
            </view>
        </view>

        <view class="btn">提交</view>
    </view>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {
                    title:'姓名',
                    type:'name',
                    placeholder:'请输入您的姓名',
                    required:true,
                    value:'',
                },
                {
                    title:'联系电话',
                    type:'mobile',
                    placeholder:'请输入您的联系电话',
                    required:true,
                    value:'',
                },
                {
                    title:'会员卡号',
                    type:'card',
                    placeholder:'请输入您的会员卡卡号',
                    required:true,
                    value:'',
                }
            ]
        }
    },
    onLoad(e){

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

.block {
    height:32rpx;
}

.list {
    margin:0 auto;
    width:710rpx;
    background:#FFF;
    border-radius:20rpx;
    .item {
        position:relative;
        padding:0 40rpx 0 210rpx;
        height:116rpx;
        .label {
            position:absolute;
            top:0;
            left:40rpx;
            width:170rpx;
            line-height:116rpx;
            color:#000;
            font-size:28rpx;
        }
        .input {
            input {
                display:inline-block;
                width:420rpx;
                font-size:28rpx;
                vertical-align:middle;
            }
        }
    }
}

.btn {
    position:fixed;
    bottom:60rpx;
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