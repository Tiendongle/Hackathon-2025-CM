import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "~/mirage/utils/fetchData";
import { type Post } from "~/types/mockDataTypes";
import RequestCard from "~/components/Organisms/RequestCard";

export const Route = createFileRoute("/create/mentor")({
  component: RouteComponent,
});

function RouteComponent() {
  const query = useQuery({
    queryKey: ["learnPosts"],
    queryFn: () => fetchData({ apiName: "/requests/learn" }),
  });

  const posts = query?.data?.learnPosts;

  return (
    <div className="bg-gray-100">
      {posts?.map((post: Post) => <RequestCard post={post} />)}
    </div>
  );
}
