<template>
  <div>
    <h2>Create a new account:</h2>
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
        <BaseButton @click="register">Sign Up</BaseButton>
        <p>
          You've already had an account? Sign in
          <router-link :to="{ name: 'login' }"> here </router-link>
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
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            alert("Your account has been created!" + user);
          },
          function(err) {
            alert("Oops, " + err.message);
          }
        );
    }
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
