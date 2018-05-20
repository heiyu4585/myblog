import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
let index= () => import('@/view/index') // 改为异步组件
let category= () => import('@/view/category')
let post= () => import('@/view/article')
let puppetry = () => import('@/view/puppetry')
Vue.use(Meta)
Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history', // 注意这里也是为history模式
    routes: [
        {
            path: '/',
            name: 'index',
            component: index,
        },
        {
            path: '/page/:pageId',
            name: 'page',
            component: index,
            meta: {requiresAuth: true}
        },
        {
            path: '/post/:id',
            name: 'post',
            component: post,
        },
        {
            path: '/puppetry',
            name: 'puppetry',
            component: puppetry,
        },
        // {
        //     path: '/category',
        //     name: 'category',
        //     component: category,
        // },
        {
            path: '/category/:categoryId',
            name: 'categoryWithId',
            component: category,
        },
        {
            path: '/category/:categoryId/page/:pageId',
            name: 'categoryWithIdPageId',
            component: category,
        },
    ]
  })
}
