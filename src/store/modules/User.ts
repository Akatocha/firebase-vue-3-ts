import { db } from '@/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { onValue, ref } from 'firebase/database';
import { Module } from 'vuex';

const User: Module<any, any> = {
  state: {
    user: null,
    userData: null,
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
    GET_USER_DATA: state => {
      return state.userData;
    },
  },
  mutations: {
    GetUser(state, payload) {
      state.user = payload;
    },
    GetUserData(state, payload) {
      state.userData = payload;
    },
  },
  actions: {
    async GetUser({ commit }) {
      onAuthStateChanged(getAuth(), user => {
        if (!user) {
          commit('GetUser', null);
        } else {
          commit('GetUser', user);
          const rawData = ref(db, 'users/' + user.uid);
          // update value as websocket

          onValue(rawData, snapshot => {
            const data = snapshot.val();
            // update Value function when DB is update
            commit('GetUserData', data);
          });
        }
      });
    },
  },
};

export default User;
