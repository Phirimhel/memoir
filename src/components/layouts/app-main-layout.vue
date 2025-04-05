<template>
  <div class="layout">
    <ThemesSwitcher />
    <!-- Sidebar -->
    <aside class="sidebar">
      <slot name="sidebar"><Sidebar /></slot>
    </aside>

    <div class="main-content">
      <el-scrollbar>
        <ThemeTogle />
        <main class="content-wrapper">
          <!-- Header -->
          <header class="header">
            <slot name="header"><Header /></slot>
          </header>

          <!-- Content -->
          <div class="content">
            <router-view />
          </div>
        </main>
      </el-scrollbar>
    </div>

    <!-- Mobile Footer -->
    <footer class="footer">
      <slot name="footer"><MobileTabBar /></slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/layouts/element-plus-components/main-header.vue'
import MobileTabBar from './element-plus-components/main-mobile-tab-bar.vue'
import Sidebar from '@/components/layouts/element-plus-components/main-sidebar.vue'
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
}

/* Scrollable content */
.content-wrapper {
  flex: 1;
  margin-right: 5px;
  margin-bottom: 20px;
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
  .main-content {
    height: 88vh;
  }
}
</style>
