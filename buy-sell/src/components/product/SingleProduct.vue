<template>
  <div>
    <img :src="currentProduct.picture" alt="Product Image" class="product-image" />
    <h2 class="product-name">{{ currentProduct.name }}</h2>
    <p class="product-price">{{ currentProduct.price }}</p>
    <p class="product-description">{{ currentProduct.description }}</p>
    <div v-if="userIsLogged">
      <button>Edit</button>
      <button>Delete</button>
    </div>
  </div>
</template>

<script>
import { getSingleProduct } from "../../providers/productProvider.js";
import { mapState } from "pinia";
import { useUserStore } from "../../store/userStore.js";
export default {
  data() {
    return {
      currentProduct: {},
    };
  },
  computed: {
    userIsLogged(){
      return this.userData && this.userData.data._id == this.currentProduct._ownerId
    },
    ...mapState(useUserStore, ["userData"]),
  },
  async mounted() {
    const currentid = this.$route.params.id;
    const dataForSingleItem = await getSingleProduct(currentid);
    this.currentProduct = dataForSingleItem.data;
  },
};
</script>

<style scoped></style>
