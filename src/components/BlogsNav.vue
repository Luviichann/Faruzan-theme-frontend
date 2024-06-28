<template>
    <div class="container">
        <!-- <div class="content"> -->
        <ul class="blog-list">
            <BlogInfo v-for="blog in blogsInfo" :key="blog.id" :blog="blog"/>
        </ul>
        <!-- </div> -->
    </div>
</template>

<script>
    import BlogInfo from './BlogsNav/BlogInfo.vue';
    import axios from 'axios';
    import {API_HOST} from '../config';
    export default {
        name:'BlogsNav',
        components:{BlogInfo},
        data() {
            return {
                blogsInfo:null
            }
        },
        created(){
            axios.get(`${API_HOST}/index/blogs/yes`)
            .then(res=>{
                this.blogsInfo = res.data.data.blogsList
            })
            .catch(error=>{
                console.error('error:',error);
            })
        }
    }
</script>

<style scoped>
    .container{
        /* width: 1186px; */
        margin: 0 auto;
        margin-top: 140px;
        padding: 4px;
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 10px;
        margin-bottom: 100px;
        display: flex;
        justify-content: center;
    }
    ul{
        padding: 1px;
        /* margin: 0 auto; */
        display: flex;
        flex-wrap: wrap;
        /* display: grid; */
        /* gap: 10px; */
        /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
        justify-content: center;
    }
</style>