import { hoge } from "./hoge.ts";

function parseArgs() {
  const args = Deno.args;
  if (args.length < 1) {
    throw new Error("please a file name");
  }
  const filename = args[0];
  return filename;
}

try {
  const filename = parseArgs();
  const content = Deno.readTextFileSync(filename);
  console.log(content);
  hoge();
  Deno.exit(0);
} catch (e) {
  console.error(e.message);
  Deno.exit(1);
}
