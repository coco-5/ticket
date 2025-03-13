<template>
    <view 
        class="c-banner"
        :style="style"
    >
        <swiper :style="style">
            <swiper-item 
                :indicator-dots="indicatorDots"
                :indicator-color="indicatorColor"
                :indicator-active-color="indicatorActiveColor"
                :autoplay="autoplay"
                :current="current"
                :interval="interval"
                @change="change"
                v-for="(item,index) in list" 
                :key="index"
            >
                <image 
                    :src="item" 
                    @click="handleClick"
                    mode="aspectFill"
                ></image>
            </swiper-item>
        </swiper>
    </view>
</template>

<script>
export default {
    props:{
        list:{
            type:Array,
            default:[]
        },
        style:{
            type:String,
            default:''
        },
        indicatorDots:{
            type:Boolean,
            default:false
        },
        indicatorColor:{
            type:String,
            default:'#fff'
        },
        indicatorActiveColor:{
            type:String,
            default:'#000'
        },
        autoplay:{
            type:Boolean,
            default:false
        },
        current:{
            type:Number,
            default:0
        },
        interval:{
            type:Number,
            default:3000
        }
    },
    data(){
        return {
            options:{}
        }
    },
    mounted(e){
        this.options = e
    },
    methods:{
        change(e){
            this.$emit('change',e)
        },
        transition(e){
            this.$emit('transition',e)
        },
        animationfinish(e){
            this.$emit('animationfinish',e)
        }
    }
}
</script>

<style lang="scss" scoped>
.c-banner {
    image {
        width:100%;
        height:100%;
    }
}
</style>