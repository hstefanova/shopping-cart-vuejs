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

<style lang="scss" scoped></style>
