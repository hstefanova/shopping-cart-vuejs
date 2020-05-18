<template>
  <div>
    <h1>Shopping Cart</h1>

    <ShoppingCartItems
      v-for="item in cartItemsUnique"
      :key="item.id"
      :item="item"
      @add-qty-to-cart="addItem(item)"
      @remove-qty-from-cart="removeItem(item)"
    />
    <p v-if="cartItems.length">Total: {{ total }}</p>
    <p v-else>{{ total }}</p>
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
  computed: {
    total: function() {
      if (this.cartItems.length) {
        return this.cartItems
          .map(item => item.price)
          .reduce((acc, curr) => acc + curr)
          .toFixed(2);
      } else {
        return "No items in the cart";
      }
    },
    cartItemsUnique: function() {
      return this.cartItems.filter((value, index, self) => {
        return self.indexOf(value) === index;
      });
    }
  },
  methods: {
    addItem: function(cartItem) {
      this.cartItems.push(cartItem);
    },
    removeItem: function(cartItem) {
      let target = this.cartItems.findIndex(item => cartItem === item);
      this.cartItems.splice(target, 1);
    }
  },
  components: {
    ShoppingCartItems
  },
  created() {
    EventBus.$on("add-to-cart", book => {
      this.cartItems.push(book);
    });
  }
};
</script>

<style></style>
