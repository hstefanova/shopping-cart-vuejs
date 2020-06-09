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

<style scoped>
.products {
  position: relative;
  padding: 60px 0;
}

.products .hint {
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px 0;
}

.products .products__inner {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: -20px;
}
.products .product {
  flex-basis: calc(33.33% - 40px);
  align-self: stretch;
  min-height: 260px;
  margin: 20px;
}
</style>
