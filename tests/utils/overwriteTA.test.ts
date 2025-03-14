import { describe, it, expect } from 'vitest'
import { overwriteTA, UI8, I16 } from 'src'

describe('overwriteTA', () => {
  it('should overwrite array at offset 0', () => {
    const target = new UI8([0, 0, 0])
    const source = new UI8([1, 2])
    const result = overwriteTA(target, source)

    expect(result).toEqual(new UI8([1, 2]))
    expect(target).toEqual(new UI8([1, 2, 0]))
    expect(result).toBeInstanceOf(UI8)
  })

  it('should overwrite array at specified offset', () => {
    const target = new UI8([0, 0, 0, 0])
    const source = new UI8([1, 2])
    const result = overwriteTA(target, source, 1)

    expect(result).toEqual(new UI8([0, 1, 2]))
    expect(target).toEqual(new UI8([0, 1, 2, 0]))
    expect(result.buffer).toBe(target.buffer)
  })

  it('should return source if it is longer than target', () => {
    const target = new UI8([0, 0])
    const source = new UI8([1, 2, 3])
    const result = overwriteTA(target, source)

    expect(result).toEqual(new UI8([1, 2, 3]))
    expect(result).toBe(source)
    expect(target).toEqual(new UI8([0, 0])) // Target unchanged
  })

  it('should handle empty source array', () => {
    const target = new UI8([1, 2, 3])
    const source = new UI8([])
    const result = overwriteTA(target, source)

    expect(result).toEqual(new UI8([]))
    expect(target).toEqual(new UI8([1, 2, 3])) // Target unchanged
  })

  it('should work with different TypedArray types', () => {
    const target = new I16([0, 0, 0])
    const source = new I16([1000, 2000])
    const result = overwriteTA(target, source)

    expect(result).toEqual(new I16([1000, 2000]))
    expect(target).toEqual(new I16([1000, 2000, 0]))
    expect(result).toBeInstanceOf(I16)
  })

  it('should return a subarray view of the modified portion', () => {
    const target = new UI8([0, 0, 0, 0])
    const source = new UI8([1, 2])
    const result = overwriteTA(target, source, 1)

    expect(result.length).toBe(source.length + 1)
    expect(result).toEqual(new UI8([0, 1, 2]))
    expect(result.buffer).toBe(target.buffer)
  })

  it('should throw if offset is out of bounds', () => {
    const target = new UI8([0, 0])
    const source = new UI8([1])

    expect(() => overwriteTA(target, source, 3)).toThrow()
  })
})
