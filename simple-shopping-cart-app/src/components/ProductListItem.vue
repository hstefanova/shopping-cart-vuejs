<template>
  <div class="product">
    <div class="product__inner">
      <div
        class="product__image"
        :style="{ backgroundImage: 'url(' + imageURL + ')' }"
      >
        <!-- <img :src="imageURL" alt="" width="100" height="150" /> -->
      </div>
      <div class="product__content">
        <div class="product__content-inner">
          <h3 class="product__title">{{ book.title }}</h3>
          <p class="product__author">
            <em>{{ book.author }}</em>
          </p>
          <p class="product__price">${{ price }}</p>
        </div>

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
    },
    imageURL: function() {
      return require(`@/assets/books/${this.book.image}.jpg`);
    }
  },
  methods: {
    addToCart: function() {
      EventBus.$emit("add-to-cart", this.book);
    }
  }
};
</script>

<style scoped>
.product {
  background: #fff;
  padding: 30px;
  border-radius: 5px;
  font-weight: 300;
  transition: transform 0.2s, box-shadow 0.2s;
}

.product:hover {
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.26);

  transform: scale(1.01);
}

.product .product__inner {
  display: flex;
  width: 100%;
}

.product .product__content {
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.product .product__title {
  font-size: 25px;
  font-weight: 300;
}

.product + .product {
  margin-top: 20px;
}

.product .product__image {
  display: inline-block;
  width: 130px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
