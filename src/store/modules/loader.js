const state = {
    loading: false
};

const mutations = {
    loadingToggle(state, bool) {
        state.loading = bool
    }
};

export default {
    state,
    mutations
}