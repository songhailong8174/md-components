<template>
  <div class="ysjk-flex-justify-between ysjk-time-range">
    <el-time-select placeholder="起始" class="start" />
    <el-time-select class="end" placeholder="终止" />
  </div>
</template>
<script>
export default {
  name: 'YsjkTimeRange'
}
</script>
<style lang="scss" scoped>
.ysjk-time-range {
  .start {
    margin-right: 5px;
  }
  .end {
    margin-left: 5px;
  }
}
</style>
