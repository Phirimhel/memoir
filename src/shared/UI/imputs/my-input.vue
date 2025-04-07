<template>
  <el-input :placeholder="placeholder" />
</template>

<script lang="ts">
import toggleMixin from '@/mixins/imputsMexins'

export default {
  mixins: [toggleMixin],
  name: 'my-input',

  props: {
    focused: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>
