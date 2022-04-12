<template>
  <div id="app">
    <transition name="fade">
      <keep-alive>
        <NewUserModal v-if="isModalOpened"/>
      </keep-alive>
    </transition>

    <button class="add-new-btn" type="button" @click="changeModalVisibility(true)">Добавить</button>

    <UsersList class="root-users-list" :users="allUsersTree"/>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex';

import NewUserModal from "@/components/NewUserModal";
import UsersList from "@/components/UsersList";

export default {
  name: "App",
  computed: {
    ...mapGetters(['allUsersList', 'allUsersTree', 'isModalOpened']),
  },
  methods: {
    ...mapActions(["getUsersFromStorage", "setUsersToStorage"]),
    ...mapMutations(['changeModalVisibility']),
  },
  mounted() {
    this.getUsersFromStorage();

    window.addEventListener("beforeunload", () => this.setUsersToStorage(JSON.stringify(this.allUsersList)));
  },
  components: {
    NewUserModal,
    UsersList
  },
};
</script>

<style lang="scss" scoped>
#app {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 800px;
  align-items: center;
  justify-content: center;
}

.add-new-btn {
  padding: 3px 5px;
  margin-bottom: 20px;
}

.root-users-list {
  width: 100%;
  height: 50vh;
  overflow-y: auto;
}
</style>
