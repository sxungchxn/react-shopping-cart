import { CartRequest, ProductRequest } from '@/types/api-type'

export const isNonNullableObject = (request: unknown): request is NonNullable<object> => {
  return typeof request === 'object' && request !== null
}

export const isProductRequest = (request: unknown): request is ProductRequest => {
  if (!isNonNullableObject(request)) return false

  return (
    'price' in request &&
    typeof request.price === 'number' &&
    'name' in request &&
    typeof request.name === 'string' &&
    'imageUrl' in request &&
    typeof request.imageUrl === 'string'
  )
}

export const isCartRequest = (request: unknown): request is CartRequest => {
  if (!isNonNullableObject(request)) return false

  return (
    'price' in request &&
    typeof request.price === 'number' &&
    'name' in request &&
    typeof request.name === 'string' &&
    'imageUrl' in request &&
    typeof request.imageUrl === 'string'
  )
}
