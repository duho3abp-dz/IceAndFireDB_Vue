import Vue from 'vue';
import Vuex from 'vuex';

import loader from '@/store/modules/loader';
import error from '@/store/modules/error';
import characters from '@/store/modules/characters';
import person from '@/store/modules/person';
import page from '@/store/modules/page';

import ServiceIAF from '@/api/serviceIAF';
const serviceIAF = new ServiceIAF();

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    getData(context, { func, id }) {
        context.commit('loadingToggle', true);
        context.commit('setError', false);

        serviceIAF[func](id)
            .then(data => {
              switch (func) {
                case 'getAllCharacters':
                  context.commit('setCharacters', data);
                  break;
                case 'getPerson':
                  context.commit('setPersonInfo', data);
                  break;
                default:
                  break;
              }
            })
            .catch(() => context.commit('setError', true))
            .finally(() => context.commit('loadingToggle', false));
    }
  },
  modules: {
    loader,
    error,
    characters,
    person,
    page
  }
});