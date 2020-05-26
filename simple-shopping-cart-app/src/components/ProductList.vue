<template>
  <div class="product-list">
    <p v-if="searchTerm" class="hint">
      Found {{ filteredBooks.length }} results for search
      <em> {{ searchTerm }}</em>
    </p>
    <ProductListItem
      v-for="book in filteredBooks"
      :book="book"
      :key="book.id"
    ></ProductListItem>
  </div>
</template>

<script>
import ProductListItem from "./ProductListItem.vue";
import { EventBus } from "@/event-bus";
import BookService from "@/services/BookService";

export default {
  data() {
    return {
      books: [],
      searchTerm: ""
    };
  },
  components: {
    ProductListItem
  },
  methods: {
    fetchBooks() {
      BookService.getBooks()
        .then(response => {
          this.books = response.data;
        })
        .catch(err => "There is an error: " + err.response);
    }
  },
  computed: {
    filteredBooks: function() {
      return this.books.filter(book => {
        return (
          JSON.stringify(book)
            .toLowerCase()
            .indexOf(this.searchTerm.toLowerCase()) !== -1
        );
      });
    }
  },
  updated() {
    this.fetchBooks();
  },
  created() {
    this.fetchBooks();

    EventBus.$on("search-term", searchTerm => {
      this.searchTerm = searchTerm;
    });
  }
};
</script>

<style scoped>
.hint {
  padding: 14px 0;
}
</style>
