export default defineNuxtRouteMiddleware(async (to, from) => {
  // Ignore SSR
  if (!import.meta.client) return;

  const token = localStorage.getItem("token");
  const {
    public: { authApiBase },
  } = useRuntimeConfig();

  // If no token
  if (!token && to.path !== "/login") {
    return navigateTo("/login");
  }

  // Verify token
  if (token && to.path !== "/login") {
    try {
      await $fetch(`${authApiBase}/verify`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      localStorage.removeItem("token");
      return navigateTo("/login");
    }
  }
});
