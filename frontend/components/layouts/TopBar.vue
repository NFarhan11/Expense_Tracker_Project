<template>
  <div
    class="bg-white w-full p-5 fixed top-0 z-10 transition-transform duration-300"
    :class="{
      'left-64': isSidebarOpen && !isMobile,
      'left-0': !isSidebarOpen || isMobile,
    }"
  >
    <UButton
      icon="mdi:hamburger-menu"
      color="neutral"
      variant="soft"
      @click="$emit('toggle-sidebar')"
    />
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
</script>
