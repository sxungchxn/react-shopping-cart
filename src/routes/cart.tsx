import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cart')({
  component: Cart,
})

function Cart() {
  return <div>cart page</div>
}
