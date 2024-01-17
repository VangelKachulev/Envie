<template>
  <header>
    <h1 class="promotion">And all orders $100 or more receive a FREE candle!</h1>
    <section class="logo">
      <div class="icons-1">
        <i class="material-icons">search</i>
      </div>
      <div class="envie">
        <div>ENVIE</div>
        <span class="creating">-creating oportunity-</span>
      </div>
      <div class="icons-2">
        <router-link class="loginButton" to="/login"
          ><i class="material-icons">person</i></router-link
        >
        <!-- <i class="material-icons">person</i> -->
        <i class="material-icons">shopping_cart</i>
      </div>
    </section>
    <nav>
      <div v-if="!userData">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/products">Candles and more</router-link></li>

          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contacts</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
          <li><router-link to="/register">Register</router-link></li>
        </ul>
        
      </div>
      <div v-else>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/products">Candles and more</router-link></li>
          <li><router-link to="/upload">Upload</router-link></li>
          <li><router-link to="/myads">My ads</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contacts</router-link></li>
          <li><a href="/" @click="exit">Exit</a></li>
        </ul>
        <h3>Welcome {{ userData.data.email }} !</h3>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { logout } from "../../../providers/auth";
import { useUserStore } from "../../../store/userStore.js";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faInstagram,
  faFacebookSquare,
  faTwitterSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
library.add(faFacebookSquare, faInstagram, faTwitterSquare, faLinkedinIn);

export default {
  components: {
    FontAwesomeIcon,
  },
  computed: {
    ...mapState(useUserStore, ["userData"]),
    ...mapActions(useUserStore, ["cleanData"]),
  },

  methods: {
    async exit() {
      await logout(this.userData.accessToken);
      this.cleanData();
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC&family=Pathway+Gothic+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC&family=Pathway+Gothic+One&family=Satisfy&display=swap");
.promotion {
  background-color: #d69f92;
  color: #ffffff;

  font-size: 1rem;
  padding: 1rem;
  font-family: "Tenor Sans", sans-serif;
  font-weight: 100;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
header {
  
  border-bottom: 1px solid rgb(214, 211, 211);
  padding-bottom: 8px;
}
.logo {
  display: flex;
  justify-content: space-around;
  width: 100%;
  text-align: center;
  padding: 20px 20px;
}
.icons-2 {
  display: flex;

  align-items: center;
  color: #131111;
}
.loginButton {
  margin-right: 1rem;
  color: #131111;
}
.icons-1 {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #131111;
}

.material-icons {
  font-weight: 100;
}

.envie {
  font-family: "Amatic SC", sans-serif;
  font-family: "Pathway Gothic One", sans-serif;
  font-size: 50px;
  letter-spacing:14px;
  color: #131111;
}
.creating {
  font-size: 30px;
  font-family: "Amatic SC", sans-serif;
  font-family: "Pathway Gothic One", sans-serif;
  font-family: "Satisfy", cursive;
 
  letter-spacing:5px;
}
ul {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;

  box-sizing: border-box;
  margin: 0px -3px;
}

li {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 180px;
  height: 30px;
  list-style-type: none;
  text-align: center;

  color: #ffffff;

  font-size: 0.9rem;

  font-family: "Tenor Sans", sans-serif;
  font-weight: 100;
 
}

nav ul li a {
  text-decoration: none;
  color: #131111;
  text-transform: uppercase;
}
</style>
