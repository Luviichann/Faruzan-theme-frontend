<template>
    <div class="container">
        <div class="message-board">
            您的留言需要经过审核以后才能上传，我们会在短时间内通过邮箱通知您结果。
            <br>
            <br>
            
            <router-link to="/index">返回首页({{time}})</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name:'BackToindex',
        data() {
            return {
                time:5,
            }
        },
        mounted(){
            setInterval(()=>{
                this.time--
                if (this.time <= 0){
                    this.$router.push('/index')
                    location.reload();
                }
            },1000)
        }
    }
</script>

<style scoped>
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
        font-size: 20px;
        text-align: center;
    }
</style>