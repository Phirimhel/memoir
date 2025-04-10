<template>
  <el-input type="textarea" :placeholder="placeholder" rows="4" />
</template>

<script lang="ts">
import toggleMixin from '@/shared/mixins/imputsMexins'

export default {
  name: 'my-input',
  mixins: [toggleMixin],
}
</script>
