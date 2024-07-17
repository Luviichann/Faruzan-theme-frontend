<template>
    <div class="container pointer">
        <router-link to="/index"><h1>点击进入</h1></router-link>
    </div>
</template>

<script>
    export default {
        name: 'Guide',
        
    }
</script>

<style scoped>
    .container{
        background-color: #00000077;
        text-align: center;
        margin: 0 auto;
        margin-top: 300px;
        padding: 10px;
        width: 400px;
        border-radius: 20px;
    }
    h1{
        margin: 0 auto;
        font-size: 70px;
        color: rgb(131,254,249);
    }
</style>
