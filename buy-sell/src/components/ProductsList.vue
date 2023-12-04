<template>
<div>
  <Item/>

</div>
</template>

<script>
import Item from "./Item.vue";
export default {
  data() {
    return {
      products: [],
      datas: "Vangel",
    };
  },
  components: {
    Item,
  },
};
</script>

<style lang="scss" scoped></style>
