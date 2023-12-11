<template>
  <div class="product">
    <img :src="singleProductData.picture" alt="Product Image" class="product-image" />
    <h2 class="product-name">{{ singleProductData.name }}</h2>
    <p class="product-price">{{ singleProductData.price }}</p>
    <p class="product-description">{{ singleProductData.description }}</p>
    <router-link :to="`/products/${singleProductData._id}`">See More</router-link>
    <!-- <button @click="seeMore" class="see-more-btn">See More</button> -->
  </div>
</template>

<script>
import { getSingleProduct } from "../../providers/productProvider.js";

import { mapActions } from "pinia";
import { useUserStore } from "../../store/userStore.js";
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
 
  methods: {
    ...mapActions(useUserStore, ["setProductData"]),
    async seeMore() {
      console.log(this.singleProductData);
      const dataForSingleItem = await getSingleProduct(this.singleProductData._id);
      this.setProductData(dataForSingleItem);
      // console.log(dataForSingleItem);
      this.$router.push(`/products/${this.singleProductData._id}`);
    },
  },
  computed: {},
};
5;
</script>

<style scoped>
.product {
  width: 250px; /* Set a fixed width for each product */
  padding: 15px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
}

.product img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
}

.product h3 {
  margin-bottom: 8px;
  font-size: 1.2em;
}

.product p {
  margin-bottom: 8px;
  font-size: 0.9em;
}

.product span {
  display: block;
  font-weight: bold;
  font-size: 1.1em;
  color: #333;
}

.product-image {
  width: 70%;
  height: 50;
  border-radius: 4px;
  margin-bottom: 10px;
}

.product-name {
  font-size: 1.2em;
  margin-bottom: 5px;
}

.product-price {
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.product-description {
  color: #666;
}
.see-more-btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.see-more-btn:hover {
  background-color: #0056b3;
}
</style>
