import Vue from 'vue'
import Router from 'vue-router'

let index= () => import('@/view/index') // 改为异步组件
let category= () => import('@/view/category') // 改为异步组件
let post= () => import('@/view/article') // 改为异步组件

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
            name: 'index',
            component: index,
            meta: {requiresAuth: true}
        },
        {
            path: '/post/:id',
            name: 'post',
            component: post,
        },
        {
            path: '/category',
            name: 'category',
            component: category,
        },
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
