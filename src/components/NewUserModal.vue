<template>
  <div class="modal__overlay" @click="changeModalVisibility(false)">
    <form class="modal__body form" @click.stop @submit.prevent="onFormSubmit">
      <h2 class="form__title">Добавление пользователя</h2>
      <label class="form__label">
        <span class="form__label-value">Имя</span>
        <input class="form__input" v-model="userName" type="text" required>
      </label>

      <label class="form__label">
        <span class="form__label-value">Телефон</span>
        <input class="form__input" v-model="userPhone" type="tel" required>
      </label>
      <label class="form__label" v-if="allUsersList.length">
        <span class="form__label-value">Начальник</span>
        <select class="form__select" v-model="parentId">
          <option selected value="">Без родителя</option>
          <option v-for="user of allUsersList" :value="user.id" :key="user.id">{{ user.name }}</option>
        </select>
      </label>

      <button type="submit" class="form__submit">Сохранить</button>
      <button type="button" class="form__close" @click="changeModalVisibility(false)"></button>
    </form>
  </div>
</template>

<script>
import uniqid from 'uniqid';
import {mapMutations, mapGetters} from 'vuex';

export default {
  name: 'NewUserModal',
  data: function() {
    return {
      userName: '',
      userPhone: '',
      parentId: '',
    };
  },
  computed: {
    ...mapGetters(['allUsersList']),
  },
  methods: {
    ...mapMutations(["changeModalVisibility", "addNewUser"]),
    onFormSubmit() {
      this.addNewUser({name: this.userName, phone: this.userPhone, id: uniqid(), parentId: this.parentId});
      this.userName = '';
      this.userPhone = '';
      this.parentId = '';
      this.changeModalVisibility(false);
    },
  }
}
</script>

<style lang="scss" scoped>
.modal {
  &__overlay {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &__body {
    margin: auto;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 400px;
    height: 400px;
    background-color: #ffffff;
    overflow-y: auto;
    padding: 20px;
    border-radius: 10px;
  }
}

.form {
  &__title {
    margin-bottom: 20px;
  }

  &__label {
    display: flex;

    + .form__label {
      margin-top: 20px;
    }
  }

  &__label-value {
    flex: 0 0 100px;
    margin-right: 10px;
    overflow: hidden;
  }

  &__input, &__select {
    flex: 1 0 auto;
    padding: 3px 5px;
  }

  &__submit {
    margin-top: auto;
    align-self: flex-end;
    padding: 3px 5px;
  }

  &__close {
    position: absolute;
    top: 15px;
    right: 15px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    width: 15px;
    height: 15px;

    &::before, &::after {
      content: '';
      display: block;
      width: 14px;
      height: 2px;
      background-color: #000000;
      position: absolute
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }
}
</style>