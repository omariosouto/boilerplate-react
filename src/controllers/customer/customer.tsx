import { fetchCustomerDataFromGitHub } from "src/diplomat/httpClient";
import { Customer } from "src/domain/customer";

export async function fetchUserDataController(): Promise<Customer> {
  return fetchCustomerDataFromGitHub();
}