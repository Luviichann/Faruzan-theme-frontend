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

export default new VueRouter({
    routes:[
        {
            path:'',
            component:Guide,
        },
        {
            path:'/admin',
            component:Admin,
            children:[
                {
                    path:'login',
                    component:AdminLogin
                },
                {
                    path:'',
                    component:RealAdmin
                }
            ]
        },
        {
            path:'/',
            component:Content,
            children:[
                {
                    path:'index',
                    component:BlogsNav
                },
                {
                    path:'messageboard',
                    component:MessageBoard
                },
                {
                    path:'backtoindex',
                    component:BackToIndex
                },
                {
                    path:'subscribeto',
                    component:SubscribeTo
                },
            ]
        },
        
    ]
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
