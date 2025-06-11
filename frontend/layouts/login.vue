<template>
    <div class="flex min-h-screen">
        <div class="w-1/2">
            <div class="h-full w-full">
                <img src="/auth-img.jpg" alt="" class="object-cover w-full h-screen" />
            </div>
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