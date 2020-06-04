<template>
  <div class="example">
    <div class="form__field">
      <input
        type="email"
        v-model="email"
        placeholder="Email"
        @blur="$v.email.$touch()"
      />
      <button type="submit">submit</button>

      <div v-if="$v.email.$error">
        <p v-if="!$v.email.email">Please enter a valid email</p>
        <p v-if="!$v.email.required">The email is required</p>
      </div>
    </div>

    <div class="form__field">
      <input
        type="text"
        v-model="name"
        @blur="$v.name.$touch()"
        placeholder="Name"
      />

      <div v-if="$v.name.$error">
        <p v-if="!$v.name.required">The name is required</p>
        <p v-if="!$v.name.minLength">Please use more than 5 symbols</p>
      </div>
    </div>

    <div class="form__field">
      <input type="text" v-model="price" @blur="$v.price.$touch()" />

      <div v-if="$v.price.$error">
        <p v-if="!$v.price.required">The price is required</p>
        <p v-if="!$v.price.priceValidator">The price is not correct.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import { priceValidator } from "../validator/price";
export default {
  data() {
    return {
      email: null,
      name: "",
      price: ""
    };
  },
  validations: {
    email: {
      required,
      email
    },
    name: {
      required,
      minLength: minLength(5)
    },
    price: {
      required,
      priceValidator
    }
  }
};
</script>

<style scoped>
.example {
  margin-bottom: 50px;
}

.form__field + .form__field {
  margin-top: 20px;
}
</style>
