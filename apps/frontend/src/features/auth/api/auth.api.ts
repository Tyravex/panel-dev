import { api } from "@/shared/api/client";
import { endpoints } from "@/shared/api/endpoints";

export const loginApi = (data: any) =>
  api(endpoints.auth.login, {
    method: "POST",
    body: JSON.stringify(data),
  });