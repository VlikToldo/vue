<template>
  <div class="app">
    <header-layout />
    <main>
      <router-view></router-view>
    </main>
    <footer-layout/>
  </div>

</template>

<script>
import HeaderLayout from "@/components/Header/Header";
import FooterLayout from "@/components/Footer/Footer"

export default {
  components: {
    HeaderLayout,
    FooterLayout
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

ul,
li {
  list-style: none;
}
.app{
  display: grid;
  grid-template-rows: auto 1fr auto; 
  min-height: 100vh;
}

main {
  padding: 0 20px 0 20px;
}
</style>
