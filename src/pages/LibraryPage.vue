<template>
  <div>
    <div>
      <h1 class="title">Library</h1>
      <div class="box-search-film">
        <form-search-film @search="searchFilm" />
        <my-select v-model="selectedSort" :options="sortOptions" />
      </div>
      <film-list :posts="posts" @remove="removePost" v-if="!isFilmLoading" />
      <p v-else>Loading...</p>
    </div>
  </div>
</template>
<script>
import FormSearchFilm from "@/components/Form/FormSearchFilm";
import FilmList from "@/components/List/List";
import MySelect from "@/components/MySelect/MySelect";

import { searchMovie, searchFilm } from "@/shared/services/movie-api";
export default {
  components: {
    FilmList,
    FormSearchFilm,
    MySelect,
  },

  data() {
    return {
      posts: [],
      isFilmLoading: false,
      selectedSort: "",
      sortOptions: [
        { value: "vote_average", name: "Sort by rating" },
        { value: "release_date", name: "Sort by year" },
      ],
    };
  },
  methods: {
    // Видаляє фільм зі списку
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    // Пошук найпопулярніших фільмів
    async searchMovie() {
      try {
        this.isFilmLoading = true;
        const data = await searchMovie();
        this.posts = [...data.results];
      } catch (error) {
        console.log(error.message);
      } finally {
        this.isFilmLoading = false;
      }
    },
    // Пошук фільмів по назві
    async searchFilm(nameFilm) {
      try {
        this.isFilmLoading = true;
        const data = await searchFilm(nameFilm);
        this.posts = [...data.results];
      } catch (error) {
        console.log(error.message);
      } finally {
        this.isFilmLoading = false;
      }
    },
  },
  mounted() {
    this.searchMovie();
  },
  // Слідкує за селектом та фільтрує список фільмів
  watch: {
    selectedSort() {
      this.posts.sort((movie1, movie2) => {
        return String(movie2[this.selectedSort])?.localeCompare(
          String(movie1[this.selectedSort])
        );
      });
    },
  },
};
</script>

<style scoped>

.title{
  margin-bottom: 10px;
  color: #3f51b5;
}
.box-search-film {
  display: flex;
  justify-content: space-between;
}
.card-info-film {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 600px;
  padding: 20px;
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
