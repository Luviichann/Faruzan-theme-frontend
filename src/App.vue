<template>
    <div id="linkk">
        <TopBar/>
        <BlogsNav/>
    </div>
</template>

<script>
    import TopBar from './components/TopBar.vue'
    import BlogsNav from './components/BlogsNav.vue';
    export default {
        name: 'App',
        components:{TopBar,BlogsNav}
    }
</script>

<style>
    #linkk{
        width: 1200px;
        height: auto;
        margin: 0 auto;
    }
</style>
