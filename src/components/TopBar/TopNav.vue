<template>
    <ul class="leftfix clearfix top-nav">
        <li><a href="javascript:;"><div class="svg"><HomeSvg/></div><span>首页</span></a></li>
        <li><a href="javascript:;"><div class="svg"><CategorySvg/></div><span>分类</span></a></li>
        <li><a href="javascript:;"><div class="svg"><BlogSvg/></div><span>博客</span></a></li>
        <!-- <li><a href="javascript:;"><span>留言板</span></a></li> -->
        <li><a href="javascript:;"><div class="svg"><CollectSvg/></div><span>收藏</span></a></li>
        <li><a href="javascript:;"><div class="svg"><SubscribeSvg/></div><span>订阅</span></a></li>
        <li><a href="javascript:;"><div class="svg"><JoinSvg/></div><span>申请加入</span></a></li>
    </ul>
</template>

<script>
    import HomeSvg from '../svg/HomeSvg.vue';
    import CategorySvg from '../svg/CategorySvg.vue';
    import BlogSvg from '../svg/BlogSvg.vue';
    import CollectSvg from '../svg/CollectSvg.vue';
    import SubscribeSvg from '../svg/SubscribeSvg.vue';
    import JoinSvg from '../svg/JoinSvg.vue';
    export default {
        name:'TopNav',
        components:{HomeSvg,CategorySvg,BlogSvg,CollectSvg,SubscribeSvg,JoinSvg}
    }
</script>

<style scroped>
    .top-nav li{
        float: left;
        font-size: 20px;
        margin: 0 14px;
        text-align: center;
        line-height: 100%;
        height: 26px;
    }
    .top-nav li a{
        /* color: rgb(93,135,233); */
        /* color: rgb(121,221,161); */
        color: rgb(250,240,230);
    }
    div.svg{
        /* display: inline; */
        float: left;
        margin-top: 1px;
    }
</style>