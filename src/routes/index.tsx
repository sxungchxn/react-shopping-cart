import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Product,
})

function Product() {
  return <div>product page</div>
}
