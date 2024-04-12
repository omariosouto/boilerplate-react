import { Customer } from "src/domain/customer";
import { CustomerLoginWireIn } from "src/wire/in/customer";

export function fromWireInGitHubToDomainCustomer(wireIn: CustomerLoginWireIn): Customer {
  return Customer.parse({
    id: wireIn.id,
    login: wireIn.login,
    avatarUrl: wireIn.avatar_url,
    name: wireIn.name,
  });
}