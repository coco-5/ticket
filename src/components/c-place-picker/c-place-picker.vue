<template>x 
    <view 
        class="c-picker-box" 
        :style="{height:height}"
    >
        <view class="hd">
            <view class="title">
                {{title}}
            </view>        
            <view 
                class="close" 
                @click="closePop"
            >
                关闭
            </view>
        </view>
        <view 
            class="bd"
            v-if="list.length > 0"
        >
            <view 
                class="item"
                @click="choose(item)"
                v-for="(item,index) in list"
                :key="index"
            >
                {{item.name}}
            </view>
        </view>
    </view>
</template>

<script>
export default {
    props:{
        isShow:{
            type:Boolean,
            default:false
        },
        height:{
            type:String,
            default:'50%'
        },
        list:{
            type:Array,
            default:[]
        },
        title:{
            type:String,
            default:'请选择'
        }
    },
    methods:{
        closePop(){
            this.$emit('cbClosePop')
        },
        choose(item){
            this.$emit('cbChoose',item)
            this.closePop()
        }
    }
}
</script>