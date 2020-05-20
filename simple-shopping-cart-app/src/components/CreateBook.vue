<template>
  <div class="form-book">
    <h3>Create Book:</h3>

    <form action="" @submit.prevent="createBook">
      <div class="form__row">
        <label>Book Title: {{ book.title }}</label>
        <input type="text" v-model="book.title" />
      </div>

      <div class="form__row">
        <label>Book Author:</label>
        <input type="text" v-model="book.author" />
      </div>

      <div class="form__row">
        <label>Book Price:</label>
        <input type="text" v-model="book.price" />
      </div>

      <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </p>

      <div class="form__actions">
        <button type="submit">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
import BookService from "@/services/BookService";

export default {
  data() {
    return {
      errors: [],
      book: this.createBookObject()
    };
  },
  methods: {
    createBook: function() {
      if (this.book.title && this.book.author && this.book.price) {
        BookService.postBook(this.book);
      }
      this.errors = [];

      if (!this.book.title) {
        this.errors.push("Title is required.");
      }

      if (!this.book.author) {
        this.errors.push("Author is required.");
      }

      if (!this.book.price) {
        this.errors.push("Please add a price.");
      } else {
        this.book.price = parseFloat(this.book.price)
      }

      
    },
    createBookObject: function() {
      const id = Math.floor(Math.random() * 100000);
      return {
        id: id,
        title: "",
        author: "",
        price: ""
      };
    }
  }
};
</script>

<style></style>
