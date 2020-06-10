<template>
  <div>
    <h1>PRODUCT</h1>
    <h1>{{ id }}</h1>
    <p>{{ book.title }}</p>
  </div>
</template>

<script>
import BookService from "@/services/BookService";

export default {
  props: ["id"],
  data() {
    return {
      book: {}
    };
  },
  created() {
    BookService.getBook(this.id)
      .then(response => {
        this.book = response.data;
      })
      .catch(err => console.log("There was an error: " + err));
  }
};
</script>

<style lang="scss" scoped></style>
