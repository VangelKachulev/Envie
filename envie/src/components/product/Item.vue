<template>
  <div class="product">
    <img :src="singleProductData.picture" alt="Product Image" class="product-image" />
    <h2 class="product-name">{{ singleProductData.name }}</h2>
    <p class="product-price">$ {{ singleProductData.price }}</p>

    <router-link class="button" :to="`/products/${singleProductData._id}`"
      >See More</router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    singleProductData: {
      type: Object,
      required: true,
    },
  },

};
5;
</script>

<style scoped>
.product {
  width: 230px;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  height: 300px;
}
.product:hover {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
}

.product h2 {
  margin-bottom: 8px;
  font-size: 1.5em;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.product p {
  margin-bottom: 28px;
  font-size: 1em;
}

.product-image {
  width: 70%;
  height: 50%;
  border-radius: 4px;
  margin-bottom: 10px;
  overflow: hidden;
}

.button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  text-decoration: none;
}

.button:hover {
  background-color: #0056b3;
}
</style>
