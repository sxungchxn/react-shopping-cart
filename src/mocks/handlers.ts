import db from '../../db.json'
import { HttpResponse, PathParams, http } from 'msw'
import { Response, Product, Cart, ProductRequest, CartRequest } from '@/types/api-type'
import { isCartRequest, isProductRequest } from '@/types/type-guard'

const productList: Product[] = db.products
const cartList: Cart[] = db.carts

let lastProductId = productList.at(-1)?.id ?? productList.length + 1
let lastCartId = cartList.at(-1)?.id ?? cartList.length + 1

export const handlers = [
  // product api
  http.get('/products', () => {
    return HttpResponse.json<Response<Product[]>>({
      response: productList,
    })
  }),

  http.post<PathParams, ProductRequest>('/products', async ({ request }) => {
    const apiRequest = await request.json()
    if (!isProductRequest(apiRequest)) return new HttpResponse(null, { status: 400 })
    const newProduct = { id: ++lastProductId, ...apiRequest }
    productList.push(newProduct)
    return new HttpResponse(null, { status: 201 })
  }),

  http.get('/products/:id', ({ params }) => {
    const { id } = params
    const targetProduct = productList.find(({ id: _id }) => _id === Number(id))
    if (!targetProduct) return new HttpResponse(null, { status: 404 })
    return HttpResponse.json<Response<Product>>({
      response: targetProduct,
    })
  }),

  http.delete('/products/:id', ({ params }) => {
    const { id } = params
    const targetProductIdx = productList.findIndex(({ id: _id }) => _id === Number(id))
    if (targetProductIdx === -1) return new HttpResponse(null, { status: 404 })
    return new HttpResponse(null, { status: 204 })
  }),

  // cart api
  http.get('/carts', () => {
    return HttpResponse.json<Response<Cart[]>>({
      response: cartList,
    })
  }),

  http.post<PathParams, CartRequest>('/carts', async ({ request }) => {
    const apiRequest = await request.json()
    if (!isCartRequest(apiRequest)) return new HttpResponse(null, { status: 400 })
    cartList.push({
      id: ++lastCartId,
      ...apiRequest,
    })
    return new HttpResponse(null, { status: 201 })
  }),
]