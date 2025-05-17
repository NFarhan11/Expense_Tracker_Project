<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login">
            <input v-model="username" placeholder="Username" required />
            <input v-model="password" type="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "login",
});

const username = ref('');
const password = ref('');
const router = useRouter();
const { public: { authApiBase } } = useRuntimeConfig();

const login = async () => {
    try {
        const { token } = await $fetch(`${authApiBase}/login`, {
            method: 'POST',
            body: { username: username.value, password: password.value }
        });

        if (import.meta.client) {
            localStorage.setItem('token', token);
        }
        router.push('/');
    } catch (error) {
        console.error('Login failed:', error);
    }
}
</script>
