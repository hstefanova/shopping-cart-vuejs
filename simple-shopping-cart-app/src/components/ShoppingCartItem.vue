<template>
  <div class="cart__item">
    <div class="cart__item-content">
      <div class="cart__item-head">
        <h3>{{ item.title }}</h3>
        <h3>${{ subtotal }}</h3>
      </div>
      <div class="cart__item-body">
        <p>${{ price }} x {{ qty }}</p>
        <div class="cart__item-actions">
          <button class="btn btn--square" @click="addQtyToCart">+</button>

          <button class="btn btn--square" @click="removeFromCart">-</button>
        </div>
      </div>
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
.cart__item {
  padding-bottom: 15px;
}
.cart__item + .cart__item {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.26);
}

.cart__item .cart__item-head {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
}
.cart__item .cart__item-body {
  display: flex;
  justify-content: flex-start;
  align-content: center;
}

.cart__item .cart__item-actions {
  padding-left: 20px;
  display: inline-block;
  text-align: right;
}

.btn + .btn {
  margin-left: 10px;
}
</style>
