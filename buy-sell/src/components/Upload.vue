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
        <input type="file" id="productPicture" @change="handleFileUpload" required />
      </div>
      <div class="form-group">
        <label for="productDescription">Product Description:</label>
        <textarea id="productDescription" v-model="product.description" required></textarea>
      </div>
      <button type="submit">Upload Product</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: '',
        price: 0,
        picture: null,
        description: ''
      }
    };
  },
  methods: {
    uploadProduct() {
      // Here you can handle the form submission logic
      // Access the product details from `this.product`
      console.log('Product to be uploaded:', this.product);
      // You can send this data to your backend for processing
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.product.picture = file;
    }
  }
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
