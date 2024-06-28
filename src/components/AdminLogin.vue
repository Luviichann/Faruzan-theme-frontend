<template>
    <div class="container">
        <div class="valid-auth">
            <div class="account"><span>账号:</span><input type="text" v-model="account"></div>
            <div class="password"><span>密码:</span><input type="text" v-model="password"></div>
            <div class="login"><button class="pointer" @click="validAuth">登录</button></div>
            <input type="text" class="hidden special-pointer" v-model="key">
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import {API_HOST} from '../config'
    import Cookies from 'js-cookie';
    export default {
        name:'AdminLogin',
        data() {
            return {
                account:'',
                password:'',
                key:'',
                auth:false,
                token:''
            }
        },
        methods:{
            async validAuth(){
                if (this.key !== 'ho'){
                    return
                }
                await axios.post(`${API_HOST}/admin/validAuth`,{
                    account:this.account,
                    password:this.password,
                })
                .then(res=>{
                    if (res.data.msg === 'super'){
                        this.auth = true
                        this.token = res.data.data.token
                    }
                })
                .catch(err=>{
                    console.error(err);
                })
                if (this.auth === true){
                    this.setToken(this.token)
                    this.$router.push('/admin')
                }
            },
            // 存储token。
            setToken(token){
                Cookies.set('token', token, { expires: 7, path: '/' });
                console.log('Token saved');
            }
        },
    }
</script>

<style scoped>
    .container{
        margin: auto;
        /* height: 300px; */
        /* width: 600px; */
        padding: 200px 20px;
        display: flex;
        justify-content: center;
        line-height: 40px;
    }
    .valid-auth{
        border-radius: 10px;
        padding: 20px;
        background-color: aquamarine;
        height: 110px;
    }
    .valid-auth span{
        margin-right: 20px;
    }
    .login{
        text-align: center;
    }
    button{
        background: rgba(85,199,166,0.6);
        color: #ffffff;
        border: none;
        border-radius: 4px;
        margin-left: 10px;
        width: 70px;
    }
    button:hover{
        background: rgb(85,199,166);
    }
    /* input.hidden{
        opacity: 0;
    } */
</style>