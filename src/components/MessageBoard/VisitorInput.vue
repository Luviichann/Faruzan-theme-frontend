<template>
    <div class="visitor-input">
        <div class="wrapper">
            <!-- <i class="avatar"></i> -->
            <textarea ref="tx" placeholder="发一条友善的留言" rows="2" maxlength="300" 
            @input="$refs.total.innerHTML = `${$refs.tx.value.length}/300字`"
            @focus="$refs.total.style.opacity = 1"
            @blur="$refs.total.style.opacity = 0"
            ></textarea>
            <button class="pointer" @click="postMessage">发布</button>
        </div>
        <div class="wrapper">
            <span class="total" ref="total">0/300字</span>
        </div>
    </div>
    
</template>

<script>
export default {
    name:'VisitorInput',
    methods:{
        postMessage(){
            this.$bus.$emit('judgeMailCode',this.$refs.tx.value)
        }
    }
}
</script>

<style scoped>
    .visitor-input{
        margin-top: 20px;
    }
    .wrapper {
        min-width: 400px;
        max-width: 800px;
        display: flex;
        justify-content: flex-end;
    }

    .wrapper textarea {
        outline: none;
        border-color: transparent;
        resize: none;
        background: #f5f5f5;
        border-radius: 4px;
        flex: 1;
        padding: 10px;
        transition: all 0.5s;
        height: 50px;
    }

    .wrapper textarea:focus {
        border-color: #e4e4e4;
        background: #fff;
        height: 80px;
    }

    .wrapper button {
        background: rgba(85,199,166,0.6);
        color: #fff;
        border: none;
        border-radius: 4px;
        margin-left: 10px;
        width: 70px;
    }
    .wrapper button:hover{
        background: rgb(85,199,166);
    }

    .wrapper .total {
        margin-right: 80px;
        color: #999;
        margin-top: 5px;
        opacity: 0;
        transition: all 0.5s;
    }

    .list {
        min-width: 400px;
        max-width: 800px;
        display: flex;
    }

    .list .item {
        width: 100%;
        display: flex;
    }

    .list .item .info {
        flex: 1;
        border-bottom: 1px dashed #e4e4e4;
        padding-bottom: 10px;
    }

    .list .item p {
        margin: 0;
    }

    .list .item .name {
        color: #FB7299;
        font-size: 14px;
        font-weight: bold;
    }

    .list .item .text {
        color: #333;
        padding: 10px 0;
    }

    .list .item .time {
        color: #999;
        font-size: 12px;
    }
</style>