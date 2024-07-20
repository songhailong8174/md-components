<template>
  <div class="ysjk-steps-warp">
    <ul>
      <li v-for="(item, index) in stepInfo" :key="index" @click="clickItem(index)">
        <span :style="{ width: 96 / stepInfo.length + '%' }" :class="{ current: currentIndex === index }">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'YsjkSteps',
  props: {
    stepInfo: {
      type: Array,
      default: () => [],
      require: true
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  watch: {
    currentIndex() {
      this.$emit('change', this.currentIndex)
    }
  },
  methods: {
    hasNextStep() {
      return this.currentIndex < this.stepInfo.length - 1
    },
    nextStep() {
      if (this.hasNextStep()) {
        this.currentIndex++
      }
    },
    hasPrevStep() {
      return this.currentIndex > 0
    },
    prevStep() {
      if (this.hasPrevStep()) {
        this.currentIndex--
      }
    },
    clickItem(index) {
      this.currentIndex = index
    }
  }
}
</script>
<style lang="scss" scoped>
.ysjk-steps-warp {
  margin: 10px 0;

  ul {
    list-style: none;
    display: inline-block;
    width: 100%;
    padding: 0 3%;
    text-align: center;
    li {
      display: inline;
      cursor: pointer;
      span {
        display: inline-block;
        // width: 28%;
        height: 36px;
        min-width: 100px;
        max-width: 260px;
        line-height: 36px;
        background: $primary-secondary;
        text-align: center;
        position: relative;
        margin: 0 10px 0 0;
        font-size: 14px;
        text-decoration: none;
        user-select: none;
        color: $white;
      }
      span.current {
        background: $primary;
      }
      span:after {
        content: '';
        border-top: 18px solid transparent;
        border-bottom: 18px solid transparent;
        border-left: 18px solid $primary-secondary;
        position: absolute;
        right: -18px;
        top: 0;
        z-index: 1;
      }
      span.current:after {
        border-left: 18px solid $primary;
      }
      span:before {
        content: '';
        border-top: 18px solid transparent;
        border-bottom: 18px solid transparent;
        border-left: 18px solid $white;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
    li:first-child span {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    li:first-child span:before {
      display: none;
    }
    // li:last-child {
    //   justify-content: start;
    // }
    // 最后一个直角
    // li:last-child span {
    //   border-top-right-radius: 4px;
    //   border-bottom-right-radius: 4px;
    // }
    // li:last-child span:after {
    //   display: none;
    // }
    // li:last-child span {
    //   border-top-right-radius: 4px;
    //   border-bottom-right-radius: 4px;
    // }
    // li:last-child span:after {
    //   display: none;
    // }
  }
}
</style>
