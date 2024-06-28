<template>
    <li class="leave-msg">
        <!-- 邮箱 浏览器 ip -->
        <!-- {{msg}} -->
        <div class="visitor-info">
            <span class="mail">{{msg.email}}</span>
            <span class="address">{{msg.address}}</span>
            <span class="browser">{{msg.browser}}</span>
            <span class="OS">{{msg.os}}</span>
            <span class="time">{{formatTimestamp}}</span>
        </div>
        <div class="comment">
            <p>{{msg.content}}</p>
        </div>
    </li>
</template>

<script>
    export default {
        name:'LeaveMessage',
        props:['msg'],
        computed:{
            formatTimestamp:function () {
                // 时间精确到秒就够了。
                const date = new Date(this.msg.time*1000);
                // 获取各个时间部分
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始，需要加1，并且补齐两位
                const day = String(date.getDate()).padStart(2, '0');
                const hours = String(date.getHours()).padStart(2, '0');
                const minutes = String(date.getMinutes()).padStart(2, '0');
                const seconds = String(date.getSeconds()).padStart(2, '0');
                // 拼接成目标格式
                const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

                return formattedDate;
            }
        }
    }
</script>

<style scoped>
    li.leave-msg{
        background-color: rgba(44,106,125,0.5);
        margin: 20px 5px;
        border-radius: 8px;
        padding: 10px;
    }
    .visitor-info{
        padding: 10px;
        background-color: rgba(243,248,253, 0.5);
        color: rgb(95,87,91);
    }
    .visitor-info span{
        margin: 0 10px;
    }
    .comment{
        padding: 10px;
        background-color: rgba(255,239,226,0.95);
        color: rgb(56,103,135);
    }
</style>