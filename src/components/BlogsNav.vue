<template>
    <div class="container">
        <!-- <div class="content"> -->
        <ul class="blog-list clearfix">
            <BlogInfo v-for="blog in blogsInfo" :key="blog.id" :blog="blog"/>
        </ul>
        <!-- </div> -->
    </div>
</template>

<script>
    import BlogInfo from './BlogsNav/BlogInfo.vue';
    export default {
        name:'BlogsNav',
        components:{BlogInfo},
        data() {
            return {
                blogsInfo:[
                    {id:1,avatar:'http://localhost:8888/imgre/frz.png',title:'尝试一下',
                    text:'虽然可以一定程度上阻止普通用户打开开发者工具，但对于有经验的开发者来说，绕过这些检测方法并不难。',
                    webpct:'http://localhost:8888/imgre/w1.png'},
                    {id:2,avatar:'http://localhost:8888/imgre/xinhai.jpg',title:'标准语法',
                    text:'一般是因为服务端主动拒绝连接连接造成，请先检查推流服务端或直播间是否已开启直播并复制正确的推流码并在配置文件中打开断线重连功能。在服务端断开连接后尝试进',
                    webpct:'http://localhost:8888/imgre/w2.png'},
                    {id:3,avatar:'http://localhost:8888/imgre/m7.jpeg',title:'自动化助手',
                    text:'如果开发者工具被设置为在一个单独的窗口中打开，那么通过监听窗口大小变化的方法就无法检测到开发者工具的打开。',
                    webpct:'http://localhost:8888/imgre/w3.png'},
                    {id:4,avatar:'http://localhost:8888/imgre/m7.jpeg',title:'自动化助手',
                    text:'如果开发者工具被设置为在一个单独的窗口中打开，那么通过监听窗口大小变化的方法就无法检测到开发者工具的打开。',
                    webpct:'http://localhost:8888/imgre/w3.png'},
                    {id:5,avatar:'http://localhost:8888/imgre/frz.png',title:'尝试一下',
                    text:'虽然可以一定程度上阻止普通用户打开开发者工具，但对于有经验的开发者来说，绕过这些检测方法并不难。',
                    webpct:'http://localhost:8888/imgre/w1.png'},
                    {id:6,avatar:'http://localhost:8888/imgre/xinhai.jpg',title:'标准语法',
                    text:'一般是因为服务端主动拒绝连接连接造成，请先检查推流服务端或直播间是否已开启直播并复制正确的推流码并在配置文件中打开断线重连功能。在服务端断开连接后尝试进',
                    webpct:'http://localhost:8888/imgre/w2.png'},
                    {id:7,avatar:'http://localhost:8888/imgre/m7.jpeg',title:'自动化助手',
                    text:'如果开发者工具被设置为在一个单独的窗口中打开，那么通过监听窗口大小变化的方法就无法检测到开发者工具的打开。',
                    webpct:'http://localhost:8888/imgre/w3.png'},
                    {id:8,avatar:'http://localhost:8888/imgre/m7.jpeg',title:'自动化助手',
                    text:'如果开发者工具被设置为在一个单独的窗口中打开，那么通过监听窗口大小变化的方法就无法检测到开发者工具的打开。',
                    webpct:'http://localhost:8888/imgre/w3.png'},
                    {id:9,avatar:'http://localhost:8888/imgre/frz.png',title:'尝试一下',
                    text:'虽然可以一定程度上阻止普通用户打开开发者工具，但对于有经验的开发者来说，绕过这些检测方法并不难。',
                    webpct:'http://localhost:8888/imgre/w1.png'},
                    {id:10,avatar:'http://localhost:8888/imgre/xinhai.jpg',title:'标准语法',
                    text:'一般是因为服务端主动拒绝连接连接造成，请先检查推流服务端或直播间是否已开启直播并复制正确的推流码并在配置文件中打开断线重连功能。在服务端断开连接后尝试进',
                    webpct:'http://localhost:8888/imgre/w2.png'},
                    {id:11,avatar:'http://localhost:8888/imgre/m7.jpeg',title:'自动化助手',
                    text:'如果开发者工具被设置为在一个单独的窗口中打开，那么通过监听窗口大小变化的方法就无法检测到开发者工具的打开。',
                    webpct:'http://localhost:8888/imgre/w3.png'},
                    {id:12,avatar:'http://localhost:8888/imgre/m7.jpeg',title:'自动化助手',
                    text:'如果开发者工具被设置为在一个单独的窗口中打开，那么通过监听窗口大小变化的方法就无法检测到开发者工具的打开。',
                    webpct:'http://localhost:8888/imgre/w3.png'},
                    {id:13,avatar:'http://localhost:8888/imgre/frz.png',title:'尝试一下',
                    text:'虽然可以一定程度上阻止普通用户打开开发者工具，但对于有经验的开发者来说，绕过这些检测方法并不难。',
                    webpct:'http://localhost:8888/imgre/w1.png'},
                    {id:14,avatar:'http://localhost:8888/imgre/xinhai.jpg',title:'标准语法',
                    text:'一般是因为服务端主动拒绝连接连接造成，请先检查推流服务端或直播间是否已开启直播并复制正确的推流码并在配置文件中打开断线重连功能。在服务端断开连接后尝试进',
                    webpct:'http://localhost:8888/imgre/w2.png'},
                    {id:15,avatar:'http://localhost:8888/imgre/m7.jpeg',title:'自动化助手',
                    text:'如果开发者工具被设置为在一个单独的窗口中打开，那么通过监听窗口大小变化的方法就无法检测到开发者工具的打开。',
                    webpct:'http://localhost:8888/imgre/w3.png'},
                    {id:16,avatar:'http://localhost:8888/imgre/m7.jpeg',title:'自动化助手',
                    text:'如果开发者工具被设置为在一个单独的窗口中打开，那么通过监听窗口大小变化的方法就无法检测到开发者工具的打开。',
                    webpct:'http://localhost:8888/imgre/w3.png'},
                    // {id:17,avatar:'http://localhost:8888/imgre/frz.png',title:'尝试一下',
                    // text:'虽然可以一定程度上阻止普通用户打开开发者工具，但对于有经验的开发者来说，绕过这些检测方法并不难。',
                    // webpct:'http://localhost:8888/imgre/w1.png'},
                    // {id:18,avatar:'http://localhost:8888/imgre/xinhai.jpg',title:'标准语法',
                    // text:'一般是因为服务端主动拒绝连接连接造成，请先检查推流服务端或直播间是否已开启直播并复制正确的推流码并在配置文件中打开断线重连功能。在服务端断开连接后尝试进',
                    // webpct:'http://localhost:8888/imgre/w2.png'},
                    // {id:19,avatar:'http://localhost:8888/imgre/m7.jpeg',title:'自动化助手',
                    // text:'如果开发者工具被设置为在一个单独的窗口中打开，那么通过监听窗口大小变化的方法就无法检测到开发者工具的打开。',
                    // webpct:'http://localhost:8888/imgre/w3.png'},
                    // {id:20,avatar:'http://localhost:8888/imgre/m7.jpeg',title:'自动化助手',
                    // text:'如果开发者工具被设置为在一个单独的窗口中打开，那么通过监听窗口大小变化的方法就无法检测到开发者工具的打开。',
                    // webpct:'http://localhost:8888/imgre/w3.png'},
                    // {id:21,avatar:'http://localhost:8888/imgre/frz.png',title:'尝试一下',
                    // text:'虽然可以一定程度上阻止普通用户打开开发者工具，但对于有经验的开发者来说，绕过这些检测方法并不难。',
                    // webpct:'http://localhost:8888/imgre/w1.png'},
                    // {id:22,avatar:'http://localhost:8888/imgre/xinhai.jpg',title:'标准语法',
                    // text:'一般是因为服务端主动拒绝连接连接造成，请先检查推流服务端或直播间是否已开启直播并复制正确的推流码并在配置文件中打开断线重连功能。在服务端断开连接后尝试进',
                    // webpct:'http://localhost:8888/imgre/w2.png'},
                    // {id:23,avatar:'http://localhost:8888/imgre/m7.jpeg',title:'自动化助手',
                    // text:'如果开发者工具被设置为在一个单独的窗口中打开，那么通过监听窗口大小变化的方法就无法检测到开发者工具的打开。',
                    // webpct:'http://localhost:8888/imgre/w3.png'},
                    // {id:24,avatar:'http://localhost:8888/imgre/m7.jpeg',title:'自动化助手',
                    // text:'如果开发者工具被设置为在一个单独的窗口中打开，那么通过监听窗口大小变化的方法就无法检测到开发者工具的打开。',
                    // webpct:'http://localhost:8888/imgre/w3.png'}
                ]
            }
        },
    }
</script>

<style scoped>
    .container{
        width: 1186px;
        margin: 0 auto;
        margin-top: 140px;
        padding: 4px;
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 10px;
        margin-bottom: 100px;
    }
    ul{
        padding: 1px;
        margin: 0 auto;
    }
</style>