<template>
    <view class="c-date">
        <view class="hd">
            <view 
                class="item"
                v-for="(item,index) in weekList"
                :key="index"
            >
                {{item}}
            </view>
        </view>
        <view class="bd">
            <view 
                class="month"
                v-for="(month,index) in months"
                :key="index"
            >
                <view 
                    class="item"
                    v-for="(date,i) in month"
                    :key="i"
                >
                    {{date.getDate()}}
                </view>
            </view> 
        </view>
    </view>
</template>

<script>
export default {
    props:{
    },
    data(){
        return {
            currentDate:new Date(),
            weekList:['日','一','二','三','四','五','六'],
            months:[]
        }
    },
    mounted(){
        this.ininDate()
    },
    methods:{
        ininDate(){
            const year = this.currentDate.getFullYear()
            const month = this.currentDate.getMonth()
            const nextYear = year
            const nextMonth = month + 1

            if(month == 12){
                nextMonth = 1
                nextYear = year + 1
            }

            this.months = this.initMonth(year, month)
        },
        initMonth(year, month){
            const firstDay = new Date(year, month, 1)
            const lastDay = new Date(year, month + 1, 0)
            const daysInMonth = lastDay.getDate()
            const startDayOfWeek = firstDay.getDay()
            const dates = []

            for(let i = 0; i < startDayOfWeek; i++){
                dates.push(new Date(year, month, 1 - startDayOfWeek + i))
            }

            for(let i = 1; i <= daysInMonth; i++){
                dates.push(new Date(year, month, i))
            }

            while(dates.length % 7 !== 0){
                dates.push(new Date(year, month + 1, dates.length - daysInMonth + 1))
            }

            return [dates]
        }
    }
}
</script>

<style lang="scss" scoped>
.c-date {
    height:100%;
    .hd {
        display:flex;
        height:60rpx;
        line-height:60rpx;
        .item {
            flex:1;
            text-align:center;
        }
    }
    .bd {
        height:calc(100% - 60rpx);
        overflow-y:auto;
        .month {
            .item {
                display:inline-block;
                width:calc(100% / 7);  
                text-align:center;
                vertical-align:top; 
            }
        }
    }
}
</style>