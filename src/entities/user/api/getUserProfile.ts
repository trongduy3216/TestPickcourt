import { userApi } from "@/shared/api/modules";

export async function getUserProfile() {
  return userApi.getProfile();
}
