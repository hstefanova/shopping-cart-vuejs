<template>
  <div class="form-create">
    <h3 class="form__title">Add new book to store:</h3>

    <form action @submit.prevent="createBook">
      <div class="form__row">
        <BaseInput
          v-model="book.title"
          type="text"
          placeholder="Book title"
          :class="{ error: $v.book.title.$error }"
          @blur="$v.book.title.$touch()"
        />

        <template v-if="$v.book.title.$error">
          <p v-if="!$v.book.title.required" class="error">
            The book title is required
          </p>
        </template>
      </div>

      <div class="form__row">
        <BaseInput
          v-model="book.author"
          type="text"
          placeholder="Author"
          :class="{ error: $v.book.author.$error }"
          @blur="$v.book.author.$touch()"
        />

        <template v-if="$v.book.author.$error">
          <p v-if="!$v.book.author.required" class="error">
            The book author is required
          </p>
        </template>
      </div>

      <div class="form__row">
        <BaseInput
          v-model="book.type"
          type="text"
          placeholder="Book type"
          :class="{ error: $v.book.type.$error }"
          @blur="$v.book.type.$touch()"
        />

        <template v-if="$v.book.type.$error">
          <p v-if="!$v.book.type.required" class="error">
            The book type is required
          </p>
        </template>
      </div>

      <div class="form__row">
        <BaseInput
          v-model="book.price"
          type="text"
          placeholder="Book Price"
          :class="{ error: $v.book.price.$error }"
          @blur="$v.book.price.$touch()"
        />

        <template v-if="$v.book.price.$error">
          <p v-if="!$v.book.price.required" class="error">
            The book price is required
          </p>

          <p v-if="!$v.book.price.priceValidator">The price is not correct.</p>
        </template>
      </div>

      <div class="form__row">
        <BaseInput
          v-model="book.imageSrc"
          type="text"
          placeholder="Book cover"
        />
      </div>

      <div class="form__row">
        <BaseInput
          v-model="book.shortDescription"
          type="text"
          placeholder="Book short description"
          :class="{ error: $v.book.shortDescription.$error }"
          @blur="$v.book.shortDescription.$touch()"
        />

        <template v-if="$v.book.shortDescription.$error">
          <p v-if="!$v.book.shortDescription.required" class="error">
            The book short description is required
          </p>
        </template>
      </div>

      <div class="form__row">
        <BaseTextarea
          v-model="book.description"
          placeholder="Add book description here"
        />
      </div>

      <div class="form__actions">
        <BaseButton type="submit" :disabled="$v.$anyError" btnClass="form__btn">
          Create Book
        </BaseButton>

        <p v-if="$v.$anyError">Please fill out the required field(s).</p>
      </div>
    </form>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";
import { priceValidator } from "../validator/price";

export default {
  data() {
    return {
      errors: [],
      book: this.createBookObject()
    };
  },
  methods: {
    createBook: function() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$store
          .dispatch("createBook", this.book)
          .then(() => {
            this.book = this.createBookObject();
            this.$v.$reset();
          })
          .catch(() => console.log("There was a problem"));
      }
    },
    createBookObject: function() {
      return {
        title: "",
        author: "",
        price: "",
        type: "",
        imageSrc: "",
        shortDescription: "",
        description: ""
      };
    }
  },

  validations: {
    book: {
      title: { required },
      author: { required },
      type: { required },
      price: {
        required,
        priceValidator
      },
      shortDescription: { required }
    }
  }
};
</script>

<style scoped>
.error {
  color: blue;
  font-weight: bold;
}
.form-create {
  width: 300px;
}

.form-create .form__title {
  margin-bottom: 10px;
}

.form-create .form__btn {
  width: 100%;
  margin-top: 15px;
  height: 44px;
}
.form-create .form__row + .form__row {
  margin-top: 10px;
}
</style>
