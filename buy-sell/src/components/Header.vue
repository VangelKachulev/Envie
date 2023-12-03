<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">All Products</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contacts</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <!-- <li><a href="#" @click="login">Login</a></li> -->
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

nav ul li {
  margin-right: 20px;
}

nav ul li a {
  text-decoration: none;
  color: #fff;
}

nav ul li a:hover {
  text-decoration: underline;
}
</style>
