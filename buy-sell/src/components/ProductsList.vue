<template>
  <div>
    <h1>Products</h1>
    <router-link :to="'/product1'">SingleProduct</router-link>
    <h1>asd</h1>
    <button @click="sendData"></button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: [],
      datas:'Vangel'
    };
  },
//   methods: {
//     async sendData() {
//       //   const { data } = await axios.post("http://localhost:3030/data/bikes/", {
//       //     method: "POST",
//       //     headers: {
//       //       "content-type": "application/json",
//       //     },
//       //     body: JSON.stringify(data),
//       //   });
//       const { data } = await axios.post("http://localhost:3030/data/bikes/", this.datas, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//     },
//   },
  //   async created() {
  //     try {
  //       const response = await axios.get(`http://localhost:3030/data/bikes/`);
  //       console.log(response);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   },
};
</script>

<style lang="scss" scoped></style>
