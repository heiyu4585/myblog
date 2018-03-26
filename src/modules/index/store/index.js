import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0,
        currentPage: 1, //当前页
        totalPages: 1
    },
    mutations: {
        inc: state => state.count++,
        dec: state => state.count--,
        //增加页数
        addPage: state => {
            console.log("增加页数的地方执行了");
            console.log("当前页:"+state.currentPage);
            console.log("总页数:"+state.totalPages);
            if (state.currentPage > state.totalPages) {
                state.currentPage = state.totalPages
            } else {
                state.currentPage++
            }
        },

        subductionPage: state => {
            console.log("减少页数的地方执行了")
            // 总页数页数
            console.log("当前页:"+state.currentPage);
            console.log("总页数:"+state.totalPages);


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
            commit('setArtList', artList);
        },
    }
})
