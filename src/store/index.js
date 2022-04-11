import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    isModalOpened: false,
  },
  getters: {
    allUsers(state) {
      return state.users;
    },
    isModalOpened(state) {
      return state.isModalOpened;
    }
  },
  mutations: {
    updateUsers(state, users) {
      state.users = users;
    },
    changeModalVisibility(state, isVisible) {
      state.isModalOpened = isVisible;
    }
  },
  actions: {
    getUsersFromStorage(context) {
      const users = window.localStorage.getItem('users') || {};
      context.commit('users', users);
    },
    setUsersToStorage(context, users) {
      window.localStorage.setItem('users', users);
    }
  },
});
