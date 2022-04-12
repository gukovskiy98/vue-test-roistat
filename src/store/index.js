import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    isModalOpened: false,
  },
  getters: {
    allUsersList(state) {
      return state.users;
    },
    isModalOpened(state) {
      return state.isModalOpened;
    },
    allUsersTree(state) {
      const usersClone = [];
      const map = {}
      const resultTree = [];

      state.users.forEach((elem, index) => {
        map[elem.id] = index;
        usersClone.push(Object.assign({}, elem, {
          children: [],
        }))
      })

      usersClone.forEach((elem) => {
        if (elem.parentId) {
          usersClone[map[elem.parentId]].children.push(elem);
        } else {
          resultTree.push(elem);
        }
      })

      return resultTree;
    }
  },
  mutations: {
    updateUsers(state, users) {
      state.users = users;
    },
    changeModalVisibility(state, isVisible) {
      state.isModalOpened = isVisible;
    },
    addNewUser(state, user) {
      state.users.push(user);
    },
  },
  actions: {
    getUsersFromStorage(context) {
      const users = JSON.parse(window.localStorage.getItem('users')) || [];

      context.commit('updateUsers', users);
    },
    setUsersToStorage(context, users) {
      // debugger;
      window.localStorage.setItem('users', users);
    }
  },
});
