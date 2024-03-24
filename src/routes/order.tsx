import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/order')({
  component: Order,
})

function Order() {
  return <div>Order page</div>
}
