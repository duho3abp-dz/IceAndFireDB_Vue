import ServiceIAF from '@/api/serviceIAF';

const serviceIAF = new ServiceIAF();

const state = {
    characters: []
};

const mutations = {
    setCharacters(state, characters) {
        state.characters = characters;
    }
};

const actions = {
    getCharacters(context) {
        context.commit('loadingToggle', true);
        context.commit('setError', false);

        serviceIAF
            .getAllCharacters()
            .then(characters => context.commit('setCharacters', characters))
            .catch(() => context.commit('setError', true))
            .finally(() => context.commit('loadingToggle', false));
    }
}

export default {
    state,
    mutations,
    actions
}