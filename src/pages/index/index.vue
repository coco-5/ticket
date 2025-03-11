<template>
    <view class="page">
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
            options:{}
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