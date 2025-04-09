<template>
  <div>
    {{ data }}
    <el-button @click="change">Change</el-button>
    <h2>🔍 Поиск пользователей</h2>
    <input v-model="search" placeholder="Поиск по имени" />

    <p><strong>Список с методом:</strong></p>
    <ul>
      <li v-for="user in filterUsers()" :key="user.id">
        {{ user.name }}
      </li>
    </ul>

    <p><strong>Список с computed:</strong></p>
    <ul>
      <li v-for="user in filteredUsers" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      data: 0,
      users: [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
        { id: 4, name: 'David' },
      ],
    }
  },
  methods: {
    filterUsers() {
      const start = performance.now()
      // Имитация тяжёлого расчёта
      for (let i = 0; i < 10000000; i++) {}
      const duration = performance.now() - start
      console.log(`⏱️ 🚨 method took ${duration.toFixed(2)} ms`)
      return this.users.filter((user) =>
        user.name.toLowerCase().includes(this.search.toLowerCase()),
      )
    },
    change() {
      this.data = this.data + 1
    },
  },
  computed: {
    filteredUsers() {
      const start = performance.now()
      // Имитация тяжёлого расчёта
      for (let i = 0; i < 10000000; i++) {}
      const duration = performance.now() - start
      console.log(`⏱️ ✅  Computed took ${duration.toFixed(2)} ms`)
      return this.users.filter((user) =>
        user.name.toLowerCase().includes(this.search.toLowerCase()),
      )
    },
  },
}
</script>
