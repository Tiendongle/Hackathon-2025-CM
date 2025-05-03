import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "~/mirage/utils/fetchData";
import RequestCardDetails from "~/components/Organisms/RequestCardDetails";

export const Route = createFileRoute("/requests/learn/$postId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { postId } = Route.useParams();
  const query = useQuery({
    queryKey: ["post", postId],
    queryFn: () => fetchData({ apiName: `/requests/learn/${postId}` }),
  });
  const post = query?.data?.learnPost;

  return (
    <div className="bg-gray-100 mb-10">
      <RequestCardDetails post={post} />
    </div>
  );
}
