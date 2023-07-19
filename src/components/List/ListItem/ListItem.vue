<template>
  <li class="film-list-item">
    <a>
      <img
        class="cards-img"
        :src="`https://image.tmdb.org/t/p/w400${post.backdrop_path}`"
        alt="title"
        loading="lazy"
      />
    </a>
    <div class="cards-text">
      <h2 class="cards-name">{{ post.title }}</h2>
      <p class="cards-overview">{{ post.overview }}</p>
    </div>
    <div >
      <button class="btn" @click="$emit('remove', post)">Delete</button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.film-list-item {
  text-decoration: none;
  border-radius: 6px;
  flex-basis: calc((100% - 32px) / 2);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    display: block;
    transform: scale(1.015);
    box-shadow: 4px 3px 12px -1px rgba(17, 16, 16, 0.5);
    cursor: pointer;
  }
}

.cards-image {
  display: block;
  object-fit: cover;
  width: 100%;
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
  &:hover,
  &:focus {
    background-color: #303f9f;
  }
}
</style>
