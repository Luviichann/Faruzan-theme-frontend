<template>
    <li class="item">
        <div class="item">
            <ul>
                <li><p>来源：{{msg.address}}</p></li>
                <li><p>时间：{{formatTimestamp}}</p></li>
                <li><p>内容：{{msg.content}}</p></li>
            </ul>
            <div>
                <button @click="examine('no')">删除</button>
                <button @click="examine('yes')">通过</button>
            </div>
        </div>
    </li>
</template>

<script>
    import axios from '../../axiosToken';
    import {API_HOST} from '../../config'
    export default {
        name:'CtrlLeaveMsg',
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
        },
        methods: {
            examine(op){
                const r = window.confirm("确定你的操作？")
                if (r === false){
                    return
                }
                axios.post(`${API_HOST}/admin/examineLeaveMessage`,{
                    id:this.msg.id,
                    examine:op,
                })
                .then(res=>{
                    console.log(res.data);
                })
                .catch(err=>{
                    console.error(err);
                })
                location.reload()
            }
        },
    }
</script>

<style scoped>
    div.item{
        padding: 6px;
        margin: 10px;
        display: flex;
        background-color: rgb(42, 114, 165);
        border-radius: 8px;
        justify-content: space-between;
    }
    div.item li{
        display: flex;
    }
    button{
        border: none;
        margin: 6px;
        color: rgb(200,219,226);
        background-color: rgb(15,18,42);
        padding: 6px;
        border-radius: 6px;
    }
    button:hover{
        background-color: rgb(83,129,221);
    }
</style>