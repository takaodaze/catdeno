import { parseArgs } from "./util.ts";

try {
  const filename = parseArgs();
  const content = Deno.readTextFileSync(filename);
  console.log(content);
  Deno.exit(0);
} catch (e) {
  console.error(e.message);
  Deno.exit(1);
}
