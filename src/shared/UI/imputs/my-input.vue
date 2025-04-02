<template>
  <el-input :placeholder="placeholder" />
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
