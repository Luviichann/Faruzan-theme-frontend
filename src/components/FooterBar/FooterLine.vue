<template>
    <div class="dotted-line-container">
        <div class="dotted-line"></div>
    </div>
</template>

<script>
    export default {
        name:'FooterLine'
    }
</script>

<style scoped>
    .dotted-line-container {
        overflow: hidden;
        width: 100%;
        height: 100px;
        white-space: nowrap; /* 防止内容换行 */
    }

    .dotted-line {
        display: inline-block;
        background-image: linear-gradient(to right, rgb(143,203,211) 50%, transparent 0%);
        background-size: 200px 1px; /* 控制虚线的大小 */
        width: 200%; /* 让虚线的宽度足够大，确保可以无限滚动 */
        height: 10px; /* 控制虚线的高度 */
        /* transition: background-image 0.5s ease; */
        animation: scroll 30s linear infinite;/* 定义动画 */
    }

    @keyframes scroll {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-50%);
        }
    }

    /* 颜色渐变动画 */
    /* @keyframes color-change {
        0% {
            background-image: linear-gradient(to right, red 50%, transparent 0%);
        }
        50% {
            background-image: linear-gradient(to right, blue 50%, transparent 0%);
        }
        100% {
            background-image: linear-gradient(to right, red 50%, transparent 0%);
        }
    } */
</style>