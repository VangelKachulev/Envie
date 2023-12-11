<template>
  <div class="list">
    <template v-if="myAds.length > 0">
      <Item
        v-for="ad of myAds"
        :key="ad._id"
        :singleProductData="ad"
        class="singleItem"
      />
    </template>
    <template v-else>
      <h1>You don't have active ads.</h1>
    </template>
  </div>
</template>

<script>
import Item from "../product/Item.vue";
import { getAll } from "../../providers/productProvider";
import { mapActions } from "pinia";
import { useUserStore } from "../../store/userStore.js";

export default {
  data() {
    return {
      myAds: [],
    };
  },
  components: {
    Item,
  },
  computed: {},
  methods: {
    ...mapActions(useUserStore, ["getData"]),
  },
  async mounted() {
    const productsList = await getAll();
    const userData = this.getData();

    this.myAds = productsList.data.filter((x) => x._ownerId === userData.data._id);
  },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to the next row if necessary */
}
</style>
