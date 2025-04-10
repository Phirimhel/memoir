<template>
  <el-select :placeholder="placeholder">
    <el-option
      v-for="option in options"
      :key="option.value"
      :label="option.label"
      :value="option.value"
    />
  </el-select>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { Option } from '@/shared/model/option'
export default {
  name: 'my-select',
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: false,
    },
    options: {
      type: Array as PropType<Option[]>,
      required: true,
    },
  },
}
</script>
