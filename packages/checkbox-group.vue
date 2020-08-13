<template>
  <div class="hu-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "HuCheckboxGroup",
  provide() {
    return {
      CheckboxGroup: this,
    };
  },
  props: {
    value: {
      type: Array,
    },
  },
};
</script>