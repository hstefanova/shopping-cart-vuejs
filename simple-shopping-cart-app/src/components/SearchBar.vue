<template>
  <div>
    <h1>SearchBar</h1>

    <input type="text" v-model="searchInput" />
    <button @click="search">Search</button>
    <p>{{ searchInputConverted }}</p>
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
