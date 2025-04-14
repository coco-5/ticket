<template>
    <view class="c-code">
        <canvas 
            id="qrcode" 
            canvas-id="qrcode" 
            :style="style"
        ></canvas>
    </view>
</template>

<script>
import UQRCode from 'uqrcodejs'
export default {
    props:{
        style:{
            type:String,
            default:'width:200px;height:200px;'
        }
    },
    data(){
        return {}
    },
    methods:{
        setCode(url){
            var qr = new UQRCode()
            qr.data = url
            qr.make()
            var canvasContext = uni.createCanvasContext('qrcode',this)
            qr.canvasContext = canvasContext
            qr.drawCanvas()
        }
    }
}
</script>

<style lang="scss" scoped>
.c-code {

}
</style>