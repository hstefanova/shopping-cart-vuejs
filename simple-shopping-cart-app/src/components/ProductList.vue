<template>
  <div class="product-list">
    <p v-if="term" class="hint">
      Found {{ booksByTerm.length }} results for search:
      <em> {{ term }}</em>
    </p>
    <ProductListItem
      v-for="book in booksByTerm"
      :book="book"
      :key="book.id"
    ></ProductListItem>
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
.hint {
  padding: 14px 0;
}
</style>
