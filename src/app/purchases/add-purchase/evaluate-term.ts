import * as mexp from 'math-expression-evaluator';

export function evaluateTerm(input: string): number | null {
  let result;
  if (!input) {
    return null;
  }
  const sanitizedTerm = input.replace(/,/g, '.').replace(/[^0-9().+\-*/ ]/g, '');
  try {
    result = mexp.eval(sanitizedTerm);
  } catch (e) {
    result = null;
  }
  return result;
}
