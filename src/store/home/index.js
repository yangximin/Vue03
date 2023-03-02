import { reqCategoryList, requestBannerList, requestFloorList } from "@/api";
const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
};
const actions = {
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data);
        }
    },
    async getBannerList(store) {
        let result = await requestBannerList()
        if (result.code == 200) {
            store.commit("GETBANNERLIST", result.data)
        }
    },
    async getFloorList(store) {
        let result = await requestFloorList();
        if (result.code == 200) {
            store.commit("GETFLOORLIST", result.data)
        }
    }
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList;
    }
};
const getters = {}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}