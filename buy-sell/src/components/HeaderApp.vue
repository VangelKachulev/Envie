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
  margin: 15px 0;

  
  padding: 25px 25px;
  
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
  display: flex; 
  align-items: center;
  justify-content: center; 
  margin-right: 20px;
  width: 140px;
  height: 30px;
  list-style-type: none;
  text-align: center;

  font-size: 17px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  border-radius: 15px;
  padding: 10px;
  color: rgb(0, 0, 0);
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
}
li:hover{
  border-radius: 15px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
 
}

nav ul li a {
  text-decoration: none;
  color: #131111;
  font-weight: bold;
}


</style>
