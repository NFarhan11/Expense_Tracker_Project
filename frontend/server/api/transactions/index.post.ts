// POST api/v1/transactions
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const headers = getRequestHeaders(event);

    const res = await $fetch("http://localhost:8000/api/v1/transactions", {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return res;
  } catch (err: any) {
    throw createError({
      statusCode: err?.response?.status || 500,
      statusMessage: err?.data?.message || "Transaction submission failed",
      data: err?.data || null,
    });
  }
});
