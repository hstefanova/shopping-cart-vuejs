<template>
  <div class="checkbox">
    <label v-if="label">
      <input
        type="checkbox"
        :checked="checked"
        @change="updateValue"
        v-bind="$attrs"
        v-on="listeners"
      />
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ""
    },
    checked: {
      type: Boolean
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        change: this.updateValue
      };
    }
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.checked);
    }
  }
};
</script>

<style scopled>
.checkbox input {
  display: inline-block;
  width: 15px;
  height: 15px;
}
</style>
