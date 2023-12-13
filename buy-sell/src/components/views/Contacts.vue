<template>
  <div>
    <h1>Find us</h1>
    <div class="container">
      <a href="https://www.facebook.com/" target="_blank">
        <font-awesome-icon class="icon" icon="fa-brands fa-square-facebook" size="2xl" />
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <font-awesome-icon class="icon" icon="fa-brands fa-instagram" size="2xl" />
      </a>

      <a href="https://www.twitter.com/" target="_blank">
        <font-awesome-icon class="icon" icon="fa-brands fa-square-twitter" size="2xl" />
      </a>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faInstagram,
  faFacebookSquare,
  faTwitterSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"; // Import the Facebook icon from brands
// Add the imported icons to the library
library.add(faFacebookSquare, faInstagram, faTwitterSquare, faLinkedinIn);

export default {
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 3rem;
}
.icon {
  font-size: 10rem;
  margin: 1.5rem;
  color: #007bff;
}
.icon:hover {
  color:   rgba(248, 198, 112, 0.891);
  cursor: pointer;
}
.container {
  display: flex;
  border-radius: 10px;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
</style>
