<template>
  <main class="p-6 space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white dark:bg-dark-bg p-4 rounded shadow">
        <div class="flex items-center justify-between">
          <span class="text-green-500 text-sm">+11.01%</span>
        </div>
        <div class="mt-2 text-2xl font-bold">3,782</div>
        <div class="text-gray-500 dark:text-dark-text">Customers</div>
      </div>
      <div class="bg-white dark:bg-dark-bg p-4 rounded shadow">
        <div class="flex items-center justify-between">
          <span class="text-red-500 text-sm">-9.05%</span>
        </div>
        <div class="mt-2 text-2xl font-bold">5,359</div>
        <div class="text-gray-500 dark:text-dark-text">Orders</div>
      </div>
      <div class="bg-white dark:bg-dark-bg p-4 rounded shadow">
        <div class="text-sm text-gray-500 dark:text-dark-text mb-2">Monthly Target</div>
        <div class="text-center text-3xl font-bold">75.55%</div>
        <div class="text-center text-green-500 text-sm">+10%</div>
      </div>

    </div>
  </main>
</template>

<script setup>
definePageMeta({
  layout: "default",
  middleware: ['auth']
});
</script>
