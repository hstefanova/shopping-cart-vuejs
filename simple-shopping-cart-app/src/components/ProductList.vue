<template>
  <div class="products">
    <p v-if="term" class="hint">
      Found {{ booksByTerm.length }} results for search:
      <em> {{ term }}</em>
    </p>

    <div class="products__inner">
      <ProductListItem
        v-for="book in booksByTerm"
        :book="book"
        :key="book.id"
      ></ProductListItem>
    </div>
  </div>
</template>

<script>
import ProductListItem from "./ProductListItem.vue";
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    ProductListItem
  },
  computed: {
    ...mapState(["term"]),
    ...mapGetters(["booksByTerm"])
  },
  created() {
    this.$store.dispatch("fetchBooks");
  }
};
</script>

<style lang="scss" scoped>
.products {
  position: relative;
  padding: 60px 0;

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
