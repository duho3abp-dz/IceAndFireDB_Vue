const state = {
    info: []
};

const mutations = {
    setPersonInfo(state, info) {
        state.info = info;
    }
};

export default {
    state,
    mutations
}