<template>
  <div class="min-h-screen flex bg-gray-100 dark:bg-black">
    <!-- Sidebar -->
    <LayoutsSideBar :is-open="isSidebarOpen" />

    <!-- Main content -->
    <div class="flex flex-col flex-1" :class="{
      'ml-64': isSidebarOpen && !isMobile,
      'ml-0': !isSidebarOpen || isMobile,
    }">
      <!-- Topbar -->
      <LayoutsTopBar @toggle-sidebar="toggleSidebar" :is-sidebar-open="isSidebarOpen" />

      <!-- Dashboard Content -->
      <div class="pt-20">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
const isSidebarOpen = ref(true);
const isMobile = ref(false);

// Toggle SideBar
const toggleSidebar = () => {
  console.log("window width: ", window.innerWidth);
  isSidebarOpen.value = !isSidebarOpen.value;
};

// Mobile Responsiveness
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
  if (isMobile.value) {
    isSidebarOpen.value = false; // Close sidebar by default on mobile
  } else {
    isSidebarOpen.value = true; // Open sidebar by default on desktop
  }
};

onMounted(() => {
  checkMobile();
  console.log("app mounted");
});
</script>
