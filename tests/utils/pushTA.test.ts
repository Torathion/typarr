import { describe, it, expect } from 'vitest'
import { pushTA, UI8, I32, F64, F32, I16 } from 'src'

describe('pushTA', () => {
  it('should append to Int32Array', () => {
    const input = new I32([1, 2, 3])
    const result = pushTA(input, 4)

    expect(result).toBeInstanceOf(I32)
    expect(result).toEqual(new I32([1, 2, 3, 4]))
    expect(input).toEqual(new I32([1, 2, 3])) // Original unchanged
  })

  it('should append to Float64Array', () => {
    const input = new F64([1.1, 2.2])
    const result = pushTA(input, 3.3)

    expect(result).toBeInstanceOf(F64)
    expect(result).toEqual(new F64([1.1, 2.2, 3.3]))
  })

  it('should handle empty array', () => {
    const input = new UI8([])
    const result = pushTA(input, 42)

    expect(result).toBeInstanceOf(UI8)
    expect(result).toEqual(new UI8([42]))
  })

  it('should handle different number types', () => {
    const input = new F32([])
    const result = pushTA(input, 3.14)

    expect(result).toBeInstanceOf(F32)
    expect(result[0]).toBeCloseTo(3.14)
  })

  it('should not modify input array', () => {
    const input = new I16([1, 2])
    const original = new I16(input)
    pushTA(input, 3)

    expect(input).toEqual(original)
  })
})
