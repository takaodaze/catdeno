import { assertEquals } from "https://deno.land/std@0.65.0/testing/asserts.ts";

const fn = () => {
  return 3;
};

Deno.test("example test1", () => {
  assertEquals(fn(), 3);
});
