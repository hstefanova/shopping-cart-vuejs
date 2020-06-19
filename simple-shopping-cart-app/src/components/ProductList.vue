<template>
  <div class="products">
    <div class="products__inner">
      <BaseProduct
        v-for="book in booksByTerm"
        :book="book"
        :key="book.id"
      ></BaseProduct>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["booksByTerm"])
  },
  created() {
    this.$store.dispatch("fetchBooks");
  }
};
</script>

<style lang="scss">
.products {
  position: relative;
  // padding: 60px 0;

  .hint {
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px 0;
  }

  .products__inner {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: -10px;
  }

  .product {
    flex-basis: calc(25% - 20px);
    align-self: stretch;
    min-height: 260px;
    margin: 10px;
  }
}
</style>
