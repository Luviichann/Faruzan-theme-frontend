<template>
    <div class="admin-blogs">
        博客
        <div class="console">
            <ul class="info-list">
                <li><span>标题：</span><input type="text" v-model="title"></li>
                <li><span>简介：</span><input type="text" v-model="intro"></li>
                <li><span>链接：</span><input type="text" v-model="url"></li>
                <li><span>头像：</span><input type="text" v-model="avatar"></li>
            </ul>
            <div class="sub">
                <button @click="getWebp">获取网站图片</button>
                <button>提交</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'AdminBlogs',
        data() {
            return {
                title:'',
                intro:'',
                url:'',
                avatar:''
            }
        },
        methods:{
            async getWebp(){
                    
                
            }
        }
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
    .sub button{
        margin: 10px;
        border: none;
        width: 100px;
        border-radius: 4px;
        background-color: antiquewhite;
    }
    button:hover{
        background-color: aquamarine;
    }
</style>