<template>
  <div>
    <h1>Shopping Cart</h1>

    <!-- <div v-for="book in cartItems" :key="book.id" class="product-row">
      <h3>{{ book.title }}</h3>
      <p>Price: ${{ book.price }}</p>
    </div>-->
    <ShoppingCartItems v-for="item in cartItems" :key="item.id" :item="item" />
  </div>
</template>

<script>
import { EventBus } from "@/event-bus";
import ShoppingCartItems from "./ShoppingCartItem.vue";

export default {
  props: ["books"],
  data() {
    return {
      cartItems: []
    };
  },
  components: {
    ShoppingCartItems
  },
  created() {
    EventBus.$on("add-to-cart", book => {
      if (!this.cartItems.includes(book)) {
        this.cartItems.push(book);
      }
    });
  }
};
</script>

<style></style>
