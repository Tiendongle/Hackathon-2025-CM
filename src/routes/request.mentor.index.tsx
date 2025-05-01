import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/request/mentor/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/request/mentor/"!</div>
}
