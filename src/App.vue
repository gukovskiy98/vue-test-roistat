<template>
  <div id="app">
    <transition name="fade">
      <keep-alive>
        <NewUserModal v-if="isModalOpened" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import NewUserModal from "@/components/NewUserModal";

export default {
  name: "App",
  computed: {
    ...mapGetters(['allUsers', 'isModalOpened'])
  },
  methods: {
    ...mapActions(["getUsersFromStorage"])
  },
  mounted () {
    this.getUsersFromStorage();
  },
  components: {
    NewUserModal,
  },
};
</script>

<style lang="scss">
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

#app {
  margin: 0 auto;
  min-height: 100vh;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
