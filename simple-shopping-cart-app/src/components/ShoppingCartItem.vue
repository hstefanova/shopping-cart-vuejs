<template>
  <div class="cart__item">
    <div class="cart__item-content">
      <div class="cart__item-head">
        <h3>{{ book.title }}</h3>
        <h3>${{ subtotal }}</h3>
      </div>
      <div class="cart__item-body">
        <p>${{ price }} x {{ qty }}</p>
        <div class="cart__item-actions">
          <BaseButton btnClass="btn--square" @click="addToCart"> + </BaseButton>

          <BaseButton btnClass="btn--square" @click="removeFromCart">
            -
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["book"],
  data() {
    return {
      componentKey: 0
    };
  },
  computed: {
    ...mapState(["cartBooks"]),
    price: function() {
      return parseFloat(this.book.price).toFixed(2);
    },
    qty() {
      return this.cartBooks.filter(cartBook => cartBook.id === this.book.id)
        .length;
    },
    subtotal: function() {
      return (Number(this.book.price) * this.qty).toFixed(2);
    }
  },

  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
    addToCart: function() {
      this.$store.dispatch("addToCart", this.book);
    },
    removeFromCart: function() {
      this.$store.dispatch("removeFromCart", this.book);
    }
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
