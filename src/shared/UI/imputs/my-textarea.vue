<template>
  <el-input type="textarea" :placeholder="placeholder" rows="4" />
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
