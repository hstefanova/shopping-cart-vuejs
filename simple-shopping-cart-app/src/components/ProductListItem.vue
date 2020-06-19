<template>
  <div class="product">
    <router-link :to="{ name: 'product-info', params: { id: book.id } }">
      <div class="product__inner">
        <div
          v-if="book.image"
          class="product__image"
          :style="{ backgroundImage: 'url(' + book.image + ')' }"
        ></div>

        <div class="product__body">
          <div class="product__content">
            <h3 class="product__title">{{ book.title }}</h3>
            <p class="product__author">
              <em>{{ book.author }}</em>
            </p>
            <p class="product__price">${{ price }}</p>
          </div>

          <div class="product__actions">
            <BaseButton @click.prevent="addToCart">Add to Cart</BaseButton>

            <BaseButton btnClass="btn--transparent" @click.prevent="addToFavs">
              <BaseIcon name="heart" />
            </BaseButton>
          </div>
        </div>
      </div>
    </router-link>
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
    },
    addToFavs: function() {
      this.$store.dispatch("addToFavs", this.book);
    }
  }
};
</script>

<style lang="scss" scoped>
.product {
  width: 100%;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  font-weight: 300;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.26);

    transform: scale(1.01);
  }

  .product__image-wrapper {
    display: flex;
  }

  .product__body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .product__title {
    font-size: 18px;
    font-weight: 300;
  }

  .product__author {
    font-size: 16px;
  }

  .product__price {
    padding: 10px 0;
  }
  .product__image {
    display: inline-block;
    width: 100%;
    height: 300px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    margin-bottom: 10px;
  }

  .product__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
}
</style>
