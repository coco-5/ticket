<template>
    <view class="page">
        <view class="tabs">
            <view 
                class="item"
                :class="tabIndex == index ? 'on' : ''"
                v-for="(item,index) in tabs"
                :key="index"
            >
                {{item.name}}
            </view>
        </view>

        <view class="list">
            <card
                class="item"
                v-for="(item,index) in list"
                :key="index"
            ></card>
        </view>
    </view>
</template>

<script>
import card from '@/packageUser/components/card'
export default {
    components:{
        card
    },
    data(){
        return{
            tabs:[
                {
                    name:'未使用/生效中',
                    value:0
                },
                {
                    name:'历史票卡',
                    value:1
                }
            ],
            tabIndex:0, 
            list:[
                {},
                {},
                {}
            ]     
        }
    },
    onLoad(e){
        this.options = e
    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
.page {
    
}
</style>