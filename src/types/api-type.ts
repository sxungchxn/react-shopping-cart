// response schema
export interface Response<T> {
  response: T
}

export interface Product {
  id: number
  price: number
  name: string
  imageUrl: string
}

export interface Cart {
  id: number
  product: Omit<Product, 'id'>
}

export interface OrderDetail extends Product {
  quantity: number
}

export interface Order {
  id: number
  orderDetails: OrderDetail[]
}

export interface ProductRequest extends Omit<Product, 'id'> {}

export interface CartRequest {
  product: Omit<Product, 'id'>
}
