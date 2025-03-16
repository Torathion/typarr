import type { TypedArray } from 'typestar'

/**
 *  Checks if a value is a TypedArray (e.g., Float64Array, Uint32Array, etc.).
 *  Returns false for DataView instances, even though they are views of an ArrayBuffer.
 *
 *  @param value - The value to check.
 *  @returns `true` if the value is a TypedArray, otherwise `false`.
 */
export default function isTypedArray(value: unknown): value is TypedArray {
  return ArrayBuffer.isView(value) && !(value instanceof DataView)
}

