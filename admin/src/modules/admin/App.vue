<template>
    <el-container id="app">
        <el-aside width="200px">
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                <el-radio-button :label="false">展开</el-radio-button>
                <el-radio-button :label="true">收起</el-radio-button>
            </el-radio-group>
            <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">文章</span>
                    </template>
                    <el-menu-item-group>
                        <span slot="title">文章</span>
                        <el-menu-item index="1-1">
                            <a href="/admin#/article/add">新增文章</a>
                        </el-menu-item>
                        <el-menu-item index="1-2">
                            <a href="/admin#/article/list">文章列表</a>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>

        </el-aside>
        <el-container>
            <p>{{count}}
                <button @click="inc">+</button>
                <button @click="dec">-</button>
            </p>
            <p>页数改变{{currentPage}}
                <button @click="addPage">+</button>
                <button @click="subductionPage">-</button>
            </p>
            <el-header>Header</el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</template>

<script>
    import 'common/common.scss';
    import store from './store';
    export default {
        store,
        data() {
            return {
                isCollapse: false
            };
        },
        computed: {
            count () {
                return store.state.count
            },
            currentPage(){
                return store.state.currentPage
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            inc () {
                store.commit('inc')
            },
            dec () {
                store.commit('dec')
            },
            subductionPage(){
                store.commit('subductionPage')
            },
            addPage(){
                store.commit('addPage')
            },
        }
    }
</script>

<style lang="scss">
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        /*line-height: 60px;*/
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    /*.el-container:nth-child(5) .el-aside,*/
    /*.el-container:nth-child(6) .el-aside {*/
        /*line-height: 260px;*/
    /*}*/

    /*.el-container:nth-child(7) .el-aside {*/
        /*line-height: 320px;*/
    /*}*/

    /*导航*/
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>
