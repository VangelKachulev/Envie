<script>
import HeaderApp from "./components/HeaderApp.vue";
import Footer from "./components/views/Footer.vue";

export default {
  components: {
    HeaderApp,
    Footer,
  },
};
</script>

<template>
  <div>
    <HeaderApp />
    <main>
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<style scoped></style>
