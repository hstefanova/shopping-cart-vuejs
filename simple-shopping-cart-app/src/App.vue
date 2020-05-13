<template>
  <div id="app">
    <div class="main">
      <header class="main__head">
        <div class="shell">
          <h1>SearchBar</h1>
        </div>
      </header>

      <div class="main__body">
        <div class="shell">
          <div class="main__cols">
            <div class="main__col main__content">
              <p>Found 0 results for search term <strong> term</strong></p>

              <ProductList :books="books" />
            </div>
            <div class="main__col main__aside">
              <ShoppingCart :books="books" />
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

export default {
  data() {
    return {
      books: [
        {
          id: 11,
          title: "A man called Ove",
          author: "Frederik Backman",
          price: "20.00",
          image: "./assets/books/book-ove.jpg",
          qty: 10
        },
        {
          id: 22,
          title: "Brit-Marie was here",
          author: "Frederik Backman",
          price: "21.99",
          image: "./assets/books/book-marie.jpg",
          qty: 5
        },
        {
          id: 33,
          title: "The Witcher - The last wish",
          author: "Andrezej Sapkowski",
          price: "16.00",
          image: "./assets/books/book-witcher.jpg",
          qty: 2
        }
      ]
    };
  },
  components: {
    ProductList,
    ShoppingCart
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
  padding: 100px 0;
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
  background: white;
}
</style>
