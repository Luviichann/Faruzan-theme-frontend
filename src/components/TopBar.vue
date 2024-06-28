<template>
    <div class="container clearfix">
        <FlsNav/>
        <TopNav/>
        <!-- <div class="auth rightfix clearfix">
            <div class="register rightfix"><a href="javascript:;"><span>注册</span></a></div>
            <div class="login rightfix"><a href="javascript:;"><span>登录</span></a></div>
        </div> -->
    </div>
</template>

<script>
    import TopNav from './TopBar/TopNav.vue';
    import FlsNav from './TopBar/FlsNav.vue';
    export default {
        name:'TopBar',
        components:{TopNav,FlsNav}
    }
</script>

<style scoped>
    .container{
        width: 1186px;
        margin: 0 auto;
        /* margin-top: 40px; */
        padding-top: 40px;
        /* background-color: rgb(123,218,184,0.55); */
        /* background-color: rgb(217,236,240); */
        /* background-color: rgb(93,135,233,0.7); */
    }
</style>