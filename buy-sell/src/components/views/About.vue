<template>
  <div>
    <p class="welcome">Welcome to Buy&Sell!</p>
    <p>
      At Buy&Sell, we're passionate about connecting buyers and sellers in a seamless,
      user-friendly marketplace. Our platform is designed to make buying and selling easy,
      efficient, and enjoyable for everyone involved.
    </p>
    <p class="ourstory">Our Story</p>
    <p>
      Founded with a vision to revolutionize the way people trade goods, Buy&Sell!
      began as a simple idea among friends. We understood the frustration of traditional
      selling methods and saw an opportunity to create a platform that simplifies the
      process, making it accessible to all.
    </p>

    <img src="./about.jpg" alt="" />
  </div>
</template>

<script>

export default {
 
};
</script>

<style scoped>
div {
  display: flex;
  width: 1920;
  justify-content: center;
  position: relative;
}
img {
  height: 70vh;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border-radius: 10px;
}
p {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.5rem;
  position: absolute;
  width: 400px;
  left: 450px;
  top: 90px;
}
.welcome {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.5rem;
  position: absolute;
  width: 250px;
  left: 450px;
  top: 40px;
}
p:last-of-type {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.5rem;
  position: absolute;
  width: 400px;
  left: 450px;
  top: 370px;
}
.ourstory {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.5rem;
  position: absolute;
  width: 400px;
  left: 450px;
  top: 320px;
}
</style>
