<template>
  <div class="search">
    <input
      type="text"
      class="search__field"
      v-model="searchTerm"
      @keyup="searchByTerm"
    />
    <BaseIcon name="search" />
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
.search {
  position: relative;
  display: inline-block;
}
.search .icon-wrapper {
  position: absolute;
  top: 50%;
  right: 0;
  padding: 0 10px;
  transform: translateY(-50%);
  stroke: #000;
}

.search .search__field {
  height: 45px;
}

.search .icon-wrapper {
  background: #fff;
  color: lightcoral;
}
</style>
