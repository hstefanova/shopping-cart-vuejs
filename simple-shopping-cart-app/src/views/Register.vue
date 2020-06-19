<template>
  <div>
    <h2>REGISTER:</h2>
    <div class="form">
      <p v-if="error" class="error">{{ error.message }}</p>

      <form @submit.prevent="pressed">
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
// import firebase from "firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    // register() {
    //   firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(this.user.email, this.user.password)
    //     .then(
    //       function(user) {
    //         alert("Your account has been created!" + user);
    //       },
    //       function(err) {
    //         alert("Oops, " + err.message);
    //       }
    //     );
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
