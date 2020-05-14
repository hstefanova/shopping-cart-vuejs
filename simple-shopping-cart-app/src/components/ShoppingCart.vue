<template>
  <div>
    <h1>Shopping Cart</h1>

    <ShoppingCartItems
      v-for="item in uniqueItems"
      :key="item.id"
      :item="item"
    />

    <p>Total: {{ total }}</p>
  </div>
</template>

<script>
import { EventBus } from "@/event-bus";
import ShoppingCartItems from "./ShoppingCartItem.vue";

export default {
  props: ["books"],
  data() {
    return {
      cartItems: [],
      uniqueItems: []
    };
  },
  computed: {
    total: function() {
      if (this.cartItems.length) {
        return this.cartItems
          .map(item => item.price)
          .reduce((acc, curr) => acc + curr)
          .toFixed(2);
      } else {
        return "0.00";
      }
    }
  },

  components: {
    ShoppingCartItems
  },
  created() {
    EventBus.$on("add-to-cart", book => {
      this.cartItems.push(book);

      if (!this.uniqueItems.includes(book)) {
        this.uniqueItems.push(book);
      }
    });
  }
};
</script>

<style></style>
