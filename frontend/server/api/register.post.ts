import { AuthResponse } from "~/types/auth";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const {
    public: { apiGatewayBase },
  } = useRuntimeConfig();

  const res = await $fetch<AuthResponse>(`${apiGatewayBase}/register`, {
    method: "POST",
    body,
  });

  setCookie(event, "token", res.token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60,
  });

  return { user: res.user };
});
