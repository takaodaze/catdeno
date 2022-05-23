import { assertEquals } from "./deps.ts";

const fn = () => {
  return 3;
};

Deno.test("example test1", () => {
  assertEquals(fn(), 3);
});
