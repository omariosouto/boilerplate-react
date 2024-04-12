import { HttpClient } from "@commons/http-client/index";
import { Customer } from "../domain/customer";
import { fromWireInGitHubToDomainCustomer } from "src/adapter/customer";

export async function fetchCustomerDataFromGitHub(): Promise<Customer> {
  const response = await HttpClient.get("https://api.github.com/users/omariosouto");
  return fromWireInGitHubToDomainCustomer(response.data);
}