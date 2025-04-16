<template>
    <view class="a">
        <picker
            mode="date"
            :value="date"
            @change="change"
        >
            <text>
                <template>{{date}}</template>
            </text> 
        </picker>
    </view>
</template>

<script>
export default {
    props:{
        date:{
            type:String,
            default:''
        }
    },
    watch:{
        date:{
            immediate:true,
            deep:true,
            handler(n){
            }   
        }
    },
    data(){
        return {
            start:'2015-09-01',
            end:''     
        }
    },
    mounted(){
        this.initEnd()
    },
    methods:{
        initEnd(){
            let now = new Date()
            const year = now.getFullYear()

            this.end = `${year}-12-31`
        },
        change(e){
            this.$emit('change',e.detail.value)
        }
    }
}
</script>

<style lang="scss" scoped>
.none {
    color:#999!important;
}

text {
    //color:#747491;
    //font-weight:500;
}

.a {
    display:inline-block;
    font-size:28rpx;
    vertical-align:middle;
}
</style>