export default defineEventHandler(async (event) => {
  const token = getCookie(event, "token");
  const {
    public: { apiGatewayBase },
  } = useRuntimeConfig();

  if (!token) {
    throw createError({ statusCode: 401, message: "Unauthorized" });
  }

  console.log("Fetching:", `${apiGatewayBase}/verify`); // Debug URL
  return await $fetch(`${apiGatewayBase}/verify`, {
    headers: { Authorization: `Bearer ${token}` },
  });
});
