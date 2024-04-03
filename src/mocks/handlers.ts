import db from '../../db.json'
import { HttpResponse, PathParams, http } from 'msw'
import { Product, Cart, ProductRequest, CartRequest, Order } from '@/types/api-type'
import { isCartRequest, isProductRequest } from '@/types/type-guard'

const productList: Product[] = db.products
const cartList: Cart[] = db.carts
const orderList: Order[] = db.orders

let lastProductId = productList.at(-1)?.id ?? productList.length + 1
let lastCartId = cartList.at(-1)?.id ?? cartList.length + 1

export const handlers = [
  // product api
  http.get('/products', () => {
    return HttpResponse.json<Product[]>(productList)
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
    return HttpResponse.json<Product>(targetProduct)
  }),

  http.delete('/products/:id', ({ params }) => {
    const { id } = params
    const targetProductIdx = productList.findIndex(({ id: _id }) => _id === Number(id))
    if (targetProductIdx === -1) return new HttpResponse(null, { status: 404 })
    return new HttpResponse(null, { status: 204 })
  }),

  // cart api
  http.get('/carts', () => {
    return HttpResponse.json<Cart[]>(cartList)
  }),

  http.post<PathParams, CartRequest>('/carts', async ({ request }) => {
    const apiRequest = await request.json()
    if (!isCartRequest(apiRequest)) return new HttpResponse(null, { status: 400 })
    cartList.push({
      id: ++lastCartId,
      product: apiRequest,
    })
    return new HttpResponse(null, { status: 201 })
  }),

  // orders api
  http.get('/orders', () => {
    return HttpResponse.json<Order[]>(orderList)
  }),

  http.get('/orders/:id', ({ params }) => {
    const { id } = params
    const targetOrder = orderList.find(({ id: _id }) => _id === Number(id))
    if (!targetOrder) return new HttpResponse(null, { status: 404 })
    return HttpResponse.json<Order>(targetOrder)
  }),
]
