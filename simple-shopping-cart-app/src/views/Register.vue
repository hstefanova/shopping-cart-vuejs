<template>
  <div>
    <h2>REGISTER:</h2>
    <div class="form">
      <form @submit.prevent="register">
        <div class="form__row">
          <BaseInput v-model="email" type="email" placeholder="Email..." />

          <p v-if="error" class="error">{{ error }}</p>
        </div>

        <div class="form__row">
          <BaseInput
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
        .catch(err => (this.error = err));
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
