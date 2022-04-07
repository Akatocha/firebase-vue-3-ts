import { createStore } from 'vuex';
import user from './modules/User';
import { test } from './modules/test';
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    test,
  },
});
