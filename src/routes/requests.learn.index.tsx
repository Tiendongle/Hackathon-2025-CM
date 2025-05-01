import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "~/mirage/utils/fetchData";
import { type Post } from "~/types/mockDataTypes";
import RequestCard from "~/components/Organisms/RequestCard";

export const Route = createFileRoute("/requests/learn/")({
  component: RouteComponent,
});

function RouteComponent() {
  const query = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchData({ apiName: "/requests/learn" }),
  });

  const posts = query?.data?.posts;

  return (
    <div className="bg-gray">
      {posts?.map((post: Post) => <RequestCard post={post} />)}
    </div>
  );
}
