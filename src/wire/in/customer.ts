import { s } from "@commons/schema";

export const CustomerLoginWireIn = s.object({
  id: s.number(),
  name: s.string(),
  login: s.string(),
  avatar_url: s.string(),
});

export type CustomerLoginWireIn = s.TypeOf<typeof CustomerLoginWireIn>;