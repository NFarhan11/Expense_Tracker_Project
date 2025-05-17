export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = import.meta.client ? localStorage.getItem("token") : null;
  const {
    public: { authApiBase },
  } = useRuntimeConfig();

  // If no token
  if (!token && to.path !== "/login") {
    return navigateTo("/login");
  }

  // If has token
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
