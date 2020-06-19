<template>
  <div class="search">
    <div class="search__inner">
      <BaseInput
        type="text"
        v-model="searchTerm"
        @input="searchByTerm"
        placeholder="Search for..."
      ></BaseInput>
      <BaseIcon name="search" />
    </div>

    <div class="search__term">
      <p v-if="term" class="hint">
        Found {{ booksByTerm.length }} results for search:
        <em> {{ term }}</em>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      searchTerm: ""
    };
  },
  computed: {
    ...mapState(["term"]),
    ...mapGetters(["booksByTerm"])
  },
  methods: {
    searchByTerm: function() {
      this.$store.dispatch("searchByTerm", this.searchTerm);
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  position: relative;

  .icon-wrapper {
    position: absolute;
    top: 50%;
    right: 0;
    padding: 0 10px;
    transform: translateY(-50%);
    stroke: #000;
    background: #fff;
    color: lightcoral;
  }

  .search__term {
    position: absolute;
    top: 100%;
    left: 0;
    padding-top: 10px;
  }
}
</style>
