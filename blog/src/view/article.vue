<template>
    <el-main>
        <article id="post-3227" class="post-3227 post type-post status-publish format-standard hentry category-javascript tag-express tag-vue">
            <header class="single-header">
                <h1 class="single-title">{{articleContent.art_title}}</h1>
                <div class="single-meta">
                    <span class="date"><i class="icon-date"></i>{{articleContent.art_create_time}}</span>
                    <span class="cat"><i class="icon-cat"></i><a :href="'/category?id='+articleContent.id " rel="category tag">
                                {{articleContent.category_name}}</a>
                            </span>
                    <span class="comment"><i class="icon-comment"></i>
                                <a href="#">暂无评论</a>
                            </span>
                    <span class="views"><i class="icon-views"></i>阅读 9 次</span>
                </div>
                <!-- .entry-meta -->
            </header>
            <!-- .single-header -->
            <div class="single-main">
                <div class="content-main" v-html="articleContent.art_content">
                </div>
                <div class="clear"></div>
            </div>
            <!-- .single-content -->
        </article>
    </el-main>
</template>

<script>
    export default {
        name: 'artilce',
        data() {
            return {
            }
        },
        metaInfo () {
            return {

                title: this.articleContent.art_title+"|"+this.articleContent.category_name+"|思雨前端",
                meta: [
                    { charset: 'utf-8' },
                    { name: 'description', content: this.articleContent.art_des },
                    { name: 'keyword', content: this.articleContent.art_title+","+this.articleContent.category_name}
                ]
            }
        },
        asyncData({store, route}) {
            // 获取首页列表
            return store.dispatch('fetchArticle', {
                articleId: route.params.id || 1,
            })
        },
        methods: {
            // getArticle(){
                // axios({
                //     method: 'post',
                //     url: '/api',
                //     data: {
                //         query:
                //             `
                //             {
                //               article(art_id:${this.articleId}){
                //                 art_id
                //                 art_title
                //                 art_content
                //                 art_create_time
                //                 category_url
                //                 category_name
                //               }
                //             }
                //     `
                //     }
                // })
                //     .then(function (response) {
                //         this.articleContent =response.data.data.article[0];
                //     }.bind(this));
            // }
        },
        computed: {
            articleContent() {
                return this.$store.state.articleContent //列数据
            },
        },
        components: {
        },
        mounted: function () {
        },
    }
</script>

<style scoped>
    /*文章内容*/
    /*标题*/
    .single-header {
        margin: 10px 0 5px 0;
    }
    .single-header h1 {
        font-size: 18px;
    }
    .single-meta, .single-meta a {
        color: #8b8b8b;
    }
    /*正文*/
    .single-content p, .single-content ul, .single-content ol, .single-content dd, .single-content pre, .single-contenthr {
        margin: 0 0 5px 0;
        text-align: justify;
        text-justify: inter-ideograph;
        word-wrap: break-word;
        word-break: break-all;
    }
    .single-content p {
        text-indent: 2em;
        font-size: 16px;
        line-height: 160%;
    }
</style>