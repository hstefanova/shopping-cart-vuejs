<template>
  <div class="shell">
    <div class="main__body">
      <SearchBar />
      <p>test</p>

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
import SearchBar from "@/components/SearchBar";
export default {
  components: {
    ProductList,
    Sidebar,
    SearchBar
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
    width: 20%;
    margin: 0 15px;
  }
  .products {
    width: 80%;
    margin: 0 15px;
  }

  .search {
    margin: 50px auto;
    width: 50%;
    // margin: 0 auto;
  }
}
</style>
