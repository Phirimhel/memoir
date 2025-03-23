<template>
  <div class="layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <slot name="sidebar"><Sidebar /></slot>
    </aside>

    <div class="main-content">
      <main class="content-wrapper">
        <!-- Header -->
        <header class="header">
          <slot name="header"><Header /></slot>
        </header>

        <!-- Content -->
        <div class="content">
          <slot>📄 Контент по умолчанию</slot>
          <div style="height: 1000px; background-color: red; margin-top: 20px"></div>
          <div style="height: 1000px; background-color: blue; margin-top: 20px"></div>
          <div style="height: 1000px; background-color: green; margin-top: 20px"></div>
        </div>
      </main>
    </div>

    <!-- Mobile Footer -->
    <footer class="footer">
      <slot name="footer"><MobileTabBar /></slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@/components/layouts/element-plus-components/Sidebar.vue'
import Header from '@/components/layouts/element-plus-components/Header.vue'
import MobileTabBar from '@/components/layouts/element-plus-components/MobileTabBar.vue'
</script>

<style scoped>
/* Main layout */
.layout {
  display: flex;
  height: 100vh;
}

/* sidebar */
.sidebar {
  width: fit-content;
  background: #f4f4f4;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}

/* Main content area */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Scrollable content */
.content-wrapper {
  flex: 1;
  background: white;
  overflow-y: auto;
}

.content {
  padding: 5px;
}

.tab-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f4f4f4;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  text-align: center;
  box-shadow: 0px -1px 10px rgba(0, 0, 0, 0.1);
  display: none;
  height: 100px;
  background-color: #f4f4f4;
}

@media screen and (max-width: 600px) {
  .sidebar {
    display: none;
  }

  .header {
    display: none;
  }

  .footer {
    display: block;
  }
}
</style>
