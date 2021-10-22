export function encode(id: string) {
  return BigInt(id).toString(36);
}

export function decode(id: string) {
  return id
    .split("")
    .reduce((total, current) => total * 36n + BigInt(parseInt(current, 36)), 0n)
    .toString();
}