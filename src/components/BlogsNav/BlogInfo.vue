<template>
    <li>
        <div class="blog">
            <div class="blog-content clearfix">
                <div class="leftfix">
                    <img :src="blog.avatar" alt="" class="avatar">
                </div>
                <div class="blog-info leftfix">
                    <h4>{{blog.title}}</h4>
                    <p class="intro">{{truncatedText}}</p>
                </div>
            </div>
            <div class="small-web">
                <img :src="blog.webpct" alt="" class="small-web">
            </div>
        </div>
    </li>
    
</template>

<script>
    export default {
        name:'BlogInfo',
        props:['blog'],
        data() {
            return {
                showFullText:false
            }
        },
        computed: {
            truncatedText() {
            if (this.blog.text.length > 22) {
                return this.blog.text.slice(0, 22) + '......';
            }
                return this.blog.text;
            }
        },
        methods: {
            MouseEnter(){
                // this.show
            }
        },
    }
</script>

<style scoped>
    div.blog{
        width: 264px;
        height: 204px;
    }
    .avatar{
        height: 50px;
        width: 50px;
        margin-right: 8px;
        border-radius: 8px;
    }
    /* p.intro{
        margin-left: 8px;
    } */
    div.small-web{
        margin-top: 4px;
    }
    img.small-web{
        height: 145.8px;
        /* height: 151.2px; */
        width: 259.2px;
        /* width: 268.8px; */
        margin: 0 auto;
        border-radius: 8px;
    }
    .blog-info p{
        width: 204px;
        height: 34px;
    }
    li{
        float: left;
        margin: 8px;
        padding: 8px;
        /* background-color: rgb(135, 206, 235,0.3); */
        background-color: rgba(159, 241, 228, 0.5);
        border-radius: 10px;
    }
    .blog-info h4{
        font-weight: bold;
        margin-bottom: 3px;
    }
</style>