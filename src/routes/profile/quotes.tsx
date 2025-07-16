import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile/quotes')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/profile/quotes"!</div>
}
