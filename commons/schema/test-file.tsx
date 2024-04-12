import { generateMock } from '@anatine/zod-mock';
import merge from "lodash/merge";
import { ZodTypeAny } from "zod";

export function generate<Schema = any>(schema: Schema, overrides: Partial<any> = {}) {
  const fakeData = generateMock(schema as ZodTypeAny);
  return merge(fakeData, overrides);
}