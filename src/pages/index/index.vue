<template>
    <view class="page">
        <view 
            class="banner"
            v-if="bannerList.length > 0"
        >
            <c-banner
                style="height:437rpx;"
                :list="bannerList"
            ></c-banner>
        </view>
        <book></book>
    </view>
</template>

<script>
import book from '@/packageIndex/components/book.vue'
export default {
    components:{
        book
    },
    data(){
        return{
            options:{},
            bannerList:['https://oss-hqwx-edu24ol.hqwx.com/miniapp/takepicture/common/ico-home.png','https://oss-hqwx-edu24ol.hqwx.com/miniapp/takepicture/common/ico-home-on.png','https://oss-hqwx-edu24ol.hqwx.com/miniapp/takepicture/common/ico-user.png']
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
    background:#FF7937;
}

.banner {
    height:437rpx;
    background:#FFF;
}
</style>