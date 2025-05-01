import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  // This is how we fetch data on server side in case we want to do that
  // loader: async () => {
  //   const users = await fetchUsers();
  //   return { users };
  // },
  component: Home,
});

function Home() {
  return (
    <div className="p-2">
      <h3>Welcome Home!!!</h3>
    </div>
  );
}
