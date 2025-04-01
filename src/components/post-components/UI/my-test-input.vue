<template>
  <input
    type="text"
    :value="modelValue"
    @input="emitUpdateValue(($event.target as HTMLInputElement).value)"
  />
</template>

<script lang="ts">
export default {
  name: 'TestInput',
  props: {
    modelValue: [String, Number],
  },
  methods: {
    emitUpdateValue(value: string | null) {
      this.$emit('update:modelValue', value)
    },
  },
}
</script>

<style scoped>
input {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}
</style>
