<template>
  <div>
    <h2>LOGIN:</h2>
    <div class="form">
      <div class="form__row">
        <BaseInput v-model="email" type="email" placeholder="Email..." />
      </div>

      <div class="form__row">
        <BaseInput
          v-model="password"
          type="password"
          placeholder="Password..."
        />
      </div>

      <p v-if="error" class="error">The username or password is incorrect</p>

      <div class="form__actions">
        <BaseButton @click="login">Sign In</BaseButton>
        <p>
          You don't have an account?
          <router-link :to="{ name: 'register' }">Register</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase";
import "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },

  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            this.$router.push({ name: "product-create" });
          },
          err => {
            this.error = err;
          }
        );
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
  margin-bottom: 30px;
}

a {
  text-decoration: underline;
}

.form {
  width: 500px;
  margin: 0 auto;

  .form__row + .form__row {
    margin-top: 15px;
  }

  .form__actions {
    text-align: center;
    margin: 30px 0 0;
  }

  .btn {
    width: 100%;
    margin-bottom: 20px;
    height: 44px;
  }
}
</style>
