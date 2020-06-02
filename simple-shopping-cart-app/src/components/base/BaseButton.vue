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

<style>
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
}

.btn--square {
  width: 20px;
  height: 20px;
  padding: 0;
}

.btn--transparent {
  background: none;
  border: 2px solid #fff;
  border-radius: 2px;
}
.btn:hover {
  background: rgb(219, 92, 92);
  cursor: pointer;
}
</style>
