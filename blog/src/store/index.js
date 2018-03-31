import Vuex from 'vuex';
import Vue from 'vue';
import fetchItem from '../../api/fetchItem';
import * as fetchApi from '../../api/fetchApi';

Vue.use(Vuex);

export function createStore() {
    return new Vuex.Store({
        state: {
            pageItems: 8,//首页显示的页数
        },
        actions: {
            fetchItem: ({commit}, {id}) => {
                //获取都id后拉去数据
                return fetchItem(id).then(item => {
                    commit('setItem', {id: id, item: item})
                })
            },
            //获取首页列表
            fetchIndexData: ({commit}, {indexCurrentPage, pageItems}) => {
                return fetchApi.indexData(indexCurrentPage, pageItems).then(items => {
                    commit('setIndexData', items)
                })
            },
            //获取栏目列表
            fetchCatData: ({commit}, params) => {
                return fetchApi.categoryData(params).then(items => {
                    commit('setCategoryData', items)
                })
            },
            //获取文章内容
            fetchArticle: ({commit}, params) => {
                console.log(params);
                return fetchApi.getArticle(params).then(items => {
                    console.log("lanmu栏目列表")
                    console.log(items)
                    commit('setArticle', items)
                })
            },
        },
        mutations: {
            setItem: (state, {id, item}) => {
                state.item = item;
                Vue.set(state.item, id, JSON.stringify(item))
            },
            //设置首页 状态
            setIndexData: (state, items) => {
                state.indexArtList = items.articles.rows;
                state.categoriesList = items.categories;
                state.indexCurrentPage = items.articles.page_no;
                state.indexTotalitems = items.articles.total_items;
                // TODO 为啥官方推荐这个配置
                // Vue.set(state.indexArtList,JSON.stringify(item))
            },
            //设置栏目 状态
            setCategoryData: (state, items) => {
                console.log("she设置 栏目  状态")
                console.log(items);
                state.catArtList = items.articles.rows;
                state.categoriesList = items.categories;
                state.catCurrentPage = items.articles.page_no;
                state.catTotalitems = items.articles.total_items;
            },
            //设置文章 状态
            setArticle: (state, items) => {
                console.log("she设置 栏目  状态")
                console.log(items);
                state.articleContent = items.article[0];
                // state.categoriesList = items.categories;
                // state.catCurrentPage = items.articles.page_no;
                // state.catTotalitems = items.articles.total_items;
            }
        },
        getters: {}
    })
}