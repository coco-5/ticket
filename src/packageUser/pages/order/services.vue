<template>
    <view class="page">
        <view class="tabs">
            <c-services-tab
                :tabIndex="tabIndex"
                @change="tabIndex = $event"
            ></c-services-tab>
        </view>
    </view>
</template>

<script>
export default {
    data(){
        return{
            tabIndex:0, 
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

.tabs {
    padding:40rpx 50rpx;
}

</style>