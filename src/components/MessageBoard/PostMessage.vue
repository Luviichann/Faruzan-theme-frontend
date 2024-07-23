<template>
    <div class="post-message">
        <div class="leave-msg-info">
            <div class="valid-code">
                <input type="text" v-model="code">
                <ValidCode :updateRealCode="updateRealCode"/>
                <small @click="toggleCode" class="toggle">点击换一张</small>
            </div>
            <div class="warn">
                <small class="warn" ref="warning1">请输入正确的验证码</small>
            </div>
            <div class="mail">
                <span>邮箱：</span><input type="text" v-model="email"><div class="button pointer" @click="getValidCode">获取验证码</div>
            </div>
            <div class="warn">
                <small class="warn" ref="warning2">请输入正确的邮箱</small>
            </div>
        </div>
        <div class="content">
            <div class="mail">
                <span>邮箱验证码：</span><input type="text" v-model="mailCode">
            </div>
            <div class="warn">
                <small class="warn" ref="warning3">请输入正确的邮箱验证码</small>
            </div>
            <VisitorInput/>
        </div>
        <!-- 输入邮箱，进行人机验证，获取邮箱验证码 -->
        <!-- 留言内容 -->
    </div>
</template>

<script>
    import axios from 'axios';
    import ValidCode from './ValidCode.vue';
    import VisitorInput from './VisitorInput.vue';
    import {API_HOST} from '../../config';
    import browser from 'browser-tool';
    export default {
        name:'PostMessage',
        components:{ValidCode,VisitorInput},
        data() {
            return {
                realCode:'',
                code:'',
                buttonAble:true,
                email:'',
                mailCode:'',
                leaveMsg:{
                    email:'',
                    ip:'',
                    browser:'',
                    os:'',
                    time:0,
                    content:'',
                },
                flag:false
            }
        },
        methods:{
            // 切换验证码
            toggleCode(){
                this.$bus.$emit('toggleCode')
            },
            // 获取邮箱验证码
            getValidCode(e){
                // 已经获取过邮箱验证码
                if(this.buttonAble === false){
                    return
                }
                // 图形验证码错误
                if(this.code !== this.realCode){
                    this.$bus.$emit('toggleCode')
                    this.$refs.warning1.style.display = 'block'
                    return
                }
                // 图形验证码输入正确可以进行以下步骤。
                // 检验邮箱格式
                this.$refs.warning1.style.display = 'none' //隐藏警告
                const pattern = /^([0-9a-zA-Z_.-])+@([0-9a-zA-Z_.-])+.([a-zA-Z]+)$/
                if (pattern.test(this.email) === false){
                    // 邮箱格式错误
                    this.$refs.warning2.style.display = 'block'
                    return
                }
                // 获取邮箱信息
                this.leaveMsg.email = this.email
                // 隐藏警告
                this.$refs.warning2.style.display = 'none'
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
                        this.$bus.$emit('toggleCode')
                        return
                    }
                    e.target.innerHTML = timeNum
                },1000)
                // 调用后端发送邮件api
                axios.post(`${API_HOST}/msgBoard/sendEmail`,{
                    email:this.leaveMsg.email,
                    type:'LeaveMessage',
                    key:"lava"
                }).then()
                .catch(error => {
                    console.error('Error posting data:', error);
                });
            },
            updateRealCode(code){
                this.realCode = code
            },
            async getInfo(content){
                // 第三方api获取ip。
                await axios.get("https://api.ipify.org/?format=json")
                .then(res=>{
                    // 获取ip
                    this.leaveMsg.ip = res.data.ip
                })
                .catch(err=>{
                    console.error(err);
                })
                // 获取浏览器信息
                await browser.getInfo().then((res)=>{
                    this.leaveMsg.browser = `${res.browser}|${res.browserVersion}`
                    this.leaveMsg.os = `${res.system} ${res.systemVersion}`
                })
                
                this.leaveMsg.time = parseInt(Date.now()/1000)
                this.leaveMsg.content = content
                // console.log(this.leaveMsg);
            },
            // 后端验证验证码的正确性。
            async validEmailCode(){
                await axios.post(`${API_HOST}/msgBoard/validEmailCode`,{
                    email:this.leaveMsg.email,
                    code:this.mailCode,
                    type:'LeaveMessage',
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

            // 留言写入数据库
            async postMessage(content){
                await this.validEmailCode()
                if (this.flag === false){
                    this.$refs.warning3.style.display = 'block'
                    return
                }
                // 邮箱验证码正确
                this.$refs.warning3.style.display = 'none'
                // 获取信息
                await this.getInfo(content)
                // 向后端发送评论
                await axios.post(`${API_HOST}/msgBoard/addLeaveMessage`,{
                    'leaveMsg':this.leaveMsg
                }).then()
                .catch(error => {
                    console.error('Error posting data:', error);
                });
                // 重定向
                await this.$router.push('/backtoindex')
            }
        },
        mounted() {
            this.$bus.$on('judgeMailCode',this.postMessage)
        },
    }
</script>

<style scoped>
    .post-message{
        width: 900px;
        margin: 0 auto;
        padding: 50px;
        height: 200px;
        background-color: rgba(255, 255, 255,0.3);
        display: flex;
        justify-content: space-between;
        border-radius: 10px;
    }
    .post-message input{
        height: 30px;
        font-size: 18px;
    }
    .valid-code{
        display: flex;
        line-height: 40px;
    }
    .valid-code input{
        margin-right: 10px;
        width: 100px;
    }
    .mail{
        margin-top: 10px;
        text-align: center;
        line-height: 30px;
        height: 48px;
        display: flex;
    }
    .mail span{
        font-size: 20px;
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
    .toggle{
        margin-left: 10px;
        color: rgb(100, 100, 100);
    }
    div.warn{
        height: 16px;
    }
    small.warn{
        color: red;
        display: none;
    }
</style>
