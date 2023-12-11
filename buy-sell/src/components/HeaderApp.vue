<template>
  <header>
    <nav>
      <ul v-if="!userData">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">All Products</router-link></li>

        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contacts</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
      </ul>
      <ul v-else>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">All Products</router-link></li>
        <li><router-link to="/upload">Upload</router-link></li>
        <li><router-link to="/myads">My ads</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contacts</router-link></li>
        <li><a href="/" @click="exit">Exit</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapState, mapActions } from "pinia";

import { useUserStore } from "../store/userStore.js";

export default {
  computed: {
    ...mapState(useUserStore, ["userData"]),
  },

  methods: {
    ...mapActions(useUserStore, ["cleanData"]),
    exit() {
      console.log(`haha`);

      this.cleanData();
    },
  },
};
</script>

<style scoped>
header {
  margin: 0;
  background-color: rgba(0, 0, 0, 0.798);
  color: #e8e5e5;
  padding: 10px 20px;
}

nav ul {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-end;
  box-sizing: border-box;
  margin: 0px -3px;
}

li {
  margin-right: 20px;
  list-style-type: none;
  font-size: 24px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

nav ul li a {
  text-decoration: none;
  color: #fff;
}

nav ul li a:hover {
  text-decoration: underline;
}
</style>
