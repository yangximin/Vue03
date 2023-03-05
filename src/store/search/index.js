import { requestSearchInfo } from '@/api'
const state = {
    searchInfo: {}
};
const mutations = {
    GETSEARCHLIST(state, data) {
        state.searchInfo = data
    }
};
const actions = {
    async getSearchList(sotre, parmas = {}) {
        let result = await requestSearchInfo(parmas)
        if (result.code == 200) {
            sotre.commit("GETSEARCHLIST", result.data)
        }
    }
};
const getters = {
    attrsList(state) {
        // console.log(state);
        return state.searchInfo.attrsList || [];
    },
    goodsList(state) {
        return state.searchInfo.goodsList || [];
    },
    trademarkList(state) {
        return state.searchInfo.trademarkList || [];
    }

}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}