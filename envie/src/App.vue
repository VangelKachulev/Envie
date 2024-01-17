<script>
import HeaderApp from "./components/views/Header/HeaderApp.vue";
import Footer from "./components/views/Footer/Footer.vue";

export default {
  components: {
    HeaderApp,
    Footer,
  },
};
</script>

<template>
  <div class="main">
    <HeaderApp  />
    <main>
      <router-view />
    </main>

    <!-- <Footer /> -->
  </div>
</template>

<style scoped>
.main{
  box-sizing: border-box;
  padding: 0px;
  margin:-11px;
}
</style>
