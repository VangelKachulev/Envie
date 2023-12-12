<template>
  <div class="product-main">
    <img :src="currentProduct.picture" alt="Product Image" class="product-image" />
    <h2 class="product-name">{{ currentProduct.name }}</h2>
    <p class="product-price">Price:{{ currentProduct.price }}</p>
    <p class="product-description">Description:{{ currentProduct.description }}</p>
    <div v-if="userIsLogged">
      <button @click="editProduct">Edit</button>
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
    userIsLogged() {
      return this.userData && this.userData.data._id == this.currentProduct._ownerId;
    },
    ...mapState(useUserStore, ["userData"]),
  },
  methods:{
    editProduct(){
      console.log(this.currentProduct._id);
      this.$router.push(`/products/edit/${this.currentProduct._id}`);
    }
  },
  async mounted() {
    const currentid = this.$route.params.id;
    const dataForSingleItem = await getSingleProduct(currentid);
    this.currentProduct = dataForSingleItem.data;
  },
};
</script>

<style scoped>
.product-main {
  height: 300px;
}
.product-image {
  height: 200px;
}
</style>
