<template>
  <div class="product">
    <div class="product__inner">
      <div class="product__image">
        <img :src="book.image" alt="" />
      </div>
      <div class="product__content">
        <h3 class="product__title">{{ book.title }}</h3>
        <p class="product__price">{{ book.price }}$</p>
        <a href="#" class="btn" @click="addToCart">Add to Cart</a>

        <p>ID: {{ productID }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/event-bus";

export default {
  props: ["book"],
  computed: {
    productID() {
      return this.book.id;
    }
  },
  methods: {
    addToCart: function() {
      EventBus.$emit("add-to-cart", 10);
    }
  }
};
</script>

<style></style>
