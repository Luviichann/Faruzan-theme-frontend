<template>
    <div class="admin-email">
        邮件
        <div class="edit">
            <textarea ref="tx" placeholder="发送内容..." rows="2" maxlength="2000" v-model="content"></textarea>
        </div>
        <button class="sendEmail" @click="sendEmail">发送</button>
    </div>
</template>

<script>
    import axios from '../../axiosToken'
    import {API_HOST} from '../../config'
    export default {
        name:'AdminEmail',
        data() {
            return {
                content:''
            }
        },
        methods: {
            sendEmail(){
                // console.log('aaa');
                axios.post(`${API_HOST}/admin/sendEmail`,{
                    content:this.content,
                    key:'lava'
                })
                .then(res=>{
                    console.log(res.data);
                })
                .catch(err=>{
                    console.error(err);
                })
            }
        },
    }
</script>

<style scoped>
    .admin-email{
        background-color: antiquewhite;
        padding: 4px;
        border-radius: 10px;
    }
    .edit{
        padding: 8px;
    }
    .edit textarea{
        height: 200px;
        width: 300px;
    }
    button{
        border: none;
        padding: 4px;
        border-radius: 4px;
        background-color: aqua;
        width: 100px;
        margin-left: 100px;
    }
    button:hover{
        background-color: aquamarine;
    }
</style>