<template>
  <div class="hu-switch" @click="handleClick" :class="{ 'is-checked': this.value }">
    <input class="hu-switch__input" type="checkbox" ref="input" :name="name" />
    <span class="hu-switch__core" ref="core">
      <span class="hu-switch__button"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: "HuSwitch",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
    activeColor: {
      type: String,
      default: "",
    },
    inactiveColor: {
      type: String,
      default: "",
    },
  },
  mounted() {
    this.$refs.input.checked = this.value;
    // 设置背景色
    this.setBackgroundColor();
  },
  methods: {
    async handleClick() {
      this.$emit("input", !this.value);
      // 修改checkbox的值,等待value发生改变
      await this.$nextTick();
      this.$refs.input.checked = this.value;
    },
    setBackgroundColor() {
      if (this.activeColor || this.inactiveColor) {
        let newColor = this.value ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = newColor;
        this.$refs.core.style.backgroundColor = newColor;
      }
    },
  },
  watch: {
    value() {
      this.setBackgroundColor();
    },
  },
};
</script>

<style lang="scss" scoped>
.hu-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .hu-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .hu-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .hu-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}

.hu-switch.is-checked {
  .hu-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .hu-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>
