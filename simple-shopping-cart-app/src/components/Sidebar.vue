<template>
  <aside class="sidebar">
    Sidebar with categories goes here

    <BaseCheckbox v-model="thriller" @input="searchByTerm" label="Thriller" />
    <BaseCheckbox v-model="novel" @input="searchByTerm" label="Novel" />
    <BaseCheckbox v-model="fantasy" @input="searchByTerm" label="Fantasy" />
  </aside>
</template>

<script>
export default {
  data() {
    return {
      thriller: false,
      novel: false,
      fantasy: false
    };
  },
  methods: {
    searchByTerm: function() {
      if (this.novel) {
        this.$store.dispatch("searchByTerm", "novel");
      } else if (this.fantasy) {
        this.$store.dispatch("searchByTerm", "fantasy");
      } else if (this.thriller) {
        this.$store.dispatch("searchByTerm", "thriller");
      } else {
        this.$store.dispatch("searchByTerm", "");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  background: lightgreen;
  width: 100%;
  height: 400px;
}

.checkbox input {
  display: inline-block;
  width: 15px;
  height: 15px;
}
</style>
