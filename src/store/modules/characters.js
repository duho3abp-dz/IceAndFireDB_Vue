const state = {
    characters: []
};

const mutations = {
    setCharacters(state, characters) {
        state.characters = characters;
    }
};

export default {
    state,
    mutations
}