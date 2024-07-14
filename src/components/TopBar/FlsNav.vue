<template>
    <div class="logo leftfix">
        <img src="./logo.png" alt="">
        <h2>书签栏</h2>
    </div>
</template>

<script>
    export default {
        name:'FlsNav'
    }
</script>

<style scoped>
    div.logo{
        font-size: 20px;
        margin:0 30px;
        /* color: rgb(69,181,165); */
        color: rgb(121,221,161);
        display: flex;
        text-align: center;
        line-height: 56px;
    }
    .logo img{
        width: 50%;
    }
</style>