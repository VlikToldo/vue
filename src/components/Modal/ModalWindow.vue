<template>
  <div class="modal" v-if="show" @click.stop="hideModal">
    <div @click.stop class="content">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideModal() {
      this.$emit("updateShow", this.show) ;
    }
  }
};
</script>

<style scoped>
.modal {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.content{
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 50px;
}
</style>
