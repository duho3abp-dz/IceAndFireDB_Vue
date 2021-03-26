const state = {
    error: false
};

const mutations = {
    setError(state, bool) {
        state.error = bool
    }
};

export default {
    state,
    mutations
};