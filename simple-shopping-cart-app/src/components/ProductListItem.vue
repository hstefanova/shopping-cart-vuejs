<template>
  <div class="product">
    <div class="product__inner">
      <div class="product__image">
        <img :src="book.image" alt="" width="100" height="150" />
      </div>
      <div class="product__content">
        <h3 class="product__title">{{ book.title }}</h3>
        <p class="product__price">${{ price }}</p>
        <a href="#" class="btn" @click="addToCart">Add to Cart</a>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/event-bus";

export default {
  props: ["book"],
  computed: {
    price: function() {
      return this.book.price.toFixed(2);
    }
  },
  methods: {
    addToCart: function() {
      EventBus.$emit("add-to-cart", this.book);
    }
  }
};
</script>

<style></style>
