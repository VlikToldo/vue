<template>
  <div>
    <div v-if="posts.length > 0">
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap:10px;
  margin-bottom: 20px;
}


</style>
