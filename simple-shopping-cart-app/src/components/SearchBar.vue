<template>
  <div class="search">
    <BaseInput
      type="text"
      v-model="searchTerm"
      @input="searchByTerm"
    ></BaseInput>
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
}
.search .icon-wrapper {
  position: absolute;
  top: 50%;
  right: 0;
  padding: 0 10px;
  transform: translateY(-50%);
  stroke: #000;
}

.search .icon-wrapper {
  background: #fff;
  color: lightcoral;
}
</style>
