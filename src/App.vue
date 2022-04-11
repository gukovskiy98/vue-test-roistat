<template>
  <div id="app">
    <transition name="fade">
      <keep-alive>
        <NewUserModal v-if="isModalOpened" />
      </keep-alive>
    </transition>

    <button class="add-new-btn" type="button" @click="changeModalVisibility(true)">Добавить</button>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

import NewUserModal from "@/components/NewUserModal";

export default {
  name: "App",
  computed: {
    ...mapGetters(['allUsers', 'isModalOpened']),
  },
  methods: {
    ...mapActions(["getUsersFromStorage"]),
    ...mapMutations(['changeModalVisibility']),
  },
  mounted () {
    this.getUsersFromStorage();
  },
  components: {
    NewUserModal,
  },
};
</script>

<style lang="scss" scoped>
#app {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  width: 800px;
  align-items: center;
  justify-content: center;
}

.add-new-btn {
  padding: 3px 5px;
}
</style>
