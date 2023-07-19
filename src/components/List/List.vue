<template>
  <div>
    <div v-if="posts.length > 0">
      <h3>Film List</h3>
      <ul class="film-list">
        <list-item
          v-for="post in posts"
          :key="post.id"
          :post="post"
          @remove="$emit('remove', post)"
        />
      </ul>
    </div>
    <h2 v-else style="color: red">The list is empty</h2>
  </div>
</template>

<script>
import ListItem from "./ListItem/ListItem";

export default {
  components: { ListItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.film-list {
  min-height: 455px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0 40px 0;
}
</style>
