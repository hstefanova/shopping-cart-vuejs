<template>
  <div class="products">
    <BaseProduct v-for="book in booksByTerm" :book="book" :key="book.id" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  beforeCreate: function() {
    this.$store.dispatch("fetchBooks");
  },
  computed: {
    ...mapGetters(["booksByTerm"])
  }
};
</script>

<style lang="scss" scoped>
.products {
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: -10px;

  .hint {
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px 0;
  }

  .product {
    width: calc(20% - 20px);
    margin: 10px;
  }
}
</style>
