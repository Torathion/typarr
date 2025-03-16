import { describe, it, expect } from 'vitest'
import { F32, F64, I32, UI32, UI8, UI8C, uniqueTA } from 'src'

describe('uniqueTA', () => {
  it('should remove duplicates from a Float64Array', () => {
    expect(uniqueTA(new F64([1.1, 2.2, 1.1, 3.3, 2.2]))).toEqual(new F64([1.1, 2.2, 3.3]))
  })

  it('should handle an empty Uint32Array', () => {
    expect(uniqueTA(new UI32([]))).toEqual(new UI32([]))
  })

  it('should handle a single-element Int32Array', () => {
    expect(uniqueTA(new I32([42]))).toEqual(new I32([42]))
  })

  it('should preserve order in a Uint8Array with duplicates', () => {
    expect(uniqueTA(new UI8([5, 3, 5, 1, 3, 2]))).toEqual(new UI8([5, 3, 1, 2]))
  })

  it('should handle a Float32Array with no duplicates', () => {
    expect(uniqueTA(new F32([1.5, 2.5, 3.5]))).toEqual(new F32([1.5, 2.5, 3.5]))
  })

  it('should handle a Uint8ClampedArray with all same values', () => {
    expect(uniqueTA(new UI8C([10, 10, 10]))).toEqual(new UI8C([10]))
  })
})
