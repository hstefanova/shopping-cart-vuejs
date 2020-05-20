<template>
  <div class="search-bar">
    <h1>SearchBar</h1>

    <input
      type="text"
      v-model="searchInput"
      @keyup.delete="search"
      @keyup.enter="search"
    />
    <button @click="search">Search</button>
  </div>
</template>

<script>
import { EventBus } from "@/event-bus";
export default {
  data() {
    return { searchInput: "" };
  },
  computed: {
    searchInputConverted: function() {
      return this.searchInput.toLowerCase();
    }
  },
  methods: {
    search: function() {
      EventBus.$emit("search-term", this.searchInput);
    }
  }
};
</script>

<style></style>
