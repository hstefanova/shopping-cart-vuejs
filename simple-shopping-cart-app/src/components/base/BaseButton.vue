<template>
  <button v-on="$listeners" class="btn" :class="btnClass" v-bind="$attrs">
    <slot />
  </button>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    btnClass: {
      type: String
    }
  }
};
</script>

<style lang="scss">
.btn {
  display: inline-block;
  padding: 10px 15px;
  text-decoration: none;
  text-transform: uppercase;
  background: lightcoral;
  color: #fff;
  font: 14px/1 "Arial", sans-serif;
  line-height: 1;
  border: 0;
  transition: background 0.2s;

  &:hover {
    background: rgb(219, 92, 92);
    cursor: pointer;
  }
}

.btn--square {
  width: 20px;
  height: 20px;
  padding: 0;
}

.btn--border {
  background: none;
  border: 2px solid #fff;
  border-radius: 2px;
}

.btn--transparent {
  background: none;
  border-radius: 0;
  border: 0;
  padding: 0;
  &:hover {
    background: none;
    border: 0;
  }
}
</style>
