import { test, describe, expect } from './tests.js';
import { snakeCase, kebabCase, camelCase, titleCase } from './transformText.js';

const testMessage = 'simple is best';

describe('텍스트 트랜스폼 유틸리티 테스트', () => {
  test(`snakeCase('simple is best') -> 'simple_is_best'`, () => {
    expect(snakeCase(testMessage)).toBe('simple_is_best');
  });

  test(`kebabCase('simple is best') -> 'simple-is-best'`, () => {
    expect(kebabCase(testMessage)).toBe('simple-is-best');
  });

  test(`camelCase('simple is best') -> 'simpleIsBest'`, () => {
    expect(camelCase(testMessage)).toBe('simpleIsBest');
  });

  test(`titleCase('simple is best') -> 'SimpleIsBest'`, () => {
    expect(titleCase(testMessage)).toBe('SimpleIsBest');
  });
});
