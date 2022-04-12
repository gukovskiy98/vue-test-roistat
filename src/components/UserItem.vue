<template>
  <div class="user-item__wrapper" @click.stop="isExpanded = !isExpanded">
    <span v-if="user.children && user.children.length" class="user-item__expand">
      {{ isExpanded ? '-' : '+' }}
    </span>
    <span class="user-item__left">{{ user.name }}</span>
    <span class="user-item__right">{{ user.phone }}</span>

    <UsersList v-if="user.children && user.children.length"
               v-show="isExpanded"
               :show-header="false"
               :users="user.children"/>
  </div>
</template>

<script>

export default {
  props: {
    user: {
      default() {
        return {};
      },
      type: Object,
    },
    openExpanded: {
      default: false,
      type: Boolean,
    }
  },
  data() {
    return {
      isExpanded: this.openExpanded,
    }
  },
  components: {
    UsersList: () => import('@/components/UsersList'),
  }
}
</script>

<style lang="scss" scoped>
.user-item {
  &__wrapper {
    display: flex;
    border-bottom: 1px solid #000000;
    position: relative;
    width: 100%;
    flex-wrap: wrap;
    cursor: pointer;

    .users-list__wrapper {
      flex: 1 0 auto;
      margin: 5px 5px 10px 20px;
    }
  }

  &__expand {
    position: absolute;
    left: 5px;
    top: 4px;
  }

  &__left {
    padding: 3px 5px 0 30px;
    flex: 0 0 50%;
    border-right: 1px solid #000000;
  }

  &__right {
    padding: 3px 5px;
    flex: 0 0 50%;
  }
}
</style>