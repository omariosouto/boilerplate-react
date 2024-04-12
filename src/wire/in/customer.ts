import { s } from "@commons/schema";

export const CustomerLoginWireIn = s.object({
  id: s.number(),
  login: s.string(),
});

export type CustomerLoginWireIn = s.TypeOf<typeof CustomerLoginWireIn>;