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

interface Option {
  value: string
  label: string
}

export default {
  name: 'my-select',
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    options: {
      type: Array as PropType<Option[]>,
      required: true,
    },
  },
}
</script>
