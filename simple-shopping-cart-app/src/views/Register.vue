<template>
  <div>
    <h2>REGISTER:</h2>
    <div class="form">
      <p v-if="error" class="error">{{ error.message }}</p>

      <form @submit.prevent="register">
        <div class="form__row">
          <BaseInput
            label="Enter email test:"
            v-model="email"
            type="email"
            placeholder="Email..."
          />
        </div>

        <div class="form__row">
          <BaseInput
            label="Enter password:"
            v-model="password"
            type="password"
            placeholder="Password..."
          />
        </div>

        <div class="form__actions">
          <BaseButton>Sign Up</BaseButton>
          <p>
            You have an account?
            <router-link :to="{ name: 'login' }">
              Login
            </router-link>
          </p>
        </div>
      </form>
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
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.replace({ name: "product-create" });
          console.log("User: ", user);
        })
        .catch(err => {
          console.log(err);
        });
    }
    // async pressed() {
    //   try {
    //     const user = firebase
    //       .auth()
    //       .createUserWithEmailAndPassword(this.email, this.password);
    //     this.$router.replace({ name: "product-create" });
    //     console.log("User: ", user);
    //   } catch (err) {
    //     console.log(err);
    //   }
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
