<template>
    <view 
        class="bottom-nav"
        :style="style"
    >
        <view 
            class="list"
            :style="style"
            v-if="isShowNav"
        >
            <slot name="content">
                <view 
                    class="item"
                    :class="index == current ? 'on' : '' "
                    @click="go(item)"
                    v-for="(item,index) in bottomList"
                    :key="index"
                >       
                    <view 
                        class="ico"
                        :class="item.type"
                    ></view>
                    <view class="name">{{item.name}}</view>
                </view> 
            </slot>
        </view>
    </view>
</template>

<script>
import utils from '@/utils/utils'
export default {
    props:{
        current:{
            type:[String,Number],
            default:0
        },
        isShowNav:{
            type:Boolean,
            default:false
        }
    },
    watch:{

    },
    data(){
        return {
            bottomList:[
                {
                    type:'home',
                    name:'首页',
                },
                {
                    type:'order',
                    name:'订单',
                },
                {
                    type:'my',
                    name:'我的',
                }
            ],
            style:''
        }
    },
    mounted(){
        this.style = `padding-bottom:${utils.fixIPhoneX() ? 68 : 0}rpx;`
    },
    methods:{
        go(item){
            let url = item.type == 'index' ? '/pages/index/index' : '/packageUser/pages/user/user'

            uni.reLaunch({
                url:url
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.bottom-nav {
    height:120rpx;
    text-align:center
}
.list {
    display:flex;
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    height:120rpx;
    background:#FFF;
    .item {
        flex:1;
        color:#CACACA;
        font-size:18rpx;
        text-align:center;
        .ico {
            margin:24rpx auto 0;
            width:45rpx;
            height:45rpx;
            background-repeat:no-repeat;
            background-size:contain;
            &.home {
                background-image:url("http://182.254.192.167:6003/vue/upload/static/bottom/home.png");
            }
            &.order {
                background-image:url("http://182.254.192.167:6003/vue/upload/static/bottom/order.png");
            }
            &.my {
                background-image:url("http://182.254.192.167:6003/vue/upload/static/bottom/my.png");
            }
        }
        &.on {
            color:#ED602B;
            .home {
                background-image:url("http://182.254.192.167:6003/vue/upload/static/bottom/home-active.png");
            }
            .order {
                background-image:url("http://182.254.192.167:6003/vue/upload/static/bottom/order-active.png");
            }
            .my {
                background-image:url("http://182.254.192.167:6003/vue/upload/static/bottom/my-active.png");
            }
        }
    }
}
</style>