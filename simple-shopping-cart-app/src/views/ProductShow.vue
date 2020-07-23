<template>
  <section class="section-info">
    <div class="shell">
      <div class="section__inner">
        <div class="section__image">
          <img :src="bookImageUrl" alt width="400" />
        </div>
        <div class="section__content">
          <header class="section__head">
            <h1>{{ book.title }}</h1>
            <p>
              by
              <span>{{ book.author }}</span>
            </p>
            <span class="type">{{ book.type }}</span>
          </header>

          <div class="section__body">
            <p>{{ book.description }}</p>
          </div>

          <div class="section__actions">
            <BaseButton @click.prevent="addToCart">Add to Cart</BaseButton>

            <BaseButton btnClass="btn--icon" @click.prevent="addToFavs">
              <BaseIcon name="heart" />
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { db } from "@/main";
// import firebase from "firebase";

import { mapState } from "vuex";

export default {
  props: ["id"],

  computed: {
    ...mapState(["book", "bookImageUrl"])
  },
  methods: {
    addToCart: function() {
      this.$store.dispatch("addToCart", this.book);
    },
    addToFavs: function() {
      this.book.id = this.id;
      this.$store.dispatch("addToFavs", this.book);
    }
  },
  created() {
    this.$store.dispatch("fetchBook", this.id);
  }
};
</script>

<style lang="scss" scoped>
.section-info {
  .type {
    display: inline-block;
    margin-top: 10px;
    font-style: italic;
  }
  .section__inner {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin: 0 -15px;
  }

  .section__image,
  .section__content {
    margin: 0 15px;
  }

  .section__head {
    padding-bottom: 20px;

    span {
      font-size: 18px;
    }
  }

  .section__body {
    padding-bottom: 40px;
  }

  .section__actions {
    display: flex;
    align-items: center;
  }

  .btn {
    & + .btn {
      margin-left: 20px;
    }
  }
}
</style>
