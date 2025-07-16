import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile/upload')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/profile/upload"!</div>
}
