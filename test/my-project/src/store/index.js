import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0,
        currentPage: 1, //当前页
        totalPages: 1,
        artList:[],
      medList:[]
    },
    mutations: {
        inc: state => state.count++,
        dec: state => state.count--,
        //增加页数
        addPage: state => {
            if (state.currentPage > state.totalPages) {
                state.currentPage = state.totalPages
            } else {
                state.currentPage++
            }
        },

        subductionPage: state => {
            if (state.currentPage = 1) {
                state.currentPage = 1
            } else {
                state.currentPage--
            }
        },
        //she设置当前页    ////todo 设置为指定页数
        setCurrentPage: (state, currentPage) => {
            state.currentPage = currentPage;
        },
        setArtList: (state, setArtList) => {
            state.setArtList = setArtList;
        },
    },
    ////todo 设置为指定页数
    actions: {
        //she设置当前页
        setCurrentPage: ({commit}, {currentPage}) => {
            commit('setCurrentPage', currentPage);
        },
        setArtListActions: ({commit}, {artList}) => {
            console.log("我接收到了"+artList)
            commit('setArtList', artList);
        },
    }
})
