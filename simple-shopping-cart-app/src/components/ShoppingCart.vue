<template>
  <div>
    <h1>Shopping Cart</h1>

    <div v-for="book in cart" :key="book.id" class="product-row">
      <h3>{{ book.title }}</h3>
      <p>Price: ${{ book.price }} x {{ qty }}</p>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/event-bus";

export default {
  props: ["books"],
  data() {
    return {
      cart: [],
      qty: 1
    };
  },
  created() {
    EventBus.$on("add-to-cart", id => {
      if (!this.cart.includes(id)) {
        this.cart.push(id);
      } else {
        this.qty++;
      }
    });
  }
};
</script>

<style></style>
