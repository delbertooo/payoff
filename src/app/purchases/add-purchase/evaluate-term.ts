
export function evaluateTerm(input: string): number | null {
  let result;
  const sanitizedTerm = input.replace(/,/g, '.').replace(/[^0-9().+\-*/]/g, '');
  try {
    eval(`result = ${sanitizedTerm};`);
  } catch (e) {
    result = null;
  }
  return result;
}
