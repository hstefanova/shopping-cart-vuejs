<template>
  <div>
    <h1>Shopping Cart</h1>

    <p>Items: {{ cart }}</p>
  </div>
</template>

<script>
import { EventBus } from "@/event-bus";

export default {
  data() {
    return {
      cart: 0
    };
  },
  created() {
    EventBus.$on("add-to-cart", value => {
      this.cart += value;
    });
  }
};
</script>

<style></style>
