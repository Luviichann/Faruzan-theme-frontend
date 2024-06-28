<template>
    <div class="admin-leave-message">
        留言
        <ul class="leave-message-list">
            <CtrlLeaveMsgVue v-for="msgInfo in leaveMsgList" :key="msgInfo.id" :msg="msgInfo"/>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    import {API_HOST} from '../../config'
    import CtrlLeaveMsgVue from './CtrlLeaveMsg.vue'
    export default {
        name:'AdminLeaveMsg',
        data() {
            return {
                leaveMsgList:[]
            }
        },
        components:{CtrlLeaveMsgVue},
        created(){
            axios.get(`${API_HOST}/msgBoard/getLeaveMessage/no`)
            .then(res=>{
                this.leaveMsgList = res.data.data.leaveMsgList
            })
            .catch(error=>{
                console.error('error:',error);
            })
        }
    }
</script>

<style scoped>
    .admin-leave-message{
        padding: 4px;
        border-radius: 10px;
        background-color: aquamarine;
    }
</style>