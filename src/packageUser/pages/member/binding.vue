<template>
    <view class="page">
        <view class="block"></view>
        <view class="list">
            <view 
                class="item"
                v-for="(item,index) in list"
                :key="index"
            >
                <view class="label">
                    <text v-if="item.required">*</text>
                    {{item.title}}
                </view>
                <view class="input">
                    <input type="text" />
                </view>
            </view>
        </view>
        <view class="tips">
            <rich-text :nodes="tips"></rich-text>
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
                    title:'通关证件号码',
                    type:'number',
                    placeholder:'通行证、台胞证、回乡证、护照等',
                    required:true,
                    value:'',
                },
                {
                    title:'优惠证件图片',
                    type:'img',
                    placeholder:'',
                    required:true,
                    value:'',
                },/* 
                {
                    title:'联系电话',
                    type:'mobile',
                    placeholder:'请输入您的联系电话',
                    required:true,
                    value:'',
                }, */
                {
                    title:'证件有效期',
                    type:'date',
                    placeholder:'请参考备注选择优惠证件的有效期',
                    required:true,
                    value:'',
                }
            ],
            tips:'<p> 申请珠澳居民优惠认证根据持有证件不同请上传以下证件：</p><p> (1) 澳门居民请上传回乡证有效期面相片或护照+澳门身份证有效期面相片；</p><p> (2) 珠海居民请上传珠海居民身份证正反面（有效期必须清晰可见）+通行证相片；</p><p> (3) 持有蓝卡的乘客请上传蓝卡+蓝卡有效期截图+通行证相片；</p><p> (4) 持有珠海居住证/社保卡的乘客请上传珠海居住证/社保卡（有效期必须清晰可见）+通行证相片；</p><p> (5) 持有因公通行证的乘客请上传因公签证（绿卡）有效期+因公通行证相片；</p><p> (6) 如您提交3日后系统依然未通过请前往澳门内港码头票务处人工处理。 </p>'
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
        margin:0 32rpx;
        padding:0 40rpx 0 210rpx;
        height:116rpx;
        border-bottom:1px solid #EFEFEF;
        .label {
            position:absolute;
            top:0;
            left:0;
            width:170rpx;
            line-height:116rpx;
            color:#000;
            font-size:28rpx;
            text {
                display:inline-block;
                margin-right:8rpx;
                color:#ee0a24;
                font-weight:500;
                vertical-align:middle;
            }
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