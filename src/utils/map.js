export default {
    //乘客类型
    passengerTypeRange:[
        '成人票',
        '儿童票'
    ],
    passengerTypeList:[
        {
            value:1,
            label:'成人票'
        },
        {
            value:2,
            label:'儿童票'

        }
    ],
    //证件类型
    certificateTypeRange:[
        '护照',
        '港澳通行证',
        '回乡证',
        '台胞证'
    ],
    certificateTypeList:[
        {
            value:2,
            label:'护照',
            regex:/^[A-Za-z0-9]{7,17}$/
        },
        {
            value:3,
            label:'港澳通行证',
            regex:/^[A-Za-z]\d{8}|[A-Za-z]{2}\d{7}$/
        },
        {
            value:5,
            label:'回乡证',
            regex:/^[A-Za-z]\d{8,10}$/
        },
        {
            value:7,
            label:'台胞证',
            regex:/^\d{8,10}|(\d{10}[A-Za-z])$/
        }
    ],
    certificateTypeTips:[
        '格式为 “7~17位英文字母或数字”',
        '格式为“1位英文字母”+“8位数字”或“2位英文字母”+“7位数字”',
        '格式为“1位英文字母”+“8位或10位数字”',
        '格式为“8位或10位数字或(10位数字+1位英文字母)”'
    ],
    certificateTypeImages:[
        'http://8.138.130.153:6003/vue/upload/static/passenger/type2.jpg',
        'http://8.138.130.153:6003/vue/upload/static/passenger/type3.jpg',
        'http://8.138.130.153:6003/vue/upload/static/passenger/type5.jpg',
        'http://8.138.130.153:6003/vue/upload/static/passenger/type7.jpg'
    ],
}