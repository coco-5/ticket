<template>
    <view class="page">
        <view class="user-info">
            <view class="avatar">
                <image />
            </view>
            <view class="name">1111</view>
        </view>
        <view class="list">
            <view 
                class="item"
                v-for="(item,index) in list"
                :key="index"
            >
                {{ item.name }}
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data(){
        return{
            options:{},
            list:[
                {type:'file',name:'学员档案',link:'/packageUser/pages/file/file'},
				{type:'unbindAccount',name:'退出登录',link:''},
            ]
        }
    },
    onLoad(e) {
        this.options = e
    },
    onLoad(){

    },
    methods:{

    }
}
</script>