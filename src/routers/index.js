import VueRouter from 'vue-router'
import BlogsNav from '../components/BlogsNav'
import MessageBoard from '../components/MessageBoard'
import BackToIndex from '../components/BackToIndex'
import SubscribeTo from '../components/SubscribeTo'
import Content from '../Content'
import Guide from '../Guide'
import Admin from '../Admin'
import AdminLogin from '../components/AdminLogin'
import RealAdmin from '../components/RealAdmin'
import JoinUs from '../components/JoinUs'

const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'',
            component:Guide,
            meta: {
                title: 'Faruzan-Bookmark'
            }
        },
        {
            path:'/admin',
            component:Admin,
            children:[
                {
                    path:'login',
                    component:AdminLogin,
                    meta: {
                        title: 'Faruzan-Bookmark-认证身份'
                    }
                },
                {
                    path:'',
                    component:RealAdmin,
                    meta: {
                        title: 'Faruzan-Bookmark-管理'
                    }
                }
            ]
        },
        {
            path:'/',
            component:Content,
            children:[
                {
                    path:'index',
                    component:BlogsNav,
                    meta: {
                        title: 'Faruzan-Bookmark-首页'
                    }
                },
                {
                    path:'messageboard',
                    component:MessageBoard,
                    meta: {
                        title: 'Faruzan-Bookmark-留言板'
                    }
                },
                {
                    path:'backtoindex',
                    component:BackToIndex,
                    meta: {
                        title: 'Faruzan-Bookmark'
                    }
                },
                {
                    path:'subscribeto',
                    component:SubscribeTo,
                    meta: {
                        title: 'Faruzan-Bookmark-订阅'
                    }
                },
                {
                    path:'joinus',
                    component:JoinUs,
                    meta: {
                        title: 'Faruzan-Bookmark-加入'
                    }
                }
            ]
        },
        
    ]
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
      document.title = to.meta.title
    }
    next()
})

export default router
