<template>
  <div class="layout">
    <ThemesSwitcher />
    <!-- Sidebar -->
    <aside class="sidebar">
      <slot name="sidebar"><Sidebar /></slot>
    </aside>

    <div class="main-content">
      <ThemeTogle />
      <main class="content-wrapper">
        <!-- Header -->
        <header class="header">
          <slot name="header"><Header /></slot>
        </header>

        <!-- Content -->
        <div class="content">
          <Content />
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
import Header from '@/components/layouts/element-plus-components/Header.vue'
import MobileTabBar from '@/components/layouts/element-plus-components/MobileTabBar.vue'
import Sidebar from './element-plus-components/Sidebar.vue'
import Content from './element-plus-components/Content.vue'
import ThemesSwitcher from '@/components/buttons/ThemesSwitcher.vue'
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
  overflow-y: auto;
}

.content {
  padding: 10px;
}

.tab-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  box-shadow: 0px -1px 10px rgba(0, 0, 0, 0.1);
  display: none;
  height: 100px;
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
