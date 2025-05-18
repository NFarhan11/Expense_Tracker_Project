<template>
  <div class="bg-white dark:bg-dark-bg p-5 fixed top-0 z-10 transition-all duration-300" :class="{
    'left-64 w-[calc(100%-16rem)]': isSidebarOpen && !isMobile,
    'left-0 w-full': !isSidebarOpen || isMobile,
  }">
    <div class="flex items-center justify-between">
      <!-- Left Controls -->
      <div class="flex items-center space-x-2">
        <UButton icon="mdi:hamburger-menu" color="primary" variant="soft" @click="$emit('toggle-sidebar')" />
        <ColorModeButton />
      </div>

      <!-- Right Controls -->
      <div>
        <UButton label="Logout" @click="logout" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isSidebarOpen: {
    type: Boolean,
    default: true,
  },
  isMobile: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["toggle-sidebar"]);

// Logout Button
const logout = () => {
  localStorage.removeItem('token');
  return navigateTo('/login');
};
</script>
