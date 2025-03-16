import type { TypedArray, TypedArrayConstructor } from 'typestar'

declare module 'typarr' {
  /** TypedArray constructor for 64-bit floating point numbers */
  export const F64: TypedArrayConstructor<Float64Array>

  /** TypedArray constructor for unsigned 32-bit integers */
  export const UI32: TypedArrayConstructor<Uint32Array>

  /** TypedArray constructor for unsigned 8-bit integers */
  export const UI8: TypedArrayConstructor<Uint8Array>

  /** TypedArray constructor for signed 32-bit integers */
  export const I32: TypedArrayConstructor<Int32Array>

  /** TypedArray constructor for 32-bit floating point numbers */
  export const F32: TypedArrayConstructor<Float32Array>

  /** TypedArray constructor for signed 8-bit integers */
  export const I8: TypedArrayConstructor<Int8Array>

  /** TypedArray constructor for unsigned 16-bit integers */
  export const UI16: TypedArrayConstructor<Uint16Array>

  /** TypedArray constructor for signed 16-bit integers */
  export const I16: TypedArrayConstructor<Int16Array>

  /** TypedArray constructor for unsigned 8-bit integers (clamped) */
  export const UI8C: TypedArrayConstructor<Uint8ClampedArray>

  /** Maximum value for a signed 8-bit integer */
  export const I8_MAX: 127

  /** Maximum value for an unsigned 8-bit integer */
  export const UI8_MAX: 255

  /** Maximum value for a signed 16-bit integer */
  export const I16_MAX: 32767

  /** Maximum value for an unsigned 16-bit integer */
  export const UI16_MAX: 65535

  /** Maximum value for a signed 32-bit integer */
  export const I32_MAX: 2147483647

  /** Maximum value for an unsigned 32-bit integer */
  export const UI32_MAX: 4294967295

  /** Maximum value for a 32-bit floating point number */
  export const F32_MAX: 3.4e38

  /** Maximum value for a 64-bit floating point number */
  export const F64_MAX: 1.79e308

  /** Minimum value for a signed 8-bit integer */
  export const I8_MIN: -128

  /** Minimum value for a signed 16-bit integer */
  export const I16_MIN: -32768

  /** Minimum value for a signed 32-bit integer */
  export const I32_MIN: -2147483648

  /** Half-precision floating-point difference between the smallest representable value above 1 and 1, a.k.a. epsilon, IEEE754 */
  export const F16_EPS: 0.0009765625

  /** Half-precision floating point square root epsilon, IEEE754 */
  export const F16_SEPS: 0.03125

  /** Half-precision floating point cube root epsilon, IEEE754 */
  export const F16_CEPS: 0.09921256574801247

  /** Single-precision floating-point difference between the smallest representable value above 1 and 1, a.k.a. epsilon, IEEE754 */
  export const F32_EPS: 1.1920928955078125e-7

  /** Single-precision floating point square root epsilon, IEEE754 */
  export const F32_SEPS: 0.0003452669770922512

  /** Single-precision floating point cube root epsilon, IEEE754 */
  export const F32_CEPS: 0.004921566694974899

  /** Double-precision floating-point difference between the smallest representable value above 1 and 1, a.k.a. epsilon, IEEE754 */
  export const F64_EPS: 2.220446049250313e-16

  /** Double-precision floating point square root epsilon, IEEE754 */
  export const F64_SEPS: 0.1490116119384765625e-7

  /** Double-precision floating point cube root epsilon, IEEE754 */
  export const F64_CEPS: 0.0000060554544523933395

  /** Double-precision floating point fourth root epsilon, IEEE754 */
  export const F64_FROOT_EPS: 0.0001220703125

  /** Half-precision floating-point bias, IEEE754 */
  export const F16_BIAS: 15

  /** Single-precision floating-point bias, IEEE754 */
  export const F32_BIAS: 127

  /** Double-precision floating-point bias, IEEE754 */
  export const F64_BIAS: 1023

  // SIZES IN BYTES
  /** Size of a Int8Array number */
  export const I8_SIZE: 1

  /** Size of a Int16Array number */
  export const I16_SIZE: 2

  /** Size of a Int32Array number */
  export const I32_SIZE: 4

  /** Size of a Int64Array number */
  export const I64_SIZE: 8

  /** Size of a UInt8Array number */
  export const UI8_SIZE: 1

  /** Size of a UInt16Array number */
  export const UI16_SIZE: 2

  /** Size of a UInt32Array number */
  export const UI32_SIZE: 4

  /** Size of a UInt64Array number */
  export const UI64_SIZE: 8

  /** Size of a Float32Array number */
  export const F32_SIZE: 4

  /** Size of a Float64Array number */
  export const F64_SIZE: 8

  /** The effective number of significant bits in half-precision floating-point (includes 1 hidden bit, IEEE754 standard). */
  export const F16_PREC: 11

  /** The effective number of significant bits in single-precision floating-point (includes 1 hidden bit, IEEE754 standard). */
  export const F32_PREC: 24

  /** The effective number of significant bits in double-precision floating-point (includes 1 hidden bit, IEEE754 standard). */
  export const F64_PREC: 53

  // EXPONENTS
  /** The maximum base-10 exponent for half-precision floating-point values. */
  export const MAX_F16_EXP: 5

  /** The maximum base-10 exponent for single-precision floating-point values. */
  export const MAX_F32_EXP: 38

  /** The maximum base-10 exponent for double-precision floating-point values. */
  export const MAX_F64_EXP: 308

  /** The minimum base-10 exponent for half-precision floating-point values. */
  export const MIN_F16_EXP: -5

  /** The minimum base-10 exponent for single-precision floating-point values. */
  export const MIN_F32_EXP: -38

  /** The minimum base-10 exponent for double-precision floating-point values. */
  export const MIN_F64_EXP: -308

  /** The minimum base-2 exponent for normalized double-precision floating-point values. */
  export const MIN_F64_2EXP: -1022

  // NORMALIZED VALUES
  /** The smallest positive normalized value for half-precision floating-point (IEEE754 standard). */
  export const MIN_F16_NORM: 6.103515625e-5

  /** The smallest positive normalized value for single-precision floating-point (IEEE754 standard). */
  export const MIN_F32_NORM: 1.1754943508222875e-38

  /** The smallest positive normalized value for double-precision floating-point (IEEE754 standard). */
  export const MIN_F64_NORM: 2.2250738585072014e-308

  // SUBNORMAL VALUES
  /** The smallest positive subnormal value for half-precision floating-point (IEEE754 standard). */
  export const MIN_F16_SUBNORM: 5.960464477539063e-8

  /** The smallest positive subnormal value for single-precision floating-point (IEEE754 standard). */
  export const MIN_F32_SUBNORM: 1.401298464324817e-45

  /** The smallest positive subnormal value for double-precision floating-point (IEEE754 standard). */
  export const MIN_64_SUBNORM: 4.940656458412465e-324

  /** The maximum base-10 exponent for subnormal half-precision floating-point values. */
  export const MAX_F16_10SUBNORM: -5

  /** The maximum base-10 exponent for subnormal single-precision floating-point values. */
  export const MAX_F32_10SUBNORM: -38

  /** The maximum base-10 exponent for subnormal double-precision floating-point values. */
  export const MAX_F64_10SUBNORM: -308

  /** The maximum base-2 exponent for subnormal half-precision floating-point values. */
  export const MAX_F16_2SUBNORM: -15

  /** The maximum base-2 exponent for subnormal single-precision floating-point values. */
  export const MAX_F32_2SUBNORM: -127

  /** The maximum base-2 exponent for subnormal double-precision floating-point values. */
  export const MAX_F64_2SUBNORM: -1023

  /** The minimum base-10 exponent for subnormal double-precision floating-point values. */
  export const MIN_F64_10SUBNORM: -324

  /** The minimum biased base-2 exponent for subnormal double-precision floating-point values. */
  export const MIN_F64_2SUBNORM: -1074

  // MASKS
  /** High word mask for the exponent and sign in double-precision floating-point numbers (IEEE754 standard). */
  export const F64_HIGHMASK: 2146435072

  /** High word significant mask for double-precision floating-point numbers (IEEE754 standard). */
  export const F64_HIGHSMASK: 1048575
  /**
   *  Creates a shallow copy of a given TypedArray.
   *
   *  @template T - The type of TypedArray to copy.
   *  @param typedArr - The TypedArray to be copied.
   *  @returns A new TypedArray of the same type containing the same elements.
   */
  export function copyTA<T extends TypedArray>(typedArr: T): T
  /**
   *  Merges two TypedArrays of the same type into a new TypedArray.
   *
   *  @template T - The type of TypedArray to merge
   *  @param a - The first TypedArray
   *  @param b - The second TypedArray to append
   *  @returns A new TypedArray containing all elements from both input arrays
   */
  export function mergeTA<T extends TypedArray>(a: T, b: T): T
  /**
   *  Overwrites a portion of a TypedArray with data from another TypedArray.
   *
   *  @template T - The type of TypedArray to operate on
   *  @param arr - The target TypedArray to overwrite
   *  @param data - The source TypedArray containing the data to write
   *  @param offset - The starting position in the target array to begin writing (default: 0)
   *  @returns A TypedArray view of the modified portion, or the source data if it's longer than the target
   */
  export function overwriteTA<T extends TypedArray>(arr: T, data: T, offset?: number): T
  /**
   * Creates a new typed array by appending a value to an existing typed array. Due to typed arrays being
   * of a fixed length, we can't reuse the old typed array.
   *
   * @template T - The type of the input typed array, constrained to extend TypedArray
   * @param arr - The source typed array to copy from
   * @param value - The number to append to the new typed array
   * @returns A new typed array of the same type as the input, with the value appended
   */
  export function pushTA<T extends TypedArray>(arr: T, value: number): T
  /**
   * Resizes an ArrayBuffer or TypedArray to a specified length, creating a new ArrayBuffer.
   * If the new length is shorter, the buffer is truncated; if longer, the additional space is filled with zeros.
   *
   * @param buffer - The input ArrayBuffer or TypedArray to resize.
   * @param length - The desired length of the new ArrayBuffer in bytes.
   * @returns A new ArrayBuffer of the specified length with the contents of the original buffer copied over.
   */
  export function resizeBuffer(buffer: ArrayBuffer | TypedArray, length: number): ArrayBuffer
  /**
   *  Removes duplicates from a TypedArray and returns a new TypedArray of the same type.
   *  Preserves the order of elements, keeping the first occurrence of each value.
   *
   *  @template T - The type of the TypedArray.
   *  @param arr - The input TypedArray to process.
   *  @returns A new TypedArray of the same type containing unique elements.
   */
  export function uniqueTA<T extends TypedArray>(arr: T): T
  /**
   *  Checks if a value is a TypedArray (e.g., Float64Array, Uint32Array, etc.).
   *  Returns false for DataView instances, even though they are views of an ArrayBuffer.
   *
   *  @param value - The value to check.
   *  @returns `true` if the value is a TypedArray, otherwise `false`.
   */
  export function isTypedArray(value: unknown): value is TypedArray
}
