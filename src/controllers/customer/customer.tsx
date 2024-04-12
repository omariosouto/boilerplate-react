import { HttpClient } from "@commons/http-client/index";

export async function fetchUserDataController() {
  const response = await HttpClient.get("https://api.github.com/users/omariosouto");
  return response.data;
}