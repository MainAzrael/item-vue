import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    // 数据源（仓库）
    state: {

        isShowFooter: true,
    },
    mutations: {
        isShowFooterNav(state, val) {
            state.isShowFooter = val;
        },
    },
    actions: {},
    getters: {},
    modules: {},
});