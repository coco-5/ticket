<script>
    /*
    * App.vue在解耦构建的模式种，并不会被执行，这是因为uni项目只是作为一个包被引入到主小程序项目中
    * 主小程序的原生app.js才是入口文件，是否执行uni项目的App.vue是由整个小程序的管理者决定
    * App.vue的对象会被保存在wx.__uniapp2wxpack.uniSubpackage.__packInit中
    * 主小程序的原生app.js可以自己选择在合适的时候去使用App.vue中的方法和数据
    * */
    export default {
        onLaunch: function() {
            console.log('App Launch');
            // uni.login({
            //     // provider: uni.getProvider('oauth'),
            //     success: function (loginRes) {
            //         console.log('login',loginRes);
            //     }
            // });
        },
        onShow: function() {
            let token = `343cfdf7850417ffeea91e6291d6fbdc846e3d9d600b064d365dfd190d6af136f8df07ae75aeb019f3667fef7f641c97bb7d57545a71e617d82660221594b8cfd2ec1b318fa7b79eb4eefdfaf880908216`

            uni.setStorageSync('hq_token',token)
            console.log('App Show')
        },
        onHide: function() {
            console.log('App Hide')
        },
		globalData: {
			test: 'Hello! I am the globalData from App.vue'
        }
    }
</script>

<style>
    /*__uniWxss{*/
        /*import: '/static/test.wxss';*/
    /*}*/
    /*view,.aabbcc{*/
        /*background: red;*/
    /*}*/
</style>
