<template>
    <div>
      <header class="header">
        <div class="header-container">
          <button @click="showModal" class="btn">Register</button>
        </div>
      </header>
      <div class="card-info-film">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h3 class="name-film">Title</h3>
          <p class="overview">overview</p>
          <p class="release-date">release date</p>
          <p class="popularity">popularity</p>
        </div>
      </div>
      <main class="main">
        <h1>Library</h1>
        <form-search-film @search="searchFilm" />
        <modal-window :show="visibleModal" @updateShow="hideModal">
          <register-form @create="createPost" />
        </modal-window>
        <film-list :posts="posts" @remove="removePost" v-if="!isFilmLoading" />
        <p v-else>Loading...</p>
      </main>
      <footer class="footer">
        <div class="footer-container"></div>
      </footer>
    </div>
  </template>
  
  <script>
  import RegisterForm from "@/components/Form/Form";
  import FormSearchFilm from "@/components/Form/FormSearchFilm/FormSearchFilm";
  import FilmList from "@/components/List/List";
  import ModalWindow from "@/components/Modal/ModalWindow";
  import { searchMovie, searchFilm } from "@/shared/services/movie-api";
  export default {
    components: {
      RegisterForm,
      FilmList,
      ModalWindow,
      FormSearchFilm,
    },
  
    data() {
      return {
        posts: [],
        visibleModal: false,
        isFilmLoading: false,
      };
    },
    methods: {
      createPost(post) {
        this.posts.push(post);
      },
      removePost(post) {
        this.posts = this.posts.filter((p) => p.id !== post.id);
      },
      showModal() {
        this.visibleModal = true;
      },
      hideModal() {
        this.visibleModal = false;
      },
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
  };
  </script>
  
  <style>

  
  .card-info-film {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 600px;
    padding: 20px;
  }
  
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
  .main {
    padding: 0 20px 0 20px;
    min-height: 100%;
    margin-bottom: -120px;
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
  
  .footer {
    padding-top: 60px;
    padding-bottom: 60px;
    position: fixed;
    left: 0;
    bottom: 0;
  
    background: #2f303a;
  }
  
  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
  }
  </style>
  