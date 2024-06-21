<template>
    <div class="footer">
        <div class="container">
            <FooterLine/>
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
        margin-top: 400px;
    }
</style>