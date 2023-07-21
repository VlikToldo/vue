<template>
  <div class="movie-card">
    <h1 class="movie-title">{{ this.infoMovie.title }}</h1>
    <div class="movie-card-info">
      <div class="container-img">
        <img class="img" :src="`https://image.tmdb.org/t/p/w400${this.infoMovie.poster_path}`" alt="" />
      </div>
      <div class="container-info">
        <h3 class="movie-name"><strong>Title: </strong>{{ this.infoMovie.title }}</h3>
        <p class="movie-genre"><strong>Genre: </strong>{{ this.findGenres(this.infoMovie.genres) }}</p>
        <p class="movie-release-date"><strong>Release date: </strong>{{this.infoMovie.release_date}}</p>
        <p class="movie-popularity"><strong>Rating: </strong>{{Math.round(this.infoMovie.vote_average)}}</p>
        <p class="movie-Revenue"><strong>Revenue: </strong>{{Math.round(this.infoMovie.revenue)}} $</p>
        <h3 class="movie-overview">Overview: </h3><p>{{this.infoMovie.overview}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { searchInfo } from "../shared/services/movie-api";
export default {
  data() {
      return {
        infoMovie: {},
      };
    },
  
  methods: {
    // Пошук розкритої інформації на фільм 
    async searchInfo() {
      const movieId = this.$route.params.movieId;
      try {
        this.isFilmLoading = true;
        const data = await searchInfo(movieId);
        this.infoMovie = {...data}
      } catch (error) {
        console.log(error.message);
      } finally {
        this.isFilmLoading = false;
      }
    },
    // Мепає масив з отриманих жанрів 
    findGenres (genresArr) {
    if (genresArr) {
      const genre = genresArr.map(genre => genre.name).join(', ');
      return genre;
    }
  }
  },
  mounted() {
      this.searchInfo();
    },
};
</script>

<style scoped>
.movie-card{
  margin-bottom: 20px;
}
.movie-title{
  margin-bottom: 10px;
  color: #3f51b5;
}
.container-info{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.movie-card-info{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap:20px;
  padding: 0;
}
.container-img{
  max-width: 400px;
  min-width: 250px;
  overflow: hidden;
}
.img{
  max-width: 100%;
  height: auto;
  display: block;
}

@media screen and (max-width: 767px) {
  .movie-card-info{
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:10px;
  }

  .container-img{
    
  }

}



</style>
