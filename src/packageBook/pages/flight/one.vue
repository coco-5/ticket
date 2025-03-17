<template>
    <view class="page">
        <view class="destination">
            <view class="text">深圳蛇口</view>
            <view class="ico"></view>
            <view class="text">澳门氹仔</view>
        </view>

        <view class="dates"></view>

        <view class="list">
            <view class="item"></view>
        </view>
    </view>
</template>

<script>
import date from '@/packageBook/components/date'
export default {
    components:{
        date,
    },
    data(){
        return{

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
    min-height:100vh;
    background:#F8F8F8;
}
</style>