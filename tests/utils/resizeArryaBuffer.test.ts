import { describe, it, expect } from 'vitest'
import { resizeBuffer, UI8 } from 'src'

describe('resizeBuffer', () => {
  it('should enlarge ArrayBuffer and preserve data', () => {
    const original = new ArrayBuffer(5)
    const view = new UI8(original)
    view.set([1, 2, 3, 4, 5])

    const resized = resizeBuffer(original, 10)
    const resizedView = new UI8(resized)

    expect(resized.byteLength).toBe(10)
    expect(resizedView.slice(0, 5)).toEqual(new UI8([1, 2, 3, 4, 5]))
    expect(resizedView.slice(5)).toEqual(new UI8([0, 0, 0, 0, 0]))
  })

  it('should shrink ArrayBuffer and truncate data', () => {
    const original = new ArrayBuffer(10)
    const view = new UI8(original)
    view.set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    const resized = resizeBuffer(original, 5)
    const resizedView = new UI8(resized)

    expect(resized.byteLength).toBe(5)
    expect(resizedView).toEqual(new UI8([1, 2, 3, 4, 5]))
  })

  it('should handle exact size (no resize)', () => {
    const original = new ArrayBuffer(8)
    const view = new UI8(original)
    view.set([1, 2, 3, 4, 5, 6, 7, 8])

    const resized = resizeBuffer(original, 8)
    const resizedView = new UI8(resized)

    expect(resized.byteLength).toBe(8)
    expect(resizedView).toEqual(new UI8([1, 2, 3, 4, 5, 6, 7, 8]))
  })

  it('should handle empty ArrayBuffer', () => {
    const original = new ArrayBuffer(0)
    const resized = resizeBuffer(original, 5)
    const resizedView = new UI8(resized)

    expect(resized.byteLength).toBe(5)
    expect(resizedView).toEqual(new UI8([0, 0, 0, 0, 0]))
  })

  it('should handle non-8-byte-aligned sizes correctly', () => {
    const original = new ArrayBuffer(10)
    const view = new UI8(original)
    view.set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    const resized = resizeBuffer(original, 12)
    const resizedView = new UI8(resized)

    expect(resized.byteLength).toBe(12)
    expect(resizedView.slice(0, 10)).toEqual(new UI8([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
    expect(resizedView.slice(10)).toEqual(new UI8([0, 0]))
  })
})
