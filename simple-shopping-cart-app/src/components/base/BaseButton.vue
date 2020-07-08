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
  background: #000;
  border-radius: 3px;
  color: #fff;
  font: 14px/1 "Arial", sans-serif;
  line-height: 1;
  border: 0;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }
}

.btn--icon {
  padding: 0;
  background: none;
  border: 0;

  &:hover {
    background: none;
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
  color: #fff;
  background: transparent;
  border: 1px solid #fff;

  &:hover {
    color: #000;
    background: #fff;
    border-color: #fff;
  }
}
</style>
