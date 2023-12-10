<template>
  <div class="product">
    <img
     
      :src="singleProductData.picture"
      alt="Product Image"
      class="product-image"
    />
    <h2 class="product-name">{{ singleProductData.name }}</h2>
    <p class="product-price">{{ singleProductData.price }}</p>
    <p class="product-description">{{ singleProductData.description }}</p>
    <!-- <img v-if="singleProductData.image" :src="productImageUrl" alt="Uploaded Image" /> -->
    <button @click="seeMore" class="see-more-btn">See More</button>
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
  computed: {
    
  },
};5
</script>

<style scoped>
.product {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  width: 200px;
  height: 360px;
  
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
