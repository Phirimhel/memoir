<template>
  <el-input :placeholder="placeholder" />
</template>

<script lang="ts">
import toggleMixin from '@/shared/mixins/imputsMexins'

export default {
  mixins: [toggleMixin],
  name: 'my-input',

  props: {
    placeholder: {
      type: String,
      required: false,
    },
    focused: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>
