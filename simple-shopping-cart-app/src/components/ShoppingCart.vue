<template>
  <div class="cart">
    <h1 class="cart__title">Shopping Cart</h1>

    <div class="cart__body">
      <ShoppingCartItems
        v-for="item in cartItemsUnique"
        :key="item.id"
        :item="item"
        @add-qty-to-cart="addItem(item)"
        @remove-qty-from-cart="removeItem(item)"
      />
    </div>

    <div class="cart__actions">
      <p v-if="cartItems.length" class="cart__total">
        Total: <strong>${{ total }}</strong>
      </p>
      <p v-else>{{ total }}</p>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/event-bus";
import ShoppingCartItems from "./ShoppingCartItem.vue";

export default {
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

<style scoped>
.cart .cart__title {
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.26);
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 300;
}

.cart .cart__body {
  padding: 15px 0 0;
}

.cart .cart__total {
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 300;
  text-align: right;
  border-top: 1px solid rgba(0, 0, 0, 0.26);
  padding-top: 15px;
  font-size: 14px;
}

.cart .cart__total strong {
  font-weight: 300;
  font-size: 30px;
  padding-left: 5px;
}
</style>
