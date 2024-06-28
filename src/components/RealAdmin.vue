<template>
    <div class="container">
        <div class="admin">
            <AdminLeaveMsg/>
        </div>
        <div class="admin">
            <AdminBlogs/>
        </div>
        <div class="admin">
            <AdminEmail/>
        </div>
    </div>
</template>

<script>
    // import axios from 'axios'
    import {API_HOST} from '../config'
    import Cookies from 'js-cookie';
    import axios from '../axiosToken'
    import AdminLeaveMsg from './RealAdmin/AdminLeaveMsg.vue';
    import AdminBlogs from './RealAdmin/AdminBlogs.vue';
    import AdminEmail from './RealAdmin/AdminEmail.vue';
    // 创建 axios 实例
    export default {
        name:'RealAdmin',
        components:{AdminLeaveMsg,AdminBlogs,AdminEmail},
        data() {
            return {
                token:''
            }
        },
        mounted(){
            this.token = Cookies.get('token')
            axios.post(`${API_HOST}/admin/firstValid`)
            .then(res=>{
                if (res.data.msg !== 'success'){
                    this.$router.push('/admin/login')
                }
            })
            .catch(err=>{
                console.error(err);
                this.$router.push('/index')
            })
        }
    }
</script>

<style scoped>
    .container{
        display: flex;
        justify-content: center;
    }
    .admin{
        margin: 50px;
        width: 400px;
    }
</style>