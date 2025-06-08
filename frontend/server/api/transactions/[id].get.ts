// GET /api/transactions/:id
export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");

    const res = await $fetch(
      `http://localhost:8000/api/v1/transactions/${id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );

    return res;
  } catch (err: any) {
    throw createError({
      statusCode: err?.response?.status || 500,
      statusMessage: err?.data?.error || "Failed to fetch transactions",
      data: err?.data || null,
    });
  }
});
