<template>
    <el-container>
        <el-main>
            <ArticleContent v-for="(item, index) in indexArtList" :item="item" :key="item.art_id"></ArticleContent>
            <el-pagination
                    layout="prev, pager, next"
                    :page-size="pageItems"
                    :total="indexTotalitems"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="indexCurrentPage"
            >
            </el-pagination>
        </el-main>
        <el-aside width="240px">
            <Aside :categories-list="categoriesList"></Aside>
        </el-aside>
    </el-container>

</template>

<script>
    let Aside= () => import('components/Aside')
    let ArticleContent= () => import('components/ArticleContent')
    export default {
        name: 'index',
        data() {
            return {
            }
        },
        metaInfo () {
            return {

                title: "思雨前端博客",
                meta: [
                    { charset: 'utf-8' },
                    { name: 'description', content: "专注于WEB前端开发,分享前端开发和前端技术" },
                    { name: 'keywords', content: "WEB前端开发,前端博客,前端技术开发" }
                ]
            }
        },
        methods: {
            handleSizeChange(val) {
                this.$store.dispatch('fetchIndexData', {
                    indexCurrentPage: this.$store.state.indexCurrentPage,
                    pageItems: val
                })
            },
            handleCurrentChange(val) {
                this.$store.dispatch('fetchIndexData', {
                    indexCurrentPage: val,
                    pageItems: this.$store.state.pageItems
                })
                //    todo 有的时候会失效
                // this.$router.push( '/page/'+val)
            },
        },
        asyncData({store, route}) {
            // 获取首页列表
            return store.dispatch('fetchIndexData', {
                indexCurrentPage: route.params.pageId || 1,
                pageItems: store.state.pageItems
            })
        },
        computed: {
            indexArtList() {
                return this.$store.state.indexArtList //列数据
            },
            indexTotalitems() {
                return this.$store.state.indexTotalitems //总条数
            },
            pageItems() {
                return this.$store.state.pageItems //每页显示多少条
            },
            categoriesList() {
                return this.$store.state.categoriesList //每页显示多少条
            },
            indexCurrentPage: {     //当前页
                get: function () {
                    return this.$store.state.indexCurrentPage
                },
                set: function () {
                }
            },
        },
        components: {
            ArticleContent,
            Aside
        },
        mounted: function () {
        },
        watch: {
            '$route' (to, from) {
                // 对路由变化作出响应...

                // var pageId =parseInt( to.params.pageId);
                // console.log("router变化为了",pageId)
                // this.$store.state.indexCurrentPage =pageId;
                // this.$store.dispatch('fetchIndexData', {
                //     indexCurrentPage: pageId,
                //     pageItems: this.$store.state.pageItems
                // })
            }
        }
    }
</script>

<style scoped lang="scss">



</style>