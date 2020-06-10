<template>
  <div class="shell">
    <div class="main__body">
      <div class="main__inner">
        <Sidebar />

        <ProductList />
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList";
import Sidebar from "@/components/Sidebar";
export default {
  components: {
    ProductList,
    Sidebar
  }
};
</script>

<style lang="scss" scoped>
.main {
  .main__inner {
    display: flex;
    margin: 0 -15px;
  }

  .sidebar {
    width: 30%;
    margin: 0 15px;
  }
  .products {
    width: 70%;
    margin: 0 15px;
  }
}
</style>
