<template>
  <el-input @update:modelValue="$emit('update:modelValue', $event)" :placeholder="placeholder" />
</template>

<script lang="ts">
export default {
  name: 'my-input',
  props: {
    placeholder: {
      type: String,
      required: true,
    },
  },
}
</script>
