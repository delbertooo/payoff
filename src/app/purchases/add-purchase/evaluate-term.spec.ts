import { evaluateTerm } from './evaluate-term';

describe('evaluateTerm', () => {

  it('numbers separated by whitespace are not concatenated', () => {
    expect(evaluateTerm('1 2')).toBeNull();
  });

  it('returns null on invalid expressions', () => {
    expect(evaluateTerm('')).toBeNull();
    expect(evaluateTerm(null)).toBeNull();
    expect(evaluateTerm(undefined)).toBeNull();
    expect(evaluateTerm('1 +')).toBeNull();
    expect(evaluateTerm('+')).toBeNull();
    expect(evaluateTerm('*')).toBeNull();
    expect(evaluateTerm('3 + (')).toBeNull();
  });
  
  it('can handle single values', () => {
    expect(evaluateTerm('1')).toBe(1);
    expect(evaluateTerm('-3.345')).toBe(-3.345);
    expect(evaluateTerm('0')).toBe(0);
  });
  
  it('can calculate expressions', () => {
    expect(evaluateTerm('1 / 2')).toBe(.5);
    expect(evaluateTerm('3 * -(2 + (3 * 1))')).toBe(-15);
    expect(evaluateTerm('-1+3*5')).toBe(14);
  });
  
  it('division by zero', () => {
    expect(['Infinity', Infinity]).toContain(evaluateTerm('1/0'));
  });

  it(`doesn't support binary literals`, () => {
    expect(evaluateTerm('9/010')).toBe(0.9);
  });

});
