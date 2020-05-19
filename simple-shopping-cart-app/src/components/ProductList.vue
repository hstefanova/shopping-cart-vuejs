<template>
  <div class="product-list">
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
      filteredResults: [...this.books]
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
    EventBus.$on("search-term", term => {
      this.searchForMatches(this.books, term);
    });
  }
};
</script>

<style></style>
