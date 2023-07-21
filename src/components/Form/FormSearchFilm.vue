<template>
  <form class="SearchForm" @submit.prevent>
    <input
      v-model="nameFilm"
      class="SearchFormInput"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search movie"
    />
    <button @click="searchFilm" class="btn" type="submit">Search</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      nameFilm: "",
    };
  },
  methods: {
    searchFilm() {
      this.$emit("search", this.nameFilm);
      this.nameFilm = "";
    },
  },
};
</script>

<style scoped>
.SearchForm {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
}

.SearchFormInput {
  display: inline-block;
  padding: 5px;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border-color: #3f51b5;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
}

.SearchFormInput::placeholder {
  font: inherit;
  font-size: 18px;
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

@media screen and (max-width: 420px) {
  .SearchForm{
    flex-direction: column;
    align-items: flex-start;
    margin-right: 10px;
  }
}

@media screen and (max-width: 720px) {
  .btn{
    padding: 8px 5px;
    min-width: 100px;
    margin-right: 15px;
  }
}
</style>
