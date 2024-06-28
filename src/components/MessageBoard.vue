<template>
    <div class="container">
        <div class="message-board">
            <ul class="msg-list">
                <LeaveMessage v-for="msgInfo in msgsInfo" :key="msgInfo.id" :msg="msgInfo"/>
            </ul>
        </div>
        <PostMessage/>
    </div>
</template>

<script>
    import LeaveMessage from './MessageBoard/LeaveMessage.vue';
    import PostMessage from './MessageBoard/PostMessage.vue';
    import axios from 'axios';
    import {API_HOST} from '../config';
    export default {
        name:'MessageBoard',
        components:{LeaveMessage,PostMessage},
        data() {
            return {
                msgsInfo:[
                ]
            }
        },
        created(){
            // 获取留言。
            axios.get(`${API_HOST}/msgBoard/getLeaveMessage/yes`)
            .then(res=>{
                this.msgsInfo = res.data.data.leaveMsgList
            })
            .catch(error=>{
                console.error('error:',error);
            })
        }
    }
</script>

<style scoped>
    .container{
        margin: 0 auto;
    }
    .message-board{
        width: 900px;
        margin: 0 auto;
        margin-top: 140px;
        padding: 50px;
        background: 
                linear-gradient(to right, rgba(86,205,203,0.7), transparent 50px),
                linear-gradient(to left, rgba(86,205,203,0.7), transparent 50px),
                linear-gradient(to bottom, rgba(86,205,203,0.7), transparent 50px),
                linear-gradient(to top, rgba(86,205,203,0.7), transparent 50px);
        border-radius: 10px;
        margin-bottom: 100px;
        background-color: #ffffffaa;
    }
</style>