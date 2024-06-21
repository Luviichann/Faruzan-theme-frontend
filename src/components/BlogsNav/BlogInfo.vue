<template>
    <li>
        <div class="blog">
            <div class="blog-content clearfix">
                <div class="leftfix">
                    <img :src="blog.avatar" alt="" class="avatar">
                </div>
                <div class="blog-info leftfix">
                    <h4>{{blog.title}}</h4>
                    <p class="intro" @mouseenter="showFullText = true" @mouseleave="showFullText = false">{{truncatedText}}</p>
                    <transition name="fade">
                        <div v-if="showFullText" class="full-text">{{blog.text}}</div>
                    </transition>
                </div>
            </div>
            <div class="small-web">
                <img :src="blog.webpct" alt="" class="small-web" @mouseenter="showImage()" @mouseleave="hideImage()">
                <transition name="fade">
                    <img class="big-img" :src="blog.webpct" alt="" v-if="showBigImage">
                </transition>
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
                showFullText:false,
                showBigImage:false,
                timer:null
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
            showImage(){
                this.timer = setTimeout(()=> {
                    this.showBigImage = true
                },500)
            },
            hideImage(){
                clearTimeout(this.timer)
                this.showBigImage = false
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
        text-overflow: ellipsis;
    }
    li{
        /* cursor: pointer; */
        float: left;
        margin: 8px;
        padding: 8px;
        /* background-color: rgb(135, 206, 235,0.3); */
        background-color: rgba(159, 241, 228, 0.5);
        border-radius: 10px;
        transition: background-color 0.5s ease;
    }
    li:hover {
        background-color: rgba(87,130,225,0.4);
    }
    .blog-info h4{
        font-weight: bold;
        margin-bottom: 3px;
    }
    .full-text {
        width: 194px;
        position: absolute;
        background-color: rgb(0,0,0,0.6);
        color: #ffffff;
        padding: 5px;
        /* transition: opacity 0.5s ease-in-out; */
        z-index: 10;
        white-space: normal;
        border-radius: 10px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.4s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
        opacity: 0;
    }
    .big-img{
        height: 324px;
        width: 576px;
        position: absolute;
        margin-left: -158px;
        margin-top: 10px;
        border-radius: 10px;
    }
</style>