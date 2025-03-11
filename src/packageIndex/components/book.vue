<template>
    <view class="book">
        <view @click="isShowDeparturePop = true">选择出发地点</view>
        <view @click="isShowArrivalPop = true">选择到达地点</view>
        <view>选择日期</view>
        
        <c-pop
            height="65vh"
            :isShow="isShowDeparturePop"
            @cbClosePop="cbCloseDepartPop"
        >
            <template #content>
                <c-place-picker
                    :list="departureList"
                    :title="'出发港'"
                    @cbClosePop="cbCloseDepartPop"
                    @cbChoose="cbChooseDeparture"
                >
                </c-place-picker>
            </template>
        </c-pop>

        <c-pop
            height="65vh"
            :isShow="isShowArrivalPop"
            @cbClosePop="cbCloseArrivalPop"
        >
            <template #content>
                <c-place-picker
                    :list="arrivalList"
                    :title="'到达港'"
                    @cbClosePop="cbCloseArrivalPop"
                    @cbChoose="cbChooseArrival"
                >
                </c-place-picker>
            </template>
        </c-pop>
    </view>
</template>
<script>
export default {
    data(){
        return{
            isShowDeparturePop:false,
            departureList:[
                {
                    name:'北京1'
                },
                {
                    name:'北京2'
                },
                {
                    name:'北京3'
                },
            ],
            isShowArrivalPop:false,
            arrivalList:[
                {
                    name:'上海1'
                },
                {
                    name:'上海2'
                },
                {
                    name:'上海3'
                },
            ],
        }
    },
    mounted(){
    },
    methods:{
        cbCloseDepartPop(){
            this.isShowDeparturePop = false
        },
        cbChooseDeparture(item){

        },
        cbCloseArrivalPop(){
            this.isShowArrivalPop = false
        },
        cbChooseArrival(item){

        }
    }
}
</script>

<style lang="scss" scoped>
.page {

}
</style>