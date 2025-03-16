import type { Constructor, TypedArray } from 'typestar'
import copyTA from './copyTA'

/**
 *  Merges two TypedArrays of the same type into a new TypedArray.
 *
 *  @template T - The type of TypedArray to merge
 *  @param a - The first TypedArray
 *  @param b - The second TypedArray to append
 *  @returns A new TypedArray containing all elements from both input arrays
 */
export default function mergeTA<T extends TypedArray>(a: T, b: T): T {
  const aLen = a.length
  if (!aLen) return copyTA(b)
  const c = new (a.constructor as Constructor<T>)(aLen + b.length)
  c.set(a)
  c.set(b, aLen)
  return c
}
