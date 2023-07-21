<template>
  <form class="form" @submit.prevent="hideModal">
    <h4>Register</h4>
    <input
      v-model="post.number"
      class="input"
      name="email"
      type="email"
      placeholder="Email"
      required
      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
    />
    <input
      v-model="post.email"
      class="input"
      name="number"
      type="tel"
      placeholder="Number"
      required
      pattern="^\380\d{9}$"
    /> 
    <button  class="btn">Register</button>
  </form>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      post: {
        number: "",
        email: "",
      },
    };
  },
  methods: {
    hideModal() {
      this.$emit("updateShow", this.show);
      this.post = { number: "", email: "" };
    },
  },
  watch: {
    post: {
      handler(newValue) {
        console.log(newValue);
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  padding: 20px;
}

.input {
  width: auto;
  padding: 10px 15px;
  margin: 8px 0;
  border-radius: 5px;
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
</style>
