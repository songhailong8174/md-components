<template>
  <div class="treeSelect">
    <vue-tree-select
      searchable
      :clearable="clearable"
      :append-to-body="appendToBody"
      :placeholder="placeholder"
      :no-results-text="noResultsText"
      :options="treeDataList"
      :normalizer="normalizer"
      v-model="checkedTreeIdsTree"
      v-bind="$attrs"
      v-on="$listeners"
    >
    </vue-tree-select>
  </div>
</template>
<script>
// import the component
import VueTreeSelect from '@riophae/vue-treeselect'
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
export default {
  name: 'YsjkTreeSelect',
  components: {
    VueTreeSelect
  },
  props: {
    noResultsText: {
      type: String,
      default: '搜索无结果'
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    clearable: {
      type: Boolean,
      default: true
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    treeProps: {
      type: Object,
      default: () => {
        return {
          id: 'id',
          label: 'label',
          children: 'children'
        }
      }
    },
    // tree 数据源
    treeDataList: {
      type: Array,
      default: function () {
        return []
      }
    },
    // 默认已选中的ids集合
    checkedTreeIds: {
      type: [Array, String],
      default: function () {
        return ''
      }
    }
  },
  computed: {
    checkedTreeIdsTree: {
      get: function () {
        return this.checkedTreeIds
      },
      set: function (valueIds) {
        console.log('valueIds', valueIds)
      }
    }
  },
  methods: {
    normalizer(node) {
      return {
        id: node[this.treeProps.id] || '',
        label: node[this.treeProps.label] || '',
        children: node[this.treeProps.children] || ''
      }
    }
  }
}
</script>