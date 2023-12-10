<template>
  <div class="list">
    <template v-if="products">
      <Item
        v-for="product of products"
        :key="product._id"
        :singleProductData="product"
        class="singleItem"
      />
    </template>
    <template v-else>
      <h1>Nothing</h1>
    </template>
  </div>
</template>

<script>
import Item from "./Item.vue";
import { getAll } from "../providers/allProductsList.js";

export default {
  data() {
    return {
      products:[],
    };
  },
  components: {
    Item,
  },
  async mounted() {
    const productsList = await getAll();

    console.log(productsList.data);
     this.products = productsList.data;
  //   for (const product of this.products) {
  //     console.log(product);
  //   }
   },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to the next row if necessary */
}
</style>
