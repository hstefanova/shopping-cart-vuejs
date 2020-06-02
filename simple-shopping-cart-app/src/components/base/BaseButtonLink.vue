<template>
  <a :href="href" :class="linkClass">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    linkClass: {
      type: String
    },
    href: {
      type: String,
      default: "#"
    }
  }
};
</script>

<style scoped></style>
