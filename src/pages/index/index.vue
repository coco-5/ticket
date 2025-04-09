<template>
    <view class="page">
        <view 
            class="banner"
            v-if="bannerList.length > 0"
        >
            <c-banner
                style="height:437rpx;"
                :list="bannerList"
                :current="bannerIndex"
                @change="changeBanner"
            ></c-banner>
        </view>

        <view class="book">
            <book></book>
        </view>

        <view class="cooperate">
            <cooperate></cooperate>
        </view>

        <view 
            class="bottom-banner"
            v-if="bottomBannerList.length > 0"
        >
            <c-banner
                style="width:720rpx;height:147rpx;background:#FFF;"
                :list="bottomBannerList"
                :current="bottomBannerIndex"
                @change="changeBottomBanner"
            ></c-banner>
        </view>

        <c-bottom
            current="0"
            :isShowNav="true"
        ></c-bottom>
    </view>
</template>

<script>
import book from '@/packageIndex/components/book'
import cooperate from '@/packageIndex/components/cooperate'
import { getBannerListApi } from '@/api/common'
export default {
    components:{
        book,
        cooperate
    },
    data(){
        return{
            options:{},
            bannerList:[],
            bannerIndex:0,
            bottomBannerList:['https://oss-hqwx-edu24ol.hqwx.com/miniapp/takepicture/common/ico-home.png','https://oss-hqwx-edu24ol.hqwx.com/miniapp/takepicture/common/ico-home-on.png','https://oss-hqwx-edu24ol.hqwx.com/miniapp/takepicture/common/ico-user.png'],
            bottomBannerIndex:0,
        }
    },
    onLoad(e){
        this.options = e

        this.getList()
    },
    methods:{
        getList(){
            let list = [
                this.getBannerList()
            ]

            Promise.all(list).then(()=>{
            })
        },
        getBannerList(){
            let params = {}

            return new Promise((resolve)=>{
                getBannerListApi(params).then((res)=>{
                    if(res.data.code == 200){
                        let data = res.data.data || []
                        this.bannerList = data
                    }
                })
            })
        },
        changeBanner(index){
            this.bannerIndex = index
        },
        changeBottomBanner(index){
            this.bottomBannerIndex = index
        }
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
    background:#CCC;
}

.cooperate {
    margin:24rpx 15rpx;
}

.bottom-banner {
    margin:0 auto 60rpx;
    width:720rpx;
}
</style>