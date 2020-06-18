<template>
  <div class="shell">
    User favorite products

    <h1 v-if="loggedIn">The user is logged in!</h1>
    <h1>The user is <strong> NOT</strong> logged in!</h1>
  </div>
</template>

<script>
import { authCompleted } from "../store/helpers";

export default {
  computed: {
    ...authCompleted
  }
};
</script>

<style lang="scss" scoped></style>
