<template>
    <div class="footer">
        <div class="container">
            <FooterLine/>
            <div class="footer-info">
                <div><span>Faruzan-Bookmark&nbsp;|&nbsp;基于Vue</span></div>
                <div><span>站长：luvii&nbsp;|&nbsp;@Copyright luvii</span></div>
                <div><router-link to="/admin/login">后院</router-link></div>
                <div><a href="https://beian.miit.gov.cn/" target="_blank" >冀ICP备2024056657号</a></div>
            </div>
        </div>
    </div>
</template>

<script>
    import FooterLine from './FooterBar/FooterLine.vue';
    export default {
        name:'FooterBar',
        components:{FooterLine}
    }
</script>

<style scoped>
    .footer{
        margin-top: 200px;
    }
    .container{
        margin: 20px auto;
    }
    .footer-info{
        width: 480px;
        line-height: 24px;
        font-size: 14px;
        padding: 10px;
        margin: 0 auto;
        text-align: center;
        background-color: #ffffffaa;
        border-radius: 10px;
        color: rgb(128, 171, 168);
    }
    .footer-info a{
        color: rgb(128, 171, 168);
    }
</style>