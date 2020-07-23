<template>
  <div class="shell">
    <div class="main__body">
      <div class="main__inner">
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

<style lang="scss">
.main {
  padding: 50px 0;

  .search {
    margin: 0px auto 50px;
    width: 50%;
  }
}
</style>
