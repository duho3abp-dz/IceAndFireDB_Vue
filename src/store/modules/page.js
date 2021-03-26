const state = {
    page: 2
};

const mutations = {
    nextPage(state) {
        state.page = state.page < 100 ? state.page + 1 : 2 ;
    },
    prevPage(state) {
        state.page = state.page > 2 ? state.page - 1 : 100  ;
    }
};

export default {
    state,
    mutations
}