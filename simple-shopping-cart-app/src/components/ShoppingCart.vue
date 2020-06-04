<template>
  <div class="cart">
    <h1 class="cart__title">Shopping Cart</h1>

    <div class="cart__body">
      <ShoppingCartItem
        v-for="(book, index) in cartUniqueBooks"
        :key="index"
        :book="book"
      />
    </div>

    <div class="cart__actions">
      <p v-if="cartBooks.length" class="cart__total">
        Total:
        <strong>${{ cartTotal }}</strong>
      </p>
      <p v-else>{{ cartTotal }}</p>
    </div>
  </div>
</template>

<script>
import ShoppingCartItem from "./ShoppingCartItem.vue";
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["cartBooks"]),
    ...mapGetters(["cartUniqueBooks", "cartTotal"])
  },
  components: {
    ShoppingCartItem
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
