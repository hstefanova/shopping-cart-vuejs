<template>
  <div class="section-favs">
    <div class="shell">
      <div class="products">
        <BaseProduct
          v-for="book in favBooks"
          :book="book"
          :addRemoveBtn="true"
          :key="book.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["id"],
  computed: {
    ...mapState(["favBooks"])
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
