<template>
    <div class="product">
      <img src="https://rodais.com/cdn/shop/files/enviecandleweb.jpg?v=1683049624&width=1920" alt="Product Image" class="product-image" />
      <h2 class="product-name">Candle</h2>
      <p class="product-price">25лв</p>
      <p class="product-description">Scented candle.</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .product {
    border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  max-width: 300px;
  }
  
  .product-image {
    max-width: 100%;
    height: auto;
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
  </style>
  