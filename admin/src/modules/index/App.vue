<template>
    <el-container id="app">
        <el-header>
            <Header></Header>
        </el-header>
        <Nav></Nav>
        <el-container>
            <router-view></router-view>
            <el-aside width="240px">
                <Aside></Aside>
            </el-aside>
        </el-container>
        <el-footer>
            <Foot></Foot>
        </el-footer>
    </el-container>
</template>

<script>
    import 'common/common.scss';
    import Header from './components/Header';
    import Nav from './components/Nav';
    import Aside from './components/Aside';
    import Foot from './components/Foot';
    import Article from './components/Article';
    import axios from 'axios';

    export default {
        name: 'app',
        data() {
            return {
                message: 'Welcome to Your Vue.js App',
                artList: [],
                total_items:0,
                currentPage: 1, //当前页
                page_items:8   //每页显示的数目
            }
        },
        methods: {
        },
        components: {
            Header,
            Nav,
            Aside,
            Foot,
            Article
        },
        mounted: function () {
        },
    }
</script>

<style lang="scss">
    .el-aside, .el-main {
        overflow: inherit;
    }

    #app {
        max-width: 1080px;
        margin: 0 auto;
    }

    .content {
        position: relative;
        background: #fff;
        margin: 0 0 10px 0;
        padding: 10px 20px;
        border: 1px solid #ccc;
    }

    .content:hover {
        position: relative;
        background: #fff;
        color: #000;
        margin: 0 0 10px 0;
        padding: 10px 20px;
        border: 1px solid #04a4cc;
        transition: all 0.5s ease-in 0s;
    }
</style>
