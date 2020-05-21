<template>
  <div class="search">
    <div class="search__inner">
      <input
        type="text"
        class="search__field"
        v-model="searchInput"
        @keyup.delete="search"
        @keyup.enter="search"
      />
      <button @click="search" class="btn btn--transparent search__btn">
        Search
      </button>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/event-bus";
export default {
  data() {
    return {
      searchInput: ""
    };
  },
  methods: {
    search: function() {
      EventBus.$emit("search-term", this.searchInput);
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
