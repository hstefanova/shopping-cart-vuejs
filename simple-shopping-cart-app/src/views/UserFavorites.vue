<template>
  <div class="shell">
    User favorite products

    <h1 v-if="!loggedIn">The user is <strong> NOT</strong> logged in!</h1>
    <h1 v-else>The user is <strong>LOGGED IN</strong></h1>

    <p>LoggedIn: {{ loggedIn }}</p>
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
