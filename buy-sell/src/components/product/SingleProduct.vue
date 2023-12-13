<template>
  <div class="product-main">
    <img :src="currentProduct.picture" alt="Product Image" class="product-image" />
    <div class="product-info">
      <h2 class="product-name">{{ currentProduct.name }}</h2>
      <p class="product-price">Price: $ {{ currentProduct.price }}</p>
      <p class="product-description">Description:{{ currentProduct.description }}</p>
      <div v-if="userIsLogged">
        <button @click="editProduct">Edit</button>
        <button @click="removeItem">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getSingleProduct, deleteProduct } from "../../providers/productProvider.js";
import { mapState, mapActions } from "pinia";
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
    ...mapActions(useUserStore, ["deleteSingleProduct"]),
  },
  methods: {
    editProduct() {
      console.log(this.currentProduct._id);
      this.$router.push(`/products/edit/${this.currentProduct._id}`);
    },
    async removeItem() {
      const confirmation = window.confirm("Are you sure you want to delete this ad?");
      console.log(this.userData.data.accessToken);
      console.log(this.currentProduct._id);
      if (confirmation) {
        console.log(`yes`);
        const res = await deleteProduct(
          this.userData.data.accessToken,
          this.currentProduct._id
        );
        // this.deleteSingleProduct(this.currentProduct._id);
        console.log(res);
        this.$router.push(`/myads`);
      }
    },
  },
  async mounted() {
    const currentid = this.$route.params.id;
    const dataForSingleItem = await getSingleProduct(currentid);
    this.currentProduct = dataForSingleItem.data;
    console.log(dataForSingleItem);
  },
};
</script>

<style scoped>
.product-main {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  width: 1900px;
  height: 100vh;
  background-color: rgba(213, 217, 220, 0.261);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.product-image {
  height: 50vh;
  width: auto;
  margin: 20px 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.product-info {
  width: 50%;
}
.product-info > div {
  text-align: center;
  display: flex;
  justify-content: center;
}
.product-name {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 2rem;
  text-align: center;
}
.product-description {
  text-align: center;
  font-size: 1rem;
}
.product-price {
  text-align: center;
  font-size: 2rem;
}
button {
  margin: 30px 5px;
  width: 100px;
  border-radius: 10px;
  font-size: 1rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  text-decoration: none;
}
</style>
