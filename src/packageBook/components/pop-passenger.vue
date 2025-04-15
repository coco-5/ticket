<template>
    <view 
        class="c-pop"
        :style="popStyle"
    >
        <view class="hd">
            选择乘客
            <view 
                class="close"
                @click="closePop"
            ></view>
        </view>
        <view 
            class="bd"
            :style="bdStyle"
        >
            <view class="list">
                <view 
                    class="item"
                    v-for="(item,index) in list"
                    :key="index"
                    @click="choose(item)"
                >
                    <view class="action"></view>
                    <view class="name">
                        <text class="n">张三好</text>
                        <text class="t">成人票</text>
                    </view>
                    <view class="passport">
                        <text class="n">港澳通行证</text>
                        <text class="t">G123456789</text>
                    </view>
                    <view 
                        class="edit"
                        @click="edit(item)"
                    ></view>
                </view>
            </view>
        </view>
        <view 
            class="ft"
            :style="ftStyle"
        >
            <view 
                class="actions"
                @click="add"
            >
                <text class="ico"></text>
                <text class="txt">添加乘客</text>
            </view>
            <view 
                class="btn"
                @click="closePop"
            >
                确定
            </view>
        </view>
    </view>
</template>

<script>
import utils from '@/utils/utils'
export default {
    props:{
        height:{
            type:String,
            default:'50%'
        },
        list:{
            type:Array,
            default:[]
        }
    },
    watch:{
        height:{
            deep:true,
            handler(nv){}
        },
        list:{
            deep:true,
            handler(nv){}
        }
    },
    data(){
        return{
            popStyle:'',
            bdStyle:'',
            ftStyle:'',
        }
    },
    mounted(){
        this.inifPopStyle()
    },
    methods:{
        inifPopStyle(){
            let height = this.height
            let bottom = utils.fixIPhoneX() ? 32 : 0 
            this.popStyle = utils.fixIPhoneX() ? `height:${height}vh;` : `height:${height}vh;`
            this.bdStyle = `height:calc(100% - 120rpx - 42rpx - 30rpx - 100rpx - ${bottom});`
            this.ftStyle = `bottom:${bottom + 30}rpx;`
        },
        closePop(){
            this.$emit('cbClosePop')
        },
        choose(item){
            this.$emit('cbChoose',item)
        },
        add(){
            let query = {
                type:'add'
            }

            let url = `/packageUser/pages/passenger/add?${utils.paramsStringify(query)}`

            uni.navigateTo({
                url
            })
        },
        edit(item){
            let query = {
                type:'edit',
                id:item.id
            }

            let url = `/packageUser/pages/passenger/add?${utils.paramsStringify(query)}`

            uni.navigateTo({
                url
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.c-pop {
    position:relative;
    .hd {
        position:relative;
        padding:60rpx 0;
        height:42rpx;
        line-height:42rpx;
        color:#000;
        font-size:40rpx;
        font-weight:500;
        text-align:center;
        .close {
            position:absolute;
            top:50%;
            right:24rpx;
            transform:translateY(-50%);
            width:42rpx;
            height:43rpx;
            background:url('http://8.138.130.153:6003/vue/upload/static/common/icon-colse.png') no-repeat;
            background-size:contain;
        }
    }
    .bd {
        height:calc(100% - 120rpx - 42rpx - 30rpx - 100rpx);
        overflow-y:auto;
        .item {
            position:relative;
            margin:0 45rpx;
            padding:12rpx 60rpx 24rpx;
            height:100rpx;
            border-bottom:1px solid rgba(#000,.1);
            overflow:hidden;
            .action {
                position:absolute;
                top:50%;
                left:0;
                transform:translateY(-50%);
                width:34rpx;
                height:34rpx;
                background:#000;
            }
            .name {
                margin:16rpx 0 8rpx;
                height:32rpx;
                line-height:32rpx;
                .t,
                .n {
                    display:inline-block;
                    vertical-align:middle;
                }
                .n {
                    margin-right:16rpx;
                    color:rgba(#000,.9);
                    font-size:28rpx;
                    font-weight:500;
                }
                .t {
                    padding:0 8rpx;
                    height:30rpx;
                    line-height:30rpx;
                    border:1px solid #F47B33;
                    border-radius:5rpx;
                    color:#F47B33;
                    font-size:18rpx;
                }
            }
            .passport {
                color:rgba(#000,.5);
                font-size:18rpx;
                .n {
                    margin-right:8rpx;
                }
            }
            .edit {
                position:absolute;
                top:50%;
                right:0;
                transform:translateY(-50%);
                width:28rpx;
                height:28rpx;
                background:url('http://8.138.130.153:6003/vue/upload/static/passenger/icon-edit.png') no-repeat;
                background-size:contain;
            }
            &:last-child {
                border-bottom:none;
            }
        }
    }
    .ft {
        position:absolute;
        bottom:30rpx;
        left:50%;
        transform:translateX(-50%);
        width:664rpx;
        text-align:center;
        .actions {
            height:80rpx;
            line-height:80rpx;
            color:#FF7937;
            font-size:30rpx;
            .ico {
                display:inline-block;
                margin-right:12rpx;
                width:26rpx;
                height:26rpx;
                background:url('http://8.138.130.153:6003/vue/upload/static/passenger/icon-add.png') no-repeat;
                background-size:contain;

            }
        }
        .btn {
            width:100%;
            height:100rpx;
            line-height:100rpx;
            background:linear-gradient(87deg, #FFA63F, #EB5628);
            border-radius:50rpx;
            color:#FFF;
            font-size:34rpx;
            font-weight:500;
        }
    }
}
</style>