<template>
  <div class="products">
    <div class="products__inner">
      <BaseProduct
        v-for="book in books"
        :book="book"
        :key="book.id"
      ></BaseProduct>
    </div>
  </div>
</template>

<script>
// export const db = firebase.firestore();

// import { mapGetters, mapState } from "vuex";
import { mapState } from "vuex";

export default {
  beforeCreate: function() {
    this.$store.dispatch("fetchBooks");
  },
  computed: {
    // ...mapGetters(["booksByTerm"]),
    ...mapState(["books"])
  }
};
</script>

<style lang="scss">
.products {
  position: relative;
  // padding: 60px 0;

  .hint {
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px 0;
  }

  .products__inner {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: -10px;
  }

  .product {
    flex-basis: calc(25% - 20px);
    align-self: stretch;
    min-height: 260px;
    margin: 10px;
  }
}
</style>
