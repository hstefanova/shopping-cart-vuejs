<template>
  <div id="app">
    <header class="header">
      <div class="shell">
        <div class="header__inner">
          <aside class="header__aside">
            <a href="#" class="logo">Logo</a>
          </aside>

          <SearchBar />

          <Nav />
        </div>
      </div>
    </header>

    <div class="main">
      <router-view />
    </div>
  </div>
</template>
<script>
import SearchBar from "@/components/SearchBar";
import Nav from "@/components/Nav";
export default {
  components: {
    SearchBar,
    Nav
  }
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
}

body {
  background: lightgray;
  font-family: Quicksand, sans-serif;
  font-size: 16px;
  font-weight: 300;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 300;
}

input {
  width: 100%;
  height: 30px;
  border: 0;
  border-radius: 2px;
  padding: 5px 10px;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px 2px rgb(219, 92, 92);
  }
}

.hidden {
  display: none;
}

.shell {
  max-width: 1440px;
  margin: 0 auto;
}

/* HEADER */

.header {
  background: #000;
  padding: 25px 0;
  color: #fff;

  .header__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__aside,
  .search,
  .nav {
    flex-basis: 33.33%;
  }
}
</style>
