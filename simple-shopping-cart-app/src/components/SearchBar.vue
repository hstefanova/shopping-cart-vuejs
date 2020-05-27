<template>
  <div class="search">
    <div class="search__inner">
      <input
        type="text"
        class="search__field"
        v-model="searchTerm"
        @keyup="searchByTerm"
      />
      <button @click="searchByTerm" class="btn btn--transparent search__btn">
        Search
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: ""
    };
  },
  methods: {
    searchByTerm: function() {
      this.$store.dispatch("searchByTerm", this.searchTerm);
    }
  }
};
</script>

<style scoped>
.search .search__inner {
  display: flex;
  align-items: stretch;
}
.search .search__btn {
  margin-left: 3px;
}

.search .search__field {
  height: auto;
}
</style>
