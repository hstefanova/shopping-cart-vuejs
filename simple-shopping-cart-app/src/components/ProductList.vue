<template>
  <div class="product-list">
    <p v-if="term" class="hint">
      Found {{ booksResult.length }} results for search
      <em> {{ term }}</em>
    </p>
    <ProductListItem
      v-for="book in booksResult"
      :book="book"
      :key="book.id"
    ></ProductListItem>
  </div>
</template>

<script>
import ProductListItem from "./ProductListItem.vue";
import { EventBus } from "@/event-bus";
import BookService from "@/services/BookService";

// import { mapState } from "vuex";

export default {
  data() {
    return {
      books: [],
      booksResult: [],
      term: ""
    };
  },
  components: {
    ProductListItem
  },
  // computed: mapState(["books", "booksResult"]),
  methods: {
    searchForMatches: function(arr, searchTerm) {
      this.booksResult = arr.filter(
        obj =>
          JSON.stringify(obj)
            .toLowerCase()
            .indexOf(searchTerm.toLowerCase()) !== -1
      );
    }
  },
  created() {
    BookService.getBooks()
      .then(response => {
        this.books = response.data;
        this.booksResult = [...this.books];
      })
      .catch(err => "There is an error: " + err.response);

    EventBus.$on("search-term", searchTerm => {
      this.searchForMatches(this.books, searchTerm);
      this.term = searchTerm;
    });
  }
  // updated() {
  //   this.booksResult = [...this.books];
  // }
};
</script>

<style scoped>
.hint {
  padding: 14px 0;
}
</style>
