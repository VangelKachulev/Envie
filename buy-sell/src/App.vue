<script>
import Header from "./components/Header.vue";
import Footer from "./components/views/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <Header/>
  <router-view/>

  <Footer/>
</template>

<style scoped></style>
