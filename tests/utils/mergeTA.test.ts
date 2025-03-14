import { describe, it, expect } from 'vitest'
import { mergeTA, UI8, I16 } from 'src'

describe('mergeTA', () => {
  it('should merge two Uint8Arrays', () => {
    const arr1 = new UI8([1, 2])
    const arr2 = new UI8([3, 4])
    const result = mergeTA(arr1, arr2)

    expect(result).toEqual(new UI8([1, 2, 3, 4]))
    expect(result).toBeInstanceOf(UI8)
    expect(result).not.toBe(arr1)
    expect(result).not.toBe(arr2)
  })

  it('should merge two Int16Arrays', () => {
    const arr1 = new I16([-1, 0])
    const arr2 = new I16([1, 2])
    const result = mergeTA(arr1, arr2)

    expect(result).toEqual(new I16([-1, 0, 1, 2]))
    expect(result).toBeInstanceOf(I16)
  })

  it('should handle empty first array', () => {
    const arr1 = new UI8([])
    const arr2 = new UI8([1, 2, 3])
    const result = mergeTA(arr1, arr2)

    expect(result).toEqual(new UI8([1, 2, 3]))
    expect(result).toBeInstanceOf(UI8)
    expect(result).not.toBe(arr2)
  })

  it('should handle empty second array', () => {
    const arr1 = new UI8([1, 2, 3])
    const arr2 = new UI8([])
    const result = mergeTA(arr1, arr2)

    expect(result).toEqual(new UI8([1, 2, 3]))
    expect(result).toBeInstanceOf(UI8)
    expect(result).not.toBe(arr1)
  })

  it('should handle both empty arrays', () => {
    const arr1 = new UI8([])
    const arr2 = new UI8([])
    const result = mergeTA(arr1, arr2)

    expect(result).toEqual(new UI8([]))
    expect(result).toBeInstanceOf(UI8)
  })

  it('should preserve original arrays', () => {
    const arr1 = new UI8([1, 2])
    const arr2 = new UI8([3, 4])
    const result = mergeTA(arr1, arr2)

    // Modify result
    result[0] = 99

    expect(arr1[0]).toBe(1)
    expect(arr2[0]).toBe(3)
    expect(result[0]).toBe(99)
  })

  it('should use first array constructor', () => {
    const arr1 = new UI8([1, 2])
    const arr2 = new UI8([3, 4])
    const result = mergeTA(arr1, arr2)

    expect(result.constructor).toBe(arr1.constructor)
  })
})
