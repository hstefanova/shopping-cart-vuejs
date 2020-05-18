<template>
  <div class="cart__item">
    <div class="cart__item-content">
      <h3>{{ item.title }}</h3>
      <p>Price: ${{ price }} x {{ qty }}</p>
      <p>Subtotal {{ subtotal }}</p>
    </div>
    <div class="cart__item-actions">
      <button class="btn btn--square" @click="addQtyToCart">+</button>

      <button class="btn btn--square" @click="removeFromCart">-</button>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/event-bus";

export default {
  props: ["item"],
  data() {
    return {
      qty: 1
    };
  },
  computed: {
    price: function() {
      return this.item.price.toFixed(2);
    },
    subtotal: function() {
      return (Number(this.item.price) * this.qty).toFixed(2);
    }
  },
  methods: {
    addQtyToCart: function() {
      this.$emit("add-qty-to-cart", this.item);
      this.qty++;
    },
    removeFromCart: function() {
      this.$emit("remove-qty-from-cart", this.item);
      this.qty--;
    }
  },
  created() {
    EventBus.$on("add-to-cart", book => {
      if (book.id === this.item.id) {
        this.qty++;
      }
    });
  }
};
</script>

<style scoped>
.cart__item + .cart__item {
  margin-top: 20px;
}

.btn + .btn {
  margin-left: 10px;
}
</style>
