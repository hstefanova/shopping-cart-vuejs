<template>
  <nav class="nav">
    <ul>
      <li>
        <router-link to="/"> Home </router-link>
      </li>

      <li>
        <router-link :to="{ name: 'cart' }"> Cart </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'favs' }"> Favs </router-link>
      </li>
      <li class="red">
        <router-link :to="{ name: 'product-create' }" v-if="loggedIn">
          Add Book
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'login' }"
          class="btn btn--transparent"
          v-if="!loggedIn"
        >
          Login
        </router-link>

        <div v-else>
          <button type="button" class="btn btn--transparent" @click="logout">
            Logout
          </button>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import * as firebase from "firebase";
import "firebase/auth";

export default {
  data() {
    return {
      loggedIn: false
    };
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(data => {
          console.log("Data:", data);
          this.$router.replace({ name: "home" });
        });
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.loggedIn = !!user;
    });
  }
};
</script>

<style lang="scss" scoped>
.nav {
  color: #fff;

  ul {
    display: flex;
    justify-content: flex-end;
    list-style: none;
  }

  li {
    align-self: center;

    & + li {
      margin-left: 10px;
    }
  }
}

.red {
  color: lightpink;
}
</style>
