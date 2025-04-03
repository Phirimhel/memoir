<template>
  <el-dropdown>
    <el-button size="large" circle :icon="'EditPen'" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="$emit('emitEditPost')">Edit</el-dropdown-item>
        <el-dropdown-item divided @click="$emit('emitDeletePost')">Delete</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
export default {
  name: 'my-drop-down-button',
  emits: ['emitEditPost', 'emitDeletePost'],
  methods: {
    emitEditPost() {
      this.$emit('emitEditPost')
    },
    emitDeletePost() {
      this.$emit('emitDeletePost')
    },
  },
}
</script>
