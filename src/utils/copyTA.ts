import type { Constructor, TypedArray } from 'typestar'

/**
 *  Creates a shallow copy of a given TypedArray.
 *
 *  @template T - The type of TypedArray to copy.
 *  @param typedArr - The TypedArray to be copied.
 *  @returns A new TypedArray of the same type containing the same elements.
 */
export default function copyTA<T extends TypedArray>(typedArr: T): T {
  return new (typedArr.constructor as Constructor<T>)(typedArr)
}
