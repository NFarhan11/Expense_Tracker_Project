<template>
  <div class="w-full max-w-sm">
    <div class="flex items-center h-20  space-x-3">
      <UIcon name="mdi:bar-chart" class="w-8 h-8 text-green-600" />
      <span class="text-2xl font-bold">ExpTracker</span>
    </div>
    <h2 class="text-2xl font-semibold text-white mb-2">Register Now!</h2>
    <UForm @submit="register" :state="state" class="space-y-4">
      <UFormField>
        <UInput v-model="state.name" placeholder="Name" variant="outline" icon="heroicons-outline:user-circle"
          class="w-full" />
      </UFormField>
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
      <UButton type="submit" color="primary" block label="Register" />
    </UForm>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "login",
});

const loading = ref(false);
const router = useRouter();
const { public: { authApiBase } } = useRuntimeConfig();

const state = reactive({
  name: '',
  email: '',
  password: ''
})

const register = async () => {
  loading.value = true;

  try {
    const response = await $fetch(`${authApiBase}/register`, {
      method: 'POST',
      body: { name: state.name, email: state.email, password: state.password }
    });

    if (import.meta.client) {
      localStorage.setItem('token', response.token);
    }
    router.push("/");
  } catch (error) {
    console.log("Registration failed: ", error);
  }
}
</script>