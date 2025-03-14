import type { Constructor, TypedArray } from 'typestar'

/**
 * Creates a new typed array by appending a value to an existing typed array. Due to typed arrays being
 * of a fixed length, we can't reuse the old typed array.
 *
 * @template T - The type of the input typed array, constrained to extend TypedArray
 * @param arr - The source typed array to copy from
 * @param value - The number to append to the new typed array
 * @returns A new typed array of the same type as the input, with the value appended
 */
export default function pushTA<T extends TypedArray>(arr: T, value: number): T {
  const len = arr.length
  if (!len) {
    const newArr = new (arr.constructor as Constructor<T>)(1)
    newArr[0] = value
    return newArr
  }
  const newArr = new (arr.constructor as Constructor<T>)(len + 1)
  newArr.set(arr)
  newArr[len] = value
  return newArr
}
