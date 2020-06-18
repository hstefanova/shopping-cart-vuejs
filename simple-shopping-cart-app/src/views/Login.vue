<template>
  <div>
    <h2>Sign In:</h2>
    <div class="form">
      <div class="form__row">
        <BaseInput
          label="Enter your email:"
          v-model="email"
          type="email"
          placeholder="Email..."
        />
      </div>

      <div class="form__row">
        <BaseInput
          label="Enter your password:"
          v-model="password"
          type="password"
          placeholder="Password..."
        />
      </div>

      <div class="form__actions">
        <BaseButton @click="login">Sign In</BaseButton>
        <p>
          You don't have an account?
          <router-link :to="{ name: 'register' }"> Register </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      email: "",
      password: ""
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
            alert("Oops, " + err.message);
          }
        );
    }
    // login: function() {
    //   this.$router.replace("product-create");
    // }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
}
.form {
  width: 500px;
  margin: 0 auto;

  .form__row + .form__row {
    margin-top: 30px;
  }
}
</style>
