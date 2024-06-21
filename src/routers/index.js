import VueRouter from 'vue-router'
import BlogsNav from '../components/BlogsNav'
// import Home from '../components/Home'
export default new VueRouter({
    routes:[
        {
            path:'/index',
            component:BlogsNav
        },
        // {
        //     path:'/home',
        //     component:Home
        // }
    ]
})
