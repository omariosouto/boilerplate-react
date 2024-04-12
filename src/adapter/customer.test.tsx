import { generate } from "@commons/schema/test-file";
import { fromWireInGitHubToDomainCustomer } from "./customer";
import { CustomerLoginWireIn } from "src/wire/in/customer";

describe("fromWireInGitHubToDomainCustomer()", () => {
  it("returns a Customer object with the correct properties", () => {
    const wire = generate(CustomerLoginWireIn);
    const customer = fromWireInGitHubToDomainCustomer(wire);
    
    expect(customer).toEqual({
      id: wire.id,
      login: wire.login,
      avatarUrl: wire.avatar_url,
    });
  });
})