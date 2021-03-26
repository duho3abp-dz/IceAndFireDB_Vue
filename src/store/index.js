import Vue from 'vue';
import Vuex from 'vuex';

import loader from '@/store/modules/loader';
import error from '@/store/modules/error';
import characters from '@/store/modules/characters';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    loader,
    characters,
    error
  }
});