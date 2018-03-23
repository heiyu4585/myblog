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
            console.log("增加页数的地方执行了")
            console.log(state.currentPage);
            if (state.currentPage > state.totalPages) {
                state.currentPage = state.totalPages
            } else {
                state.currentPage++
            }
        },

        subductionPage: state => {
            console.log("减少页数的地方执行了")
            // 总页数页数
            console.log(state.currentPage)


            if (state.currentPage = 1) {
                state.currentPage = 1
            } else {
                state.currentPage--
            }
        },
        //she设置当前页
        setCurrentPage: (state, currentPage) => {
            state.currentPage = currentPage;
        }
    },
    actions: {
        //she设置当前页
        setCurrentPage: ({commit}, {currentPage}) => {
            commit('setCurrentPage', currentPage);
        }
    }
})
