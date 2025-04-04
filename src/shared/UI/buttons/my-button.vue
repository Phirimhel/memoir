<template>
  <el-button :type="type"> <slot></slot> </el-button>
</template>

<script lang="ts">
export default {
  name: 'my-button',
  props: {
    type: {
      type: String,
      default: 'primary',
    },
  },
}
</script>
