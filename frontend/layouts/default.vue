<template>
  <div class="min-h-screen flex bg-gray-100">
    <!-- Sidebar -->
    <LayoutsSideBar />

    <!-- Main content -->
    <div class="flex flex-col flex-1">
      <!-- Topbar -->
      <LayoutsTopBar />

      <!-- Dashboard Content -->
      <slot />
    </div>
  </div>
</template>

<script setup></script>
