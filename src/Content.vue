<template>
    <div>
        <TopBar/>
        <div id="linkk">
            <div class="side">1231111111111111111111111111</div>
            <router-view></router-view>
            <div class="side">1231111111111111111111111111</div>
        </div>
        <FooterBar/>
    </div>
</template>

<script>
    import TopBar from './components/TopBar.vue'
    // import BlogsNav from './components/BlogsNav.vue';
    import FooterBar from './components/FooterBar.vue';
    export default {
        name: 'Content',
        components:{TopBar,FooterBar}
    }
</script>

<style>
    #linkk{
        /* width: 1200px; */
        height: auto;
        margin: 0 auto;
        display: flex;
    }
    .side{
        opacity: 0;
    }
</style>
