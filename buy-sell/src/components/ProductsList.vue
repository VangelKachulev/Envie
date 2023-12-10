<template>
  <div class="list">
    <Item
      v-for="product of products"
      :key="product._id"
      :singleProductData="product"
      class="singleItem"
    />
  </div>
</template>

<script>
import Item from "./Item.vue";
import { getAll } from "../providers/allProductsList.js";

export default {
  data() {
    return {
      products: [],
    };
  },
  components: {
    Item,
  },
  async created() {
    console.log(`eto`);
    const productsList = await getAll();
    console.log(productsList.data);
    this.products = productsList.data;
    // console.log(JSON.parse(productsList.data[0].body));
  },
};
</script>

<style scoped>
ul {
  display: flex; /* Use flexbox */
  flex-wrap: nowrap; /* Prevent wrapping to ensure items stay in a row */
  justify-content: space-between; /* Distribute space between items */
}
.list {
  display: flex;
}
</style>
