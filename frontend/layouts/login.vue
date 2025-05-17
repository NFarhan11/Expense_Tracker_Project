<template>
    <div class="min-h-screen flex relative">
        <div class="w-1/2 bg-blue-50 bg-opacity-80 flex items-center justify-center">
            <img src="/public/auth-img.jpg" alt="" class="w-full h-full object-cover">

        </div>
        <div class="w-1/2 bg-gray-900 bg-opacity-80 flex items-center justify-center">
            <slot />
        </div>
    </div>
</template>

<script setup>
const colorMode = useColorMode()
colorMode.preference = 'dark'
</script>