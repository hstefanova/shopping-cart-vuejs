<template>
  <div id="app">
    <div class="main">
      <header class="main__head">
        <div class="shell">
          <div class="main__cols">
            <div class="main__col">
              <SearchBar />
            </div>
            <div class="main__col">
              <CreateBook />
            </div>
          </div>
        </div>
      </header>

      <div class="main__body">
        <div class="shell">
          <div class="main__cols">
            <div class="main__col main__content">
              <ProductList />
            </div>
            <div class="main__col main__aside">
              <ShoppingCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import SearchBar from "./components/SearchBar.vue";
import CreateBook from "./components/CreateBook.vue";

export default {
  components: {
    ProductList,
    ShoppingCart,
    SearchBar,
    CreateBook
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
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
  min-width: 270px;
  min-height: 30px;
  border: 0;
  border-radius: 2px;
  padding: 5px 10px;
}

input:focus {
  outline: none;
  box-shadow: 0 0 5px 2px rgb(219, 92, 92);
}

.hidden {
  display: none;
}

.shell {
  max-width: 1440px;
  margin: 0 auto;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  height: 100%;
}
.main .main__head {
  background: lightcoral;
  padding: 100px 0 20px;
}
.main .main__head .main__cols {
  align-items: flex-end;
}
.main .main__body {
  padding: 20px 0;
}
.main .main__cols {
  display: flex;
  align-items: stretch;
  width: 100%;
  margin: 0 -15px;
}

.main .main__col {
  width: 50%;
  margin: 0 15px;
}
</style>
