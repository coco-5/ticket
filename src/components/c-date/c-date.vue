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
                    :class="{'disabled':date.disabled, 'today':date.today, 'current':date.time == onDate}"
                    @click="choose(date)"
                    v-for="(date,i) in month"
                    :key="i"
                >
                    {{date.date.getDate()}}
                </view>
            </view> 
        </view>
    </view>
</template>

<script>
export default {
    props:{
        onDate:{
            type:[String,Number],
            default:0
        }
    },
    watch:{
        onDate:{
            deep:true,
            handler(n){
            }
        }  
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

            this.nowYear = year
            this.nowMonth = month
            this.nowDate = this.currentDate.getDate()

            if(month == 11){
                nextMonth = 1
                nextYear = year + 1
            }

            this.months = this.initMonth(year, month)

            this.months = this.months.concat(this.initMonth(nextYear, nextMonth))
        },
        initMonth(year, month){
            const firstDay = new Date(year, month, 1)
            const lastDay = new Date(year, month + 1, 0)
            const daysInMonth = lastDay.getDate()
            const startDayOfWeek = firstDay.getDay()
            const dates = []
            const today = new Date(this.nowYear, this.nowMonth, this.nowDate)
            const last = new Date(this.nowYear, this.nowMonth, this.nowDate+10)

            for(let i = 0; i < startDayOfWeek; i++){
                let date = new Date(year, month, 1 - startDayOfWeek + i)
                dates.push({
                    time:date.getTime(),
                    date,
                    disabled:date < today || date > last
                })
            }

            for(let i = 1; i <= daysInMonth; i++){
                let date = new Date(year, month, i)
                dates.push({
                    time:date.getTime(),
                    date,
                    disabled:date < today || date > last,
                    today:date.getTime() == today.getTime()
                })
            }

            //补齐最后几天
            if(dates.length % 7 !== 0){
                let j = 1
                while(dates.length % 7 !== 0){
                    let date = new Date(year, month + 1, j)
                    dates.push({
                        time:date.getTime(),
                        date,
                        disabled:date < today || date > last
                    })
                    j++
                }
            }

            return [dates]
        },
        choose(item){
            let date = (item.date).getTime()
            this.$emit('cbChoose',date)
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
                &.disabled {
                    color:#999;
                }
                &.current {
                    color:#f00;
                }
            }
        }
    }
}
</style>