<template>
  <div class="w-64 bg-white h-screen border-r flex flex-col">
    <div class="flex items-center h-20 px-4 space-x-3">
      <UIcon name="mdi:bar-chart" class="w-8 h-8 text-indigo-600" />
      <span class="text-2xl font-bold text-gray-800">TailAdmin</span>
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

<script setup></script>
