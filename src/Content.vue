<template>
    <div>
        <TopBar/>
        <div id="linkk">
            <div class="side">1231111111111111111111111111</div>
            <router-view></router-view>
            <div class="side">1231111111111111111111111111</div>
        </div>
        <FooterBar/>
        <!-- <Live2D/> -->
    </div>
</template>

<script>
    import TopBar from './components/TopBar.vue'
    // import BlogsNav from './components/BlogsNav.vue';
    import FooterBar from './components/FooterBar.vue';
    // import Live2D from './components/Live2D.vue'
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
