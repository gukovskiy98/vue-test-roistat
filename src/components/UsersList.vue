<template>
  <div class="users-list__wrapper">
    <span v-if="!users.length" class="users-list__empty-plug">Нет элементов для отображения</span>
    <template v-else>
      <div v-if="showHeader" class="users-list__header">
        <span class="users-list__header-left">Имя</span>
        <span class="users-list__header-right">Телефон</span>
      </div>
      <UserItem v-for="user of users" :user="user" :key="user.id"/>
    </template>
  </div>
</template>

<script>
import UserItem from "@/components/UserItem";

export default {
  name: 'users-list',
  props: {
    users: {
      default() {
        return [];
      },
      type: Array,
    },
    showHeader: {
      default: true,
      type: Boolean,
    },
  },
  data() {
    return {
      isExpanded: true,
    }
  },
  components: {
    UserItem,
  }
}
</script>

<style lang="scss" scoped>
.users-list {
  &__wrapper {
    border: 1px solid #000000;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #ffffff;

    > div {
      &:nth-of-type(2n) {
        background: #cccccc;
      }

      &:nth-of-type(2n + 1) {
        background: #ffffff;
      }
    }
  }

  &__header-left {
    padding: 3px 5px 0 30px;
    flex: 0 0 50%;
    border-right: 1px solid #000000;
  }

  &__header-right {
    padding: 3px 5px;
    flex: 0 0 50%;
  }

  &__empty-plug {
    margin: auto;
    font-size: 2rem;
  }

  &__header {
    font-size: 1.2em;
    display: flex;
    border-bottom: 2px solid #000000;
    position: relative;
  }
}
</style>