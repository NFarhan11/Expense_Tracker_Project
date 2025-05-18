export default defineEventHandler(async (event) => {
  const token = getCookie(event, "token");
  const {
    public: { authApiBase },
  } = useRuntimeConfig();

  if (!token) {
    throw createError({ statusCode: 401, message: "Unauthorized" });
  }

  return await $fetch(`${authApiBase}/verify`, {
    headers: { Authorization: `Bearer ${token}` },
  });
});
