<template>
    <div>
        <TopBar/>
        <div id="linkk">
            <router-view></router-view>
            <!-- <BlogsNav/> -->
        </div>
        <FooterBar/>
    </div>
</template>

<script>
    import TopBar from './components/TopBar.vue'
    // import BlogsNav from './components/BlogsNav.vue';
    import FooterBar from './components/FooterBar.vue';
    export default {
        name: 'App',
        components:{TopBar,FooterBar}
    }
</script>

<style>
    #linkk{
        width: 1200px;
        height: auto;
        margin: 0 auto;
    }
</style>
