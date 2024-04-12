import { HttpClient } from "@commons/http-client";

export async function fetchUserDataController() {
  const response = await HttpClient.get("https://api.github.com/users/omariosouto");
  return response.data;
}