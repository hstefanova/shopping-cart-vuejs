<template>
  <nav class="nav">
    <ul>
      <li>
        <router-link to="/"> Home </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'product-info' }">
          Book Info
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'product-create' }">
          Book Create
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'cart' }"> Cart </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'favs' }"> Favs </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'login' }"> Login </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  color: #fff;
}

.nav ul {
  display: flex;
  justify-content: flex-end;
  list-style: none;
}

.nav li + li {
  margin-left: 10px;
}
.nav a {
  color: inherit;
}
</style>
