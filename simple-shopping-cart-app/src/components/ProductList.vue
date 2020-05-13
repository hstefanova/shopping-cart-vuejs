<template>
  <div class="product-list">
    <ProductListItem
      v-for="book in books"
      :book="book"
      :key="book.id"
    ></ProductListItem>
  </div>
</template>

<script>
import ProductListItem from "./ProductListItem.vue";

export default {
  props: ["books"],
  components: {
    ProductListItem
  }
};
</script>

<style></style>
