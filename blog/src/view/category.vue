<template>
    <el-container>
        <el-main>
            <ArticleContent v-for="(item, index) in catArtList" :item="item" :key="item.art_id"></ArticleContent>
            <el-pagination
                    layout="prev, pager, next"
                    :page-size="pageItems"
                    :total="artTotalitems"
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
        methods: {
            handleSizeChange(val) {
                this.$store.dispatch('fetchIndexData', {
                    catCurrentPage: this.$store.state.catCurrentPage,
                    pageItems: val
                })
            },
            handleCurrentChange(val) {
                // this.currentPage =val;
                // console.log(`当前页: ${val}`);
                // this.$store.state.indexCurrentPage =val;
                // this.$store.dispatch('fetchIndexData', {
                //     indexCurrentPage: val,
                //     pageItems: this.$store.state.pageItems
                // })
                //    todo 有的时候会失效
                this.$router.push( 'category/'+this.$route.params.categoryId+'/page/'+val)
            },
        },
        asyncData({store, route}) {
            // 获取首页列表
            return store.dispatch('fetchCatData', {
                currentPage: route.params.pageId || 1,
                pageItems: store.state.pageItems,
                categoryId:route.params.categoryId || 1
            })
        },
        computed: {
            catArtList() {
                return this.$store.state.catArtList //列数据
            },
            artTotalitems() {
                return this.$store.state.artTotalitems //总条数
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
            console.log(this.$route.params)
        },
        watch: {
            '$route' (to, from) {
                // 对路由变化作出响应...
            }
        }
    }
</script>

<style scoped lang="scss">



</style>