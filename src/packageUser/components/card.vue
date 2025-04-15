<template>
    <view 
        class="c-card disabled"
    >
        <view class="main">
            <view class="left">
                <view class="num">20</view>
                <view class="name">可用（次）</view>
            </view>
            <view class="ov">
                <view class="name">粤通珠澳次数卡（30次）</view>
                <view class="tags">
                    <view class="tag">限湾仔-内港航线</view>
                    <view class="tag">限深圳-内港航线</view>
                </view>
                <view class="date">有效期：2024.05.01-2024.05.31</view>
                <view class="shuoming">详细说明 <text class="ico"></text></view>
            </view>
        </view>
        <view class="more">
            <view class="item">
                <view class="left">票卡名称：</view>
                <view class="ov">
                    <view class="p">粤通珠澳次数卡（30次）</view>
                </view>
            </view>
            <view class="item">
                <view class="left">票卡说明：</view>
                <view class="ov">
                    <view class="p">粤通珠澳次数卡是一种预付款卡，可用于乘坐澳门内港和珠海湾仔之间的乘船服务。该卡共有30次乘船次数，每次使用该卡购票乘船，次数将自动扣除。</view>
                </view>
            </view>
            <view class="item">
                <view class="left">使用方法：</view>
                <view class="ov">
                    <view class="p">1.在乘车前，请确保卡内有足够的次数。</view>
                    <view class="p">2.在本网页购票时，在优惠项中选择本票卡，并提交支付。</view>
                </view>
            </view>
            <view class="item">
                <view class="left">注意事项：</view>
                <view class="ov">
                    <view class="p">1.本卡仅限用于珠澳轮渡乘船，不可用于其他交通工具。</view>
                    <view class="p">2.如卡片在有效期内且有可用次数，但无法使用，请及时联系客服。</view>
                    <view class="p">3.本卡不支持退款和转让，一经购买激活即不可更改。</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    props:{
        item:{
            type:Array,
            default:[]
        }
    },
    data(){
        return{}
    },
    mounted(){

    }
}
</script>

<style lang="scss" scoped>
.c-card {
    position:relative;
    margin-bottom:16rpx;
    .main {
        position:relative;
        height:194rpx;
        background:#FFF3EC;
        border-radius:20rpx;
        overflow:hidden;
        .left {
            float:left;
            width:194rpx;
            height:194rpx;
            background:linear-gradient(205deg, #FF7E50, #F74939);
            border-radius:20rpx;
            color:#FFF;
            text-align:center;
            overflow:hidden;
            .num {
                margin:50rpx auto 0;
                height:60rpx;
                line-height:60rpx;
                font-size:60rpx;
                font-weight:500; 
            }
            .name {
                font-size:24rpx;
            }
        }
        .ov {
            padding-left:28rpx;
            overflow:hidden;
            .name {
                margin:28rpx 0 12rpx;
                height:32rpx;
                color:#000;
                font-size:30rpx;
                font-weight:500;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
            }
            .tags {
                margin-bottom:18rpx;
                height:30rpx;
                .tag {
                    display:inline-block;
                    margin-right:8rpx;
                    padding:0 14rpx;
                    height:30rpx;
                    line-height:30rpx;
                    border:1px solid #FE6630;
                    border-radius:5rpx;
                    color:#FE6630;
                    font-size:18rpx;
                    vertical-align:top;
                }
            }
            .date {
                height:22rpx;
                line-height:22rpx;
                color:#CAC1BB;
                font-size:20rpx;

            }
            .shuoming {
                margin-top:8rpx;
                color:#585351;
                font-size:20rpx;
                .ico {
                    display:inline-block;
                    margin-left:8rpx;
                    width:11rpx;
                    height:6rpx;
                    margin-left:10rpx;
                    background:url('http://8.138.130.153:6003/vue/upload/static/common/WechatIMG221.png') no-repeat center center;
                    background-size:contain;
                    vertical-align:4rpx;
                }
            }
        }
    }
    .more {
        margin-top:1px;
        padding:20rpx;
        background:#F5F5F5;
        border-radius:20rpx;
        .item {
            position:relative;
            padding-left:96rpx;
            font-size:18rpx;
            .left {
                position:absolute;
                top:0;
                left:0;
                height:24rpx;
                line-height:24rpx;
                color:#333;
            }
            .ov {
                color:#999;
                .p {

                }
            }
        }
    }
    &.disabled {
        &::before {
            content:' ';
            position:absolute;
            top:0;
            right:0;
            width:99rpx;
            height:99rpx;
            background:url('http://8.138.130.153:6003/vue/upload/static/ticketCard/invalid.png') no-repeat;
            background-size:contain;
        }
    }
}
</style>