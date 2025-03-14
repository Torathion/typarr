import { describe, it, expect } from 'vitest'
import { copyTA, UI8, I16, F32 } from 'src'

describe('copyTA', () => {
  it('should create a copy of Uint8Array', () => {
    const original = new UI8([1, 2, 3])
    const copy = copyTA(original)

    expect(copy).toEqual(original)
    expect(copy).not.toBe(original)
    expect(copy).toBeInstanceOf(UI8)
  })

  it('should create a copy of Int16Array', () => {
    const original = new I16([-1, 0, 1])
    const copy = copyTA(original)

    expect(copy).toEqual(original)
    expect(copy).not.toBe(original)
    expect(copy).toBeInstanceOf(I16)
  })

  it('should create a copy of Float32Array', () => {
    const original = new F32([1.5, 2.7, 3.2])
    const copy = copyTA(original)

    expect(copy).toEqual(original)
    expect(copy).not.toBe(original)
    expect(copy).toBeInstanceOf(F32)
  })

  it('should preserve array values after modification', () => {
    const original = new UI8([1, 2, 3])
    const copy = copyTA(original)

    // Modify the copy
    copy[0] = 99

    expect(original[0]).toBe(1)
    expect(copy[0]).toBe(99)
  })

  it('should handle empty arrays', () => {
    const original = new UI8([])
    const copy = copyTA(original)

    expect(copy).toEqual(original)
    expect(copy).not.toBe(original)
    expect(copy.length).toBe(0)
  })

  it('should maintain the same buffer constructor', () => {
    const original = new UI8([1, 2, 3])
    const copy = copyTA(original)

    expect(copy.constructor).toBe(original.constructor)
  })
})
