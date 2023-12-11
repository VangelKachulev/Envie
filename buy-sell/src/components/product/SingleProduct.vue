<template>
  <div>
    <h1>{{ currentProduct.name }}</h1>
  </div>
</template>

<script>
import { getSingleProduct } from "../../providers/productProvider.js";

export default {
  data() {
    return {
      currentProduct: {},
    };
  },
  async mounted() {
    console.log(this.$route.params.id);
    const currentid = this.$route.params.id;
    const dataForSingleItem = await getSingleProduct(currentid);
    console.log(dataForSingleItem.data);
    this.currentProduct = dataForSingleItem.data;
  },
};
</script>

<style lang="scss" scoped></style>
