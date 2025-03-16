import type { TypedArray } from 'typestar'
import { F64, UI8 } from 'src/constants'

/**
 * Resizes an ArrayBuffer or TypedArray to a specified length, creating a new ArrayBuffer.
 * If the new length is shorter, the buffer is truncated; if longer, the additional space is filled with zeros.
 *
 * @param buffer - The input ArrayBuffer or TypedArray to resize.
 * @param length - The desired length of the new ArrayBuffer in bytes.
 * @returns A new ArrayBuffer of the specified length with the contents of the original buffer copied over.
 */
export default function resizeBuffer(buffer: ArrayBuffer | TypedArray, length: number): ArrayBuffer {
  const oldLen = buffer.byteLength
  if (!length) return new ArrayBuffer()
  if (oldLen === length) return buffer instanceof ArrayBuffer ? buffer.slice() : (buffer.buffer.slice() as ArrayBuffer)

  const srcArr = new UI8(buffer)
  const destArr = new UI8(length)
  const copyLen = Math.min(oldLen, length)

  let i
  // Optimize for small buffers through byte by byte copy
  if (copyLen < 8) {
    for (i = copyLen - 1; i >= 0; i--) destArr[i] = srcArr[i]
    return destArr.buffer as ArrayBuffer
  }
  // Round to next multiple of 8
  const floatArrLen = copyLen >> 3
  const floatArrDest = new F64(destArr.buffer as ArrayBuffer, srcArr.byteOffset, floatArrLen)
  const floatArrSrc = new F64(buffer, 0, floatArrLen)
  floatArrDest.set(floatArrSrc)

  // Copy remaining bytes
  for (i = floatArrLen << 3; i < copyLen; i++) {
    destArr[i] = srcArr[i]
  }
  return destArr.subarray(0, copyLen).buffer as ArrayBuffer
}
