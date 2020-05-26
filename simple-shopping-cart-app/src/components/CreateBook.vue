<template>
  <div class="form-create">
    <h3 class="form__title">Add new book to store:</h3>

    <form action="" @submit.prevent="createBook">
      <div class="form__row">
        <label class="hidden">Title: </label>
        <input type="text" class="form__field" v-model="book.title" placeholder="Title"/>
      </div>

      <div class="form__row">
        <label class="hidden">Author:</label>
        <input type="text" class="form__field" v-model="book.author" placeholder="Author" />
      </div>

      <div class="form__row">
        <label class="hidden">Price:</label>
        <input type="text" class="form__field" v-model="book.price" placeholder="Price" />
      </div>

      <p v-if="errors.length">
        <strong>Please correct the following error(s):</strong>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>

      <div class="form__actions">
        <button type="submit" class="btn btn--transparent form__btn">Create</button>
      </div>
    </form>
  </div>
</template>
<script>

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
        this.$store.dispatch('createBook', this.book).then(() => {
        this.book = this.createBookObject()

        }).catch(() => console.log("There was a problem"))
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

<style scoped>
.form-create {
  width: 300px;
}

.form-create input,
.form-create button {
  width: 100%;
  height: 40px;
}

.form-create .form__title {
  margin-bottom: 10px;
}

.form-create .form__btn {
  margin-top: 15px;
}
.form-create .form__row + .form__row {
  margin-top: 10px;
}
</style>
