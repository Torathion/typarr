import { describe, it, expect } from 'vitest';
import { F64, I8, isTypedArray, UI32, UI8C } from 'src'; // Adjust the path as needed

describe('isTypedArray', () => {
  it('should return true for a Float64Array', () => {
    expect(isTypedArray(new F64([1.1, 2.2]))).toBe(true);
  });

  it('should return true for a Uint32Array', () => {
    expect(isTypedArray(new UI32([1, 2, 3]))).toBe(true);
  });

  it('should return true for an empty Int8Array', () => {
    expect(isTypedArray(new I8([]))).toBe(true);
  });

  it('should return true for a Uint8ClampedArray', () => {
    expect(isTypedArray(new UI8C([255, 0]))).toBe(true);
  });

  it('should return false for a DataView', () => {
    expect(isTypedArray(new DataView(new ArrayBuffer(8)))).toBe(false);
  });

  it('should return false for a regular Array', () => {
    expect(isTypedArray([1, 2, 3])).toBe(false);
  });

  it('should return false for a plain object', () => {
    expect(isTypedArray({ a: 1, b: 2 })).toBe(false);
  });

  it('should return false for a string', () => {
    expect(isTypedArray('hello')).toBe(false);
  });

  it('should return false for null', () => {
    expect(isTypedArray(null)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isTypedArray(undefined)).toBe(false);
  });

  it('should return false for a number', () => {
    expect(isTypedArray(42)).toBe(false);
  });

  it('should return false for an ArrayBuffer directly', () => {
    expect(isTypedArray(new ArrayBuffer(8))).toBe(false);
  });
});
