<template>
  <div class="list">
    <template v-if="productsCheck">
      <Item
        v-for="product of products"
        :key="product._id"
        :singleProductData="product"
        class="singleItem"
      />
    </template>
    <template v-else>
      <h1>There is no active ads.</h1>
    </template>
  </div>
</template>

<script>
import Item from "./Item.vue";
import { getAll } from "../../providers/productProvider.js";

export default {
  data() {
    return {
      products: [],
    };
  },
  components: {
    Item,
  },
  computed: {
    productsCheck() {
      return this.products.length > 0;
    },
  },
  async mounted() {
    const productsList = await getAll();
    this.products = productsList.data;
  },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to the next row if necessary */
}
</style>
