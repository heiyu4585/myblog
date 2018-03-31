<template>
    <!--分类栏目-->
    <div id="sidebar" class="widget-area">
        <!--<aside id="search-2" class="widget widget_search">-->
            <!--<div id="searchbar">-->
                <!--<form method="get" id="searchform" action="http://www.siyuweb.com/">-->
                    <!--<div><input type="text" value="" name="s" id="s" placeholder="输入搜索内容" required="required"> <input-->
                            <!--type="submit" id="searchsubmit" value="搜索"></div>-->
                <!--</form>-->
            <!--</div>-->
            <!--<div class="clear"></div>-->
        <!--</aside>-->
        <aside id="categories-3" class="widget widget_categories clearfix">
            <h3 class="widget-title"><p><i class="icon-st"></i></p>分类目录</h3>
            <ul>

                <li
                        class="cat-item"
                        v-for="nav in categoriesList"
                        :key="nav.id"
                >
                    <!--https://segmentfault.com/q/1010000009175454/a-1020000009175738-->
                    <router-link :to="{ name: 'categoryWithId', params: { categoryId: nav.category_id}}">{{ nav.category_name }}</router-link>
                </li>
            </ul>
            <div class="clear"></div>
        </aside>
    </div>
</template>

<script type="text/ecmascript-6">
    import axios from 'axios';
    export default {
        name: 'rightSide',
        data () {
            return {
            }
        },
        props: ['categoriesList'],
        methods: {
        },
        components: {
        },
        // todo 对于嵌套的组件是否可以ssr
        // asyncData({store, route}) {
        //     console.log("这儿执行了!~!!!!")
        //     // 获取首页列表
        //     return store.dispatch('getCategoriesList', {
        //         id: route.params.id || 1,
        //     })
        // },
        // computed: {
        //     categoriesList() {
        //         return this.$store.state.categoriesList //每页显示多少条
        //     },
        // },
        mounted: function () {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss">

    #sidebar {
        padding-top: 20px;
        overflow: hidden;
        float: right;
    }
    #sidebar h3 {
        height: 35px;
        line-height: 35px;
        border-bottom: 1px solid #ccc;
    }

    .widget {
        background: #fff;
        margin: 0 0 10px 0;
        border: 1px solid #ccc;
    }


    /*分类栏目*/
    .widget ul, #sidebar #searchform, #calendar_wrap, .tagcloud {
        padding: 5px 10px 10px 10px;
    }

    .widget_categories, .widget_archive, .widget_links {
        padding: 0 0 10px 0;
    }
    .widget-title p {
        float: left;
        width: 34px;
        height: 34px;
        text-align: center;
        margin: 0 8px 0 0;
        padding: 1px 0;
        border-right: 1px solid #ccc;
    }
    .icon-st {
        font-size: 24px;
        color: #888;
        line-height: 35px;
    }
    .icon-st:before {
        content: "\e609";
    }

    .widget ul li {
        width: 99%;
        line-height: 180%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .widget_categories li, .widget_archive li, .widget_links li {
        float: left;
        width: 49.5% !important;
        text-align: center;
        margin: 8px -1px 0 0;
        border: 1px solid #ccc;
    }

    .widget_categories a, .widget_archive a, .widget_links a {
        padding: 0 20px;
    }

    /*搜索框*/
    .widget #searchbar {
        margin: 5px 0;
    }
    #sidebar #searchform, #calendar_wrap, .tagcloud {
        padding: 5px 10px 10px 10px;
    }

    #s, .swap_value {
        width: 65%;
        height: 31px;
        padding: 0 5px;
        border: 1px solid #ccc;
        -webkit-appearance: none;
    }

    #searchform #searchsubmit, #searchsubmit {
        background: #04a4cc;
        width: 60px;
        height: 31px;
        color: #fff;
        margin: 1px 0 0 0;
        border: none;
        vertical-align: top;
        -webkit-appearance: none;
    }

    .li-icon {
        background: #ccc;
        font-size: 12px;
        color: #fff;
        line-height: 180%;
        margin: 0 5px 0 0;
        padding: 0 5px;
        border-radius: 2px;
    }
    /*热门文章*/
    .li-icon-1, .li-icon-2, .li-icon-3 {
        background: #e50000;
    }


    /*foot*/
    .site-info {
        text-align: center;
        padding: 15px 0;
    }

</style>
