<template>
  <div class="section-favs">
    <div class="shell">
      <div class="products">
        <div class="products__inner">
          <ProductListItem
            v-for="book in favBooks"
            :book="book"
            :key="book.id"
          ></ProductListItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductListItem from "../components/ProductListItem";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["favBooks"])
  },
  components: {
    ProductListItem
  }
};
</script>

<style lang="scss" scoped></style>
