<template>
  <div class="upload-product">
    <form @submit.prevent="uploadProduct" enctype="multipart/form-data">
      <div class="form-group">
        <label for="productName">Product Name:</label>
        <input type="text" id="productName" v-model="product.name" required />
      </div>
      <div class="form-group">
        <label for="productPrice">Product Price:</label>
        <input type="number" id="productPrice" v-model="product.price" required />
      </div>
      <div class="form-group">
        <label for="productPicture">Product Picture:</label>
        <input type="text" id="productPicture" v-model="product.picture" required />
      </div>
      <div class="form-group">
        <label for="productDescription">Product Description:</label>
        <textarea
          id="productDescription"
          v-model="product.description"
          required
        ></textarea>
      </div>
      <button type="submit">Upload Product</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useUserStore } from "../../store/userStore.js";
import { uploadProduct } from "../../providers/productProvider.js";

import { useAllProducts } from "../../store/productStore.js";
export default {
  data() {
    return {
      product: {
        name: "",
        price: 0,
        picture: "",
        description: "",
      },
    };
  },
  methods: {
    ...mapActions(useUserStore, ["getData"]),
    
    ...mapActions(useAllProducts, ["addProduct"]),

    async uploadProduct() {
      let profileData = this.getData();

      const productData = await uploadProduct(profileData.data.accessToken, this.product);

      this.addProduct(productData);
      this.$router.push("/products");
    },
    // handleFileUpload(event) {
    //   const file = event.target.files[0];
    //   this.product.picture = file;
    // },
  },
};
</script>

<style scoped>
.upload-product {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
input[type="number"],
textarea,
button {
  width: 100%;
  padding: 8px;
  font-size: 1em;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-top: 4px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
</style>
