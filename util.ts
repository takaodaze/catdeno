export function parseArgs() {
  const args = Deno.args;
  if (args.length < 1) {
    throw new Error("please a file name");
  }
  const filename = args[0];
  return filename;
}
