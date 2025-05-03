<template>
  <div
    class="w-64 bg-white h-screen border-r flex flex-col fixed top-0 z-20 transition-transform duration-300"
    :class="{
      'translate-x-0': isOpen,
      '-translate-x-full': !isOpen,
      'left-0': !isMobile,
      'left-0': isMobile,
    }"
  >
    <div class="flex items-center h-20 px-4 space-x-3">
      <UIcon name="mdi:bar-chart" class="w-8 h-8 text-indigo-600" />
      <span class="text-2xl font-bold text-gray-800">ExpTracker</span>
    </div>
    <nav class="flex-1 px-4 space-y-4">
      <div>
        <p class="text-xs text-gray-400 uppercase mb-3">Menu</p>
        <NuxtLink
          to="/"
          class="flex items-center px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
        >
          <UIcon name="mdi:view-dashboard" class="w-5 h-5 mr-3" /> Dashboard
        </NuxtLink>
        <NuxtLink
          to="/"
          class="flex items-center px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
        >
          <UIcon name="mdi:comment-question" class="w-5 h-5 mr-3" /> Question
        </NuxtLink>
        <NuxtLink
          to="/"
          class="flex items-center px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
        >
          <UIcon name="mdi:comment-check" class="w-5 h-5 mr-3" /> Answer
        </NuxtLink>
        <NuxtLink
          to="/"
          class="flex items-center px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
        >
          <UIcon name="mdi:lifebuoy" class="w-5 h-5 mr-3" /> Support
        </NuxtLink>
        <NuxtLink
          to="/"
          class="flex items-center px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
        >
          <UIcon name="mdi:help-circle" class="w-5 h-5 mr-3" /> Help Centre
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: true,
  },
  isMobile: {
    type: Boolean,
    default: false,
  },
});
</script>
