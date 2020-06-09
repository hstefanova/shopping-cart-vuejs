<template>
  <div>
    <div class="main__body">
      <div class="shell">
        <ProductList />
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList";
export default {
  components: {
    ProductList
  }
};
</script>

<style scoped></style>
