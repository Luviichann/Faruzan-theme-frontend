<template>
    <div>
        <h2>文件上传</h2>
        <form @submit.prevent="uploadFile">
            <input type="file" @change="handleFileUpload" class="pointer"/>
            <button type="submit">上传</button>
        </form>
    </div>
</template>

<script>
    import axios from "../../axiosToken";
    import {API_HOST} from "../../config";
    // import fs from 'fs'
    export default {
        name:'UploadImage',
        props:['title','text','url','avatar','category'],
        data() {
            return {
                file: null,
            };
        },
        methods: {
            handleFileUpload(event) {
                this.file = event.target.files[0];
            },
            async uploadFile() {
                if (!this.file) {
                    alert("请先选择一个文件！");
                    return;
                }

                const formData = new FormData();
                formData.append('file', this.file);
                formData.append('title',this.title)
                formData.append('text',this.text)
                formData.append('url',this.url)
                formData.append('avatar',this.avatar)
                formData.append('category',this.category)
                
                await axios.post(`${API_HOST}/admin/uploadBlogInfo`,
                formData,
                {
                    headers: {
                    "Content-Type": "multipart/form-data",
                    },
                }
                );
                alert('上传成功')
                location.reload();
            
            },
        },
    };
</script>

<style scoped>
/* 添加一些样式使组件更美观 */
    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 8px;
    }
    button{
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
