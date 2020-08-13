<template>
  <div class="hu-form">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "HuForm",
  provide() {
    return {
      Form: this,
    };
  },
  props: {
    model: {
      type: Object,
      required: true, //用model的话必须传递一个model进来
    },
    labelWidth: {
      type: String,
      default: "80px",
    },
  },
};
</script>
