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
        <router-link :to="{ name: 'product-create' }">
          Book Create
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'login' }" class="btn">
          Login
        </router-link>

        <button type="button">Logout</button>
      </li>
    </ul>
  </nav>
</template>

<script>
// import { authCompleted } from "../store/helpers";
// import firebase from "firebase";

export default {
  methods: {
    // logout: function() {
    //   firebase
    //     .auth()
    //     .signOut()
    //     .then(() => {
    //       location.reload();
    //       this.$router.push({ name: "home" });
    //     });
    // }
  }
  // computed: {
  //   ...authCompleted
  // }
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

  li + li {
    margin-left: 10px;
  }

  a {
    color: inherit;
  }

  .red a {
    color: lightgreen;
  }
}

.btn {
  background: green;
}

// .nav ul {
//   display: flex;
//   justify-content: flex-end;
//   list-style: none;
// }

// .nav li + li {
//   margin-left: 10px;
// }
// .nav a {
//   color: inherit;
// }
</style>
