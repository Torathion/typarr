import type { TypedArray } from 'typestar'

/**
 *  Overwrites a portion of a TypedArray with data from another TypedArray.
 *
 *  @template T - The type of TypedArray to operate on
 *  @param arr - The target TypedArray to overwrite
 *  @param data - The source TypedArray containing the data to write
 *  @param offset - The starting position in the target array to begin writing (default: 0)
 *  @returns A TypedArray view of the modified portion, or the source data if it's longer than the target
 */
export default function overwriteTypedArray<T extends TypedArray>(arr: T, data: T, offset = 0): T {
  if (data.length > arr.length) return data
  arr.set(data, offset)
  return arr.subarray(0, data.length + offset) as T
}
