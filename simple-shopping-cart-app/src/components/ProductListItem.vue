<template>
  <div class="product">
    <div class="product__inner">
      <div v-if="book.image" class="product__image-wrapper">
        <div
          class="product__image"
          :style="{ backgroundImage: 'url(' + book.image + ')' }"
        ></div>
      </div>

      <div class="product__content">
        <div class="product__content-inner">
          <h3 class="product__title">{{ book.title }}</h3>
          <p class="product__author">
            <em>{{ book.author }}</em>
          </p>
          <p class="product__price">${{ price }}</p>
        </div>

        <BaseButton @click.prevent="addToCart">Add to Cart</BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["book"],
  computed: {
    price: function() {
      return parseFloat(this.book.price).toFixed(2);
    }
  },
  methods: {
    addToCart: function() {
      this.$store.dispatch("addToCart", this.book);
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

.product .product__image-wrapper {
  display: flex;
}

.product .product__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.product .product__title {
  font-size: 25px;
  font-weight: 300;
}

.product .product__price {
  padding: 10px 0;
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
  margin-right: 20px;
}
</style>
