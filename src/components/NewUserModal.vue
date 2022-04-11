<template>
  <div class="modal__overlay" @click="onOverlayClick">
    <form class="modal__body form" @click.stop @submit.prevent="onFormSubmit">
      <h2>Добавление пользователя</h2>
      <label for="name">Имя</label>
      <input id="name" :value="userName" type="text" required>
      <label for="phone">Телефон</label>
      <input id="phone" :value="userPhone" type="text" required>
      <label for="parent">Начальник</label>
      <select id="parent">
        <option disabled selected></option>
        <option>1</option>
        <option>2</option>
      </select>
      <button type="submit" class="modal__submit">Сохранить</button>
      <button type="button" class="modal__close" @click="onCloseClick"></button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'NewUserModal',
  data: function () {
    return {
      userName: '',
      userPhone: ''
    };
  },
  methods: {
    ...mapMutations(["changeModalVisibility"]),
    onOverlayClick() {
      this.changeModalVisibility(false);
    },
    onFormSubmit() {
      console.log('trying to submit');
    },
    onCloseClick() {
      this.changeModalVisibility(false);
    }
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
      background-color: rgba(0,0,0,0.5);
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

    &__submit {

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
        background-color: #000;
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