import { s } from "@commons/schema";

export const Customer = s.object({
  id: s.number(),
  login: s.string(),
  avatarUrl: s.string(),
  name: s.string(),
}).strict();

export type Customer = s.TypeOf<typeof Customer>;