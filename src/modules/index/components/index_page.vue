<template>
    <el-main>
        <Article v-for="(item, index) in artList" :item="item" :key="item.id"></Article>
        <el-pagination
                layout="prev, pager, next"
                :page-size="page_items"
                :total="total_items"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
        >
        </el-pagination>
    </el-main>
</template>

<script>
    import Article from './Article';
    import axios from 'axios';
    import store from '../store'
    export default {
        store,
        name: 'app',
        data() {
            return {
                message: 'Welcome to Your Vue.js App',
                artList: [],
                total_items:0,
                // currentPage: 1, //当前页
                page_items:2,   //每页显示的数目
                category_id:null
            }
        },
        methods: {
            handleSizeChange(val) {
                this.page_items = val;
            },
            handleCurrentChange(val) {
                // this.currentPage =val;
                // console.log(`当前页: ${val}`);
                // this.getArticle({currentPage:this.currentPage,page_items:this.page_items});


                store.state.currentPage =val;
                this.currentPage =store.state.currentPage;
                this.getArticle({currentPage:this.currentPage,page_items:this.page_items,category_id:this.category_id});
            },
            getArticle({currentPage,page_items}){
                axios({
                    method: 'post',
                    url: '/api',
                    data: {
                        query:
                            `
                        {
                         articles(page_no:${currentPage},page_items:${page_items}){
                          page_items
                          page_no
                          total_items
                          rows{
                         art_id
                        art_title
                        art_content
                        art_des
                        art_create_time
                        category_name
                        category_url
  }
}
}
                    `
                    }
                })
                    .then(function (response) {
                        this.artList = response.data.data.articles.rows;
                        this.total_items = response.data.data.articles.total_items;
                        this.page_no = response.data.data.articles.page_no;

                        store.state.totalPages =Math.ceil(this.total_items/this.page_items);
                        console.log(store.state.totalPages);
                    }.bind(this));
            }
        },
        components: {
            Article
        },
        computed: {
            // currentPage () {
            //     return store.state.currentPage
            // }

            currentPage: {
                get: function () {
                    return store.state.currentPage
                },
                set: function () {
                }
            }
        },
        mounted: function () {
            // GET request for remote image
            console.log(this.currentPage);
            this.getArticle({currentPage:this.currentPage,page_items:this.page_items});
        },
    }
</script>

<style scoped>

</style>