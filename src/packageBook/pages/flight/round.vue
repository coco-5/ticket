<template>
    <view class="page">
        <destination></destination>
        round
    </view>
</template>

<script>
import destination from '@/packageBook/components/destination'
export default {
    components:{
        destination
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