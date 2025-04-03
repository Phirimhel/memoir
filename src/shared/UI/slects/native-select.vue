<template>
  <select v-model="selectedOption">
    <option disabled value="">Chose option</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script lang="ts">
import type { PropType } from 'vue'

interface Option {
  value: string
  label: string
}
export default {
  name: 'native-select',
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    options: {
      type: Array as PropType<Option[]>,
      required: true,
    },
  },
  data() {
    return {
      selectedOption: '',
    }
  },
  methods: {},
}
</script>
