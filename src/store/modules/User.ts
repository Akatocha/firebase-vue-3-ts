import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Module } from 'vuex';

const User: Module<any, any> = {
  state: {
    user: null,
  },
  getters: {
    GET_USER: state => {
      return state.user;
    },
    GET_USER_UID: state => {
      return state.user.uid;
    },
    GET_USER_STATE: state => {
      return Boolean(state.user);
    },
  },
  mutations: {
    GetUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async GetUser({ commit }) {
      onAuthStateChanged(getAuth(), user => {
        if(!user) {
          commit('GetUser', null)
        } else {
          commit('GetUser', user);
        }
      })
    },
  },
};

export default User;
