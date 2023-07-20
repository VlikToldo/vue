<template>
  <li @click="$router.push(`/${post.id}`)" class="film-list-item">
    <div class="container-img">
      <img
        class="cards-img"
        :src="`https://image.tmdb.org/t/p/w400${post.backdrop_path}`"
        alt="title"
        loading="lazy"
      />
      <h3 class="cards-name">{{ post.title }}</h3>
    </div>
    <div class="cards-info">
        <p><strong>Release date:</strong> {{ post.release_date }}</p>
        <p><strong>Vote average:</strong> {{ Math.round(post.vote_average) }}</p>
        <p class="cards-overview"><strong>Overview: </strong>{{ post.overview }}</p>
    </div>
    <button class="btn-delete" @click="$emit('remove', post)">Delete</button>
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
  position: relative;
  max-width: 350px;
  max-height: 450px;
  border-radius: 30px;
  flex-basis: calc((100% - 28px) / 3);
  overflow: hidden;
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

.cards-img {
  object-fit: cover;
  max-width: 100%;
  height: auto;
  display: block;
}

.cards-info {
  padding: 10px 65px 10px 10px;
  max-height: 200px;
  overflow-y: scroll; 
  scrollbar-width: none; 
}

.cards-info::-webkit-scrollbar {
  display: none; 
}

.cards-name{
  display: block;
  padding: 10px 10px 0 10px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}

.btn-delete {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 5px 5px;
  border-radius: 2px;
  background-color: #ad2525;
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
  min-width: 50px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    background-color: #ff0000;
  }
}
</style>
