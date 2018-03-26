
// const index = { template: '<div>index</div>' }

// Vue.use(Router)
import index from '../components/index_page';
import article_content from '../components/article_page';
import category from '../components/category_page';

export default ([
        {
            path: '/',
            name: 'index',
            component: index,
        },
        {
            path: '/article',
            name: 'article_content',
            component: article_content,
        },
        {
            path: '/category',
            name: 'category',
            component: category,
        },

        // {
        //     path: '/article',
        //     name: 'article',
        //     component: article,
        //     children: [
        //         // UserProfile will be rendered inside User's <router-view>
        //         // when /user/:id/profile is matched
        //         {
        //             path: 'add',
        //             name:"add",
        //             component: articleAdd
        //         },
        //         {
        //             path: 'list',
        //             name:"art_list",
        //             component: articleList
        //         },
        //         {
        //             path: 'edit',
        //             name:'edit',
        //             component: articleEdit
        //         },
        //     ]
        // }
    ]
)
