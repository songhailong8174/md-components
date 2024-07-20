<template>
  <el-pagination
    background
    :current-page="pagination.current"
    :page-sizes="pageSizes"
    :page-size="pagination.pageSize"
    :total="pagination.total"
    layout="total, sizes, prev, pager, next, jumper"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script>
export default {
  name: 'YsjkPagination',
  props: {
    pagination: {
      type: Object,
      default: function() {
        return {
          current: 1,
          pageSize: 15,
          total: 0
        }
      }
    }
  },
  data() {
    return {
      falg: true,
      pageSizes: [15, 30, 45, 60, 600, 1200]
    }
  },
  watch: {
    pagination: {
      handler(val) {
        if (this.falg) {
          this.pageSizes = []
          this.pageSizes.push(val.pageSize * 1, val.pageSize * 2, val.pageSize * 3, val.pageSize * 4, val.pageSize * 40, val.pageSize * 80)
        }
      },
      deep: true
    }
  },
  methods: {
    // 每页请求数量切换
    handleSizeChange(val) {
      this.falg = false
      this.$emit('pageSize', val)
    },
    // 当前页码
    handleCurrentChange(val) {
      this.$emit('currentPage', val)
    }
  }
}
</script>
