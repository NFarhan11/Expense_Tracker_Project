// POST api/v1/transactions
export default defineEventHandler(async (event) => {
  // return "post handler";
  const body = await readBody(event);
  console.log("body: ", body); // body:  { user_id: 26, category_id: 1, date: '2025-06-05', amount: 2 }
  const headers = getRequestHeaders(event);
  console.log("header: ", headers);

  const res = await $fetch("http://localhost:4000/api/v1/transactions", {
    method: "POST",
    body,
    headers: {
      Authorization: headers.authorization || "",
      "Content-Type": "application/json",
    },
  });

  return res;
});
