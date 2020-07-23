<template>
  <div class="product">
    <router-link class="product__link" :to="{ name: 'product-info', params: { id: book.id } }">
      <div class="product__inner">
        <div
          v-if="book.image"
          class="product__image"
          :style="{
            backgroundImage: `url(${bookImageUrl})`
          }"
        ></div>

        <div class="product__content">
          <h3 class="product__title">{{ book.title }}</h3>
          <p class="product__author">
            <em>{{ book.author }}</em>
          </p>
          <small>{{ book.type }}</small>
          <p class="product__price">${{ price }}</p>
        </div>

        <div class="product__actions">
          <BaseButton @click.prevent="addToCart">Add to Cart</BaseButton>

          <BaseButton v-if="!addRemoveBtn" btnClass="btn--transparent" @click.prevent="addToFavs">
            <BaseIcon name="heart" />
          </BaseButton>

          <BaseButton
            v-if="addRemoveBtn"
            btnClass="btn--transparent"
            @click.prevent="removeFromFavs"
          >
            <BaseIcon name="x" />
          </BaseButton>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  props: ["book", "addRemoveBtn"],
  data() {
    return {
      bookImageUrl: ""
    };
  },
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
    },
    removeFromFavs: function() {
      this.$store.dispatch("removeFromFavs", this.book);
    }
  },
  created() {
    if (this.book.image) {
      firebase
        .storage()
        .ref("books")
        .child(`${this.book.image}`)
        .getDownloadURL()
        .then(response => (this.bookImageUrl = response));
    }
  }
};
</script>

<style lang="scss" scoped>
.product {
  position: relative;
  width: 100%;
  background: #fff;
  border-radius: 5px;
  font-weight: 300;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.26);

    transform: scale(1.01);
  }

  .product__link {
    display: block;
  }

  .product__title {
    font-size: 17px;
    font-weight: 300;
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 5px;
  }

  .product__author {
    font-size: 16px;
  }

  .product__price {
    padding: 20px 0;
    font-size: 20px;
  }

  .product__inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 20px;
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

  .product__content {
    padding: 0 0 30px;
  }

  .product__actions {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-self: flex-end;
    width: 100%;
    padding: 0 20px 20px;
  }
}
</style>
