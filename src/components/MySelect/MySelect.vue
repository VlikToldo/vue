<template>
  <select class="my-select" :value="modelValue" @change="changeOption">
    <option disabled value="">Select genre</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>
<script>
export default {
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style scoped>
.my-select {
  height: 20px;
  width: 100px;
  border-radius: 10px;
  background-color: #3f51b5;
  color: white;
  font-size: 12px;
  border: none;
  padding: 2px;
}
</style>
