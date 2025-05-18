<template>
    <div class="w-full max-w-sm">
        <div class="flex items-center h-20  space-x-3">
            <UIcon name="mdi:bar-chart" class="w-8 h-8 text-green-600" />
            <span class="text-2xl font-bold">ExpTracker</span>
        </div>
        <h2 class="text-2xl font-semibold text-white mb-2">Sign In to your Account</h2>
        <p class="text-gray-400 mb-6">Welcome back! Please enter your details</p>
        <UForm @submit="login" :state="state" class="space-y-4">
            <UFormField>
                <UInput v-model="state.email" placeholder="Email" variant="outline" icon="heroicons-outline:mail"
                    class="w-full" />
            </UFormField>
            <UFormField>
                <UInput v-model="state.password" type="password" placeholder="Password" variant="outline"
                    icon="heroicons-outline:key" class="w-full" />
            </UFormField>
            <div class="flex justify-between text-sm text-gray-400">
                <UCheckbox label="Remember me" color="white" />
                <a href="#" class="hover:text-blue-400">Forgot Password?</a>
            </div>
            <UButton type="submit" color="primary" block label="Sign In" />
        </UForm>
        <USeparator label="Or sign up now!" color="primary" type="solid" size="xs" class="mt-4" />

        <p class="text-center mt-4 text-gray-400 text-sm">
            Don't have an account? <NuxtLink to="/register" class="text-blue-400 hover:underline">Sign Up</NuxtLink>
        </p>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "login",
});

const state = reactive({
    email: '',
    password: '',
});

const router = useRouter();

const login = async () => {
    try {
        await $fetch('/api/login', {
            method: 'POST',
            body: { email: state.email, password: state.password }
        });
        router.push('/');
    } catch (error) {
        console.error('Login failed:', error);
    }
}
</script>
