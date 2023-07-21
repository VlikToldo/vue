<template>
  <header class="header">
    <div class="header-container">
      <router-link to="/"> <button  class="btn-back">Library</button></router-link>
      <button @click="showModal" class="btn">Register</button>
      <modal-window :show="visibleModal" @updateShow="hideModal">
        <register-form :show="visibleModal" @updateShow="hideModal" />
      </modal-window>
    </div>
  </header>
</template>

<script>
import ModalWindow from "@/components/Modal/ModalWindow";
import RegisterForm from "@/components/Form/FormRegister";

export default {
  components: {
    ModalWindow,
    RegisterForm,
  },
  data() {
    return {
      visibleModal: false,
    };
  },

  methods: {
    showModal() {
      this.visibleModal = true;
    },
    hideModal() {
      this.visibleModal = false;
    },
  },
};
</script>

<style scoped>
.header {
  top: 0;
  left: 0;
  z-index: 1100;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 20px;
  color: #fff;
  background-color: #1230dd62;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.header-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.btn {
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.btn:hover,
.btn:focus {
  background-color: #303f9f;
}

.btn-back {
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

@media screen and (max-width: 420px) {
  .btn{
    padding: 8px 5px;
    min-width: 0;
  }
  .btn-back {
    padding: 8px 5px;
    min-width: 0;
  }
}
</style>
