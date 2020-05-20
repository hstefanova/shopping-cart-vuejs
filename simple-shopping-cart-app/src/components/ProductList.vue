<template>
  <div class="product-list">
    <p v-if="term" class="hint">
      Found {{ filteredResults.length }} results for search <em> {{ term }}</em>
    </p>
    <ProductListItem
      v-for="book in filteredResults"
      :book="book"
      :key="book.id"
    ></ProductListItem>
  </div>
</template>

<script>
import ProductListItem from "./ProductListItem.vue";
import { EventBus } from "@/event-bus";
export default {
  props: ["books"],
  data() {
    return {
      filteredResults: [...this.books],
      term: ""
    };
  },
  components: {
    ProductListItem
  },
  methods: {
    searchForMatches: function(arr, searchTerm) {
      this.filteredResults = arr.filter(
        obj =>
          JSON.stringify(obj)
            .toLowerCase()
            .indexOf(searchTerm.toLowerCase()) !== -1
      );
    }
  },
  created() {
    EventBus.$on("search-term", searchTerm => {
      this.searchForMatches(this.books, searchTerm);
      this.term = searchTerm;
    });
  }
};
</script>

<style scoped>
.hint {
  padding: 14px 0;
}
</style>
