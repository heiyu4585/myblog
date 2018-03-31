<template>
    <el-container id="app">
        <el-header>
            <Header></Header>
        </el-header>
        <Nav></Nav>
            <router-view></router-view>
        <el-footer>
            <Foot></Foot>
        </el-footer>
    </el-container>
</template>

<script>
    import Header from 'components/Header';
    import Nav from 'components/Nav';
    import Foot from 'components/Foot';

    export default {
        // store,
        name: 'App',
        computed: {},
        mounted: function () {
        },
        components: {
            Header,
            Nav,
            Foot
        },
    }
</script>

<style lang="scss">
    /*初始化*/
    body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select{margin:0;padding:0}
    body{font:12px"宋体","Arial Narrow",HELVETICA;background:#fff;}
    a{color:#2d374b;text-decoration:none}
    a:hover{color:#cd0200;text-decoration:underline}
    em{font-style:normal}
    li{list-style:none}
    img{border:0;vertical-align:middle}
    table{border-collapse:collapse;border-spacing:0}
    p{word-wrap:break-word}
    /*清除浮动*/
    .clearfix:after{
        content: "020";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }

    .clearfix {
        /* 触发 hasLayout */
        zoom: 1;
    }

    /*INDEX*/
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
