import type { Constructor, TypedArray } from 'typestar'

/**
 *  Removes duplicates from a TypedArray and returns a new TypedArray of the same type.
 *  Preserves the order of elements, keeping the first occurrence of each value.
 *
 *  @template T - The type of the TypedArray.
 *  @param arr - The input TypedArray to process.
 *  @returns A new TypedArray of the same type containing unique elements.
 */
export default function uniqueTA<T extends TypedArray>(arr: T): T {
  const length = arr.length
  const newArr: T = new (arr.constructor as Constructor<T>)(length)
  let pointer = 1
  newArr[0] = arr[0]
  let dup, j, value
  for (let i = 1; i < length; i++) {
    value = arr[i]
    dup = false
    for (j = 0; j < i; j++) {
      if (newArr[j] === value) {
        dup = true
        break
      }
    }
    if (!dup) newArr[pointer++] = value
  }
  return newArr.subarray(0, pointer) as T
}
