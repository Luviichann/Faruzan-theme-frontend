<template>
    <div class="container">
        <div class="intro">
            <h2>要订阅本站吗？</h2>
            <p>订阅后，本站有更新消息时会向您发送邮件</p>
        </div>
        <div class="submit">
            <div class="mail">
                <div><span>邮箱：</span><input type="text" v-model="email"><div class="button pointer" @click="getValidCode">获取验证码</div></div>
                <div class="warn">
                    <small class="warn" ref="warning1">请输入正确的邮箱</small>
                    <small class="target">（我们不会把您的邮箱用于邪恶目的）</small>
                </div>
            </div>
            <div class="code">
                <div class="valid-code"><span>验证码：</span><input type="text" v-model="mailCode"></div>
                <div class="warn">
                    <small class="warn" ref="warning2">请输入正确的验证码</small>
                </div>
                <div class="option">
                    <div class="button subscribe pointer" @click="option('dyyt')">订阅</div>
                    <div class="button unsubscribe pointer" @click="option('tvdy')">退订</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {API_HOST} from '../config';
    export default {
        name:'SubscribeTo',
        data() {
            return {
                buttonAble:true,
                email:'',
                subEmail:'',
                mailCode:'',
                flag:false,
            }
        },
        methods: {
            getValidCode(e){
                // 已经获取过邮箱验证码
                if(this.buttonAble === false){
                    return
                }
                const pattern = /^([0-9a-zA-Z_.-])+@([0-9a-zA-Z_.-])+.([a-zA-Z]+)$/
                if (pattern.test(this.email) === false){
                    // 邮箱格式错误
                    this.$refs.warning1.style.opacity = 1
                    return
                }
                // 获取邮箱信息
                this.subEmail = this.email
                // 隐藏警告
                this.$refs.warning1.style.opacity = 0
                this.buttonAble = false //获取邮箱验证码不能再点
                e.target.classList.remove('pointer') //鼠标小手变成指针
                let timeNum = 60 //获取邮箱验证码冷却时间
                e.target.innerHTML = timeNum //倒计时
                let timeId = setInterval(()=>{
                    timeNum --
                    if (timeNum <= 0){
                        e.target.innerHTML = '获取验证码'
                        clearInterval(timeId)
                        this.buttonAble = true
                        e.target.classList.add('pointer')
                        return
                    }
                    e.target.innerHTML = timeNum
                },1000)
                // 调用后端发送邮件api
                axios.post(`${API_HOST}/msgBoard/sendEmail`,{
                    email:this.subEmail,
                    type:'SubscribeTo',
                    key:"lava"
                }).then()
                .catch(error => {
                    console.error('Error posting data:', error);
                });
            },
            async validEmailCode(){
                await axios.post(`${API_HOST}/msgBoard/validEmailCode`,{
                    email:this.subEmail,
                    code:this.mailCode,
                    type:'SubscribeTo',
                }).then(res=>{
                    if (res.data.msg === '验证码错误'){
                        this.flag = false
                    }
                    else if (res.data.msg === '验证码正确'){
                        this.flag = true
                    }
                }).catch(err=>{
                    console.error('Error posting data:', err);
                })
            },
            async option(data){
                await this.validEmailCode()
                if (this.flag === false){
                    this.$refs.warning2.style.opacity = 1
                    return
                }
                // 邮箱验证码正确
                this.$refs.warning2.style.opacity = 0
                await axios.post(`${API_HOST}/subscribe/option`,{
                    email:this.subEmail,
                    option:data,
                    key:'lava'
                }).then(res=>{
                    alert(res.data.msg)
                })
                .catch(error => {
                    console.error('Error posting data:', error);
                });
                // 向后端发送评论
            }
        },
    }
</script>

<style scoped>
    .container{
        width: 900px;
        /* height: 200px; */
        padding: 10px;
        background-color: #ffffffbb;
        margin: 0 auto;
        margin-top: 140px;
        border-radius: 20px;
    }
    .intro{
        text-align: center;
    }
    h2{
        font-size: 24px;
    }
    p{
        margin: 20px;
    }
    .button{
        width: 100px;
        margin-left: 5px;
        background-color: rgb(183,209,219);
        border-radius: 10px;
        padding: 4px;
        margin-bottom: 10px;
        transition: background-color 0.5s ease;
    }
    .pointer:hover {
        background-color: rgba(105,164,167,0.8);
    }
    input{
        height: 30px;
        font-size: 18px;
    }
    .submit{
        display: flex;
        justify-content: space-between;
    }
    .mail>div{
        text-align: center;
        display: flex;
        line-height: 30px;
        margin-left: 30px;
        /* margin-top: 40px; */
        /* margin-bottom: 20px; */
    }
    div.warn{
        height: 16px;
    }
    small.warn{
        color: red;
        margin-left: 50px;
        /* display: none; */
        opacity: 0;
    }
    .target{
        /* position: absolute; */
        /* margin-left: 240px; */
        color: rgba(100,100,100,0.8)
    }
    .code{
        text-align: center;
        margin-right: 40px;
    }
    .valid-code{
        margin-bottom: 20px;
    }
    .option{
        display: flex;
        margin: 10px auto;
        padding-left: 62px;
    }
</style>