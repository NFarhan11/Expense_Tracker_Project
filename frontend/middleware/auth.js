export default defineNuxtRouteMiddleware(async (to, from) => {
  // Ignore SSR
  if (!import.meta.client) return;

  try {
    await $fetch("/api/verify");
  } catch (e) {
    return navigateTo("/login");
  }
});
