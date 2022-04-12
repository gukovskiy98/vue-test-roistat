<template>
  <div class="users-list__wrapper">
    <span v-if="!users.length" class="users-list__empty-plug">Нет элементов для отображения</span>
    <template v-else>
      <div class="users-list__header">
        <span class="users-list__header-left" @click.stop="toggleSort('name')">Имя</span>
        <span class="users-list__header-right" @click.stop="toggleSort('phone')">Телефон</span>
      </div>
      <UserItem v-for="user of sortedUsers" :user="user" :key="user.id"/>
    </template>
  </div>
</template>

<script>
import UserItem from "@/components/UserItem";

export default {
  props: {
    users: {
      default() {
        return [];
      },
      type: Array,
    },
  },
  computed: {
    sortedUsers() {
      return [...this.users].sort((a, b) => {
        console.log(this, a[this.sort_field], b[this.sort_field], (b[this.sort_field] > a[this.sort_field]));

        if (this.sort_direction === 'asc') {
          return a[this.sort_field].localeCompare(b[this.sort_field])
        }

        return b[this.sort_field].localeCompare(a[this.sort_field])
      })
    }
  },
  data() {
    return {
      isExpanded: false,
      sort_direction: 'asc',
      sort_field: 'name',
    }
  },
  methods: {
    toggleSort(field) {
      this.sort_field = field;

      this.sort_direction = this.sort_direction === 'asc' ? 'desc' : 'asc';
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
    cursor: pointer;
  }
}
</style>