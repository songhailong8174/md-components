<template>
  <el-dialog
    :close-on-click-modal="closeOnClickModal"
    :close-on-press-escape="closeOnPressEscape"
    :width="width"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot v-for="name in Object.keys(this.$slots)" :slot="name" :name="name" />
    <div v-if="!Object.keys(this.$slots).includes('footer')" slot="footer" :class="{'ysjk-dialog-footer': hasNext}">
      <div v-if="hasNext">
        <el-checkbox v-model="isClose">继续添加下一条</el-checkbox>
      </div>
      <div>
        <ysjk-button @click="onCancel">取消</ysjk-button>
        <ysjk-button type="primary" @click="onConfirm">保存</ysjk-button>
        <slot name="button" />
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'YsjkDialog',
  props: {
    closeOnClickModal: {
      type: Boolean,
      default: false
    },
    closeOnPressEscape: {
      type: Boolean,
      default: false
    },
    width: {
      type: [Number, String],
      default: '80%'
    },
    hasNext: {
      type: Boolean,
      default: false
    },
    nextDefaultChecked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isClose: false
    }
  },
  watch: {
    nextDefaultChecked: {
      immediate: true,
      handler(val) {
        this.isClose = val || false
      }
    }
  },
  methods: {
    onCancel() {
      this.$emit('cancel')
    },
    onConfirm() {
      if (this.hasNext) {
        this.$emit('confirm', this.isClose)
      } else {
        this.$emit('confirm')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ysjk-dialog-footer {
  display: flex;
    justify-content: space-between;
}
</style>
