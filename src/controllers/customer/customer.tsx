import { NotFoundError } from "@commons/errors";
import { fetchCustomerDataFromGitHub } from "src/diplomat/httpClient";
import { Customer } from "src/domain/customer";

export async function fetchUserDataController(): Promise<Customer> {
  return fetchCustomerDataFromGitHub();
}

export async function forceErrorController(): Promise<void> {
  throw new NotFoundError("Test error");
}