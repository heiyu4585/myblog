import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
import axios from 'axios';
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
      fetchItem: (state, id) => {
        console.log("我接收到了id"+id)
         state.pageId = id;
        //获取都id后拉去数据
        axios({
          method: 'post',
          data:{
            paramJson: {"firstResult":(id-1)*20,"maxResult":20*id,"pageIndex":id}
          },
          url: '/api/mcall/med/recommend/customer/resource/getMapListByCustomerId/',
        })
          .then(function (response) {
            state.artList=response.data.responseObject.responseData.data_list;
          }.bind(this));
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
      fetchItem: ({commit}, {id}) => {

            commit('fetchItem', id);
        },

    }
})
