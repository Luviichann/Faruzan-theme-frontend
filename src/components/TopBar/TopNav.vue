<template>
    <div class="top-nav-container clearfix">
        <ul class="leftfix clearfix top-nav">
            <li><router-link to="/index"><div class="svg"><HomeSvg/></div><span>首页</span></router-link></li>
            <li><a href="javascript:;"><div class="svg"><CategorySvg/></div><span>分类</span></a></li>
            <li><a href="https://luviichann.top" target="_blank"><div class="svg"><BlogSvg/></div><span>博客</span></a></li>
            <!-- <li><a href="javascript:;"><span>留言板</span></a></li> -->
            <li @mouseenter="showCollect()" @mouseleave="hideCollect()"><a href="javascript:;"><div class="svg"><CollectSvg/></div><span>收藏</span></a></li>
            <transition name="fade">
                <div class="collect" v-if="showCollectDiv">
                    <p>
                        按下"Ctrl+D"<br>可收藏本站。
                    </p>
                </div>
            </transition>
            <li><router-link to="/subscribeto"><div class="svg"><SubscribeSvg/></div><span>订阅</span></router-link></li>
            <li><router-link to="/joinus"><div class="svg"><JoinSvg/></div><span>加入</span></router-link></li>
            <li><a href="javascript:;"><div class="svg"><AboutSvg/></div><span>关于</span></a></li>
            <li><router-link to="/messageboard"><div class="svg"><MessageSvg/></div><span>留言板</span></router-link></li>
        </ul>
    </div>
</template>

<script>
    import HomeSvg from '../svg/HomeSvg.vue';
    import CategorySvg from '../svg/CategorySvg.vue';
    import BlogSvg from '../svg/BlogSvg.vue';
    import CollectSvg from '../svg/CollectSvg.vue';
    import SubscribeSvg from '../svg/SubscribeSvg.vue';
    import JoinSvg from '../svg/JoinSvg.vue';
    import AboutSvg from '../svg/AboutSvg.vue';
    import MessageSvg from '../svg/MessageSvg.vue';
    export default {
        name:'TopNav',
        components:{HomeSvg,CategorySvg,BlogSvg,CollectSvg,SubscribeSvg,JoinSvg,AboutSvg,MessageSvg},
        data() {
            return {
                showCollectDiv:false,
                showSubscribeDiv:true
            }
        },
        methods: {
            showCollect(){
                this.showCollectDiv = true
            },
            hideCollect(){
                clearTimeout(this.timer)
                this.showCollectDiv = false
            }
        },
    }
</script>

<style scroped>
    .top-nav-container{
        background-color: #00000088;
        padding: 4px;
        border-radius: 6px;
    }
    .top-nav li{
        float: left;
        font-size: 20px;
        margin: 0 14px;
        text-align: center;
        line-height: 54px;
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
    .collect{
        height: 100px;
        width: 140px;
        background-color: rgba(0,0,0,0.4);
        position: absolute;
        margin-left: 233px;
        margin-top: 30px;
        border-radius: 10px;
        padding: 10px;
        text-align: center;
        color: #ffffff;
    }
    .collect p{
        margin-top: 20px;
        line-height: 24px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.4s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
        opacity: 0;
    }
</style>