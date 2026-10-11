const surroundingBlanks = /^[\s\p{Cf}]+|[\s\p{Cf}]+$/gu;

export function normalizeKey(key: string): string {
  return key.replace(surroundingBlanks, "").toLowerCase();
}
