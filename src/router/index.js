import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

// static components
// import fail from './../pages/fail'
// import notfound from './../pages/notfound'

// dynamic load components
// const load = (path) => {

//     try {

//         return () => import(`./../${path}`)

//     } catch (error) {

//         console.log(error)

//         return fail

//     }

// }

const router = new Router({
    mode: 'hash',
    // base: '',
    linkActiveClass: 'router-link-active',
    linkExactActiveClass: 'router-link-exact-active',
    scrollBehavior: () => { y: 0 },
    // fallback: '',
    routes: routes
    // routes: [
    //     {
    //         path: '/',
    //         component: load('pages/home')
    //     },
    //     {
    //         path: '/notfound',
    //         component: notfound
    //     },
    //     {
    //         path: '*',
    //         redirect: '/notfound'
    //     }
    // ]
})

export default router
