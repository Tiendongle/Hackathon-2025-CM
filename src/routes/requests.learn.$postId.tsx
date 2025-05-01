import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "~/mirage/utils/fetchData";

export const Route = createFileRoute("/requests/learn/$postId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { postId } = Route.useParams();
  const query = useQuery({
    queryKey: ["post", postId],
    queryFn: () => fetchData({ apiName: `/requests/learn/${postId}` }),
  });

  return <div>Hello "/requests/learn/$postId"!</div>;
}
