<template>
    <div class="admin-blogs">
        博客
        <div class="console">
            <ul class="info-list">
                <li><span>标题：</span><input type="text" v-model="title"></li>
                <li><span>简介：</span><input type="text" v-model="intro"></li>
                <li><span>链接：</span><input type="text" v-model="url"></li>
                <li><span>头像：</span><input type="text" v-model="avatar"></li>
                <li><span>分类：</span><input type="text" v-model="category"></li>
            </ul>
            <UploadImage :title="title" :text="intro" :url="url" :avatar="avatar" :category="category" />
        </div>
    </div>
</template>

<script>
    import UploadImage from './UploadImage.vue';
    export default {
        name:'AdminBlogs',
        components:{UploadImage},
        data() {
            return {
                title:'',
                intro:'',
                url:'',
                avatar:'',
                category:''
            }
        },
    }
</script>

<style scoped>
    .admin-blogs{
        padding: 4px;
        border-radius: 10px;
        background-color: rgb(148, 186, 148);
        display: flex;
        justify-content: center;
    }
    .console{
        margin: 0 auto;
    }
    .info-list li{
        margin: 10px;
    }
</style>