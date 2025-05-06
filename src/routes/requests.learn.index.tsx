import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "~/mirage/utils/fetchData";
import { type Post } from "~/types/mockDataTypes";
import RequestCard from "~/components/Organisms/RequestCard";
import Icon from "~/components/Atoms/Icon";
import { Link } from "~/components/Atoms/Link";

export const Route = createFileRoute("/requests/learn/")({
  component: RouteComponent,
});

function RouteComponent() {
  const query = useQuery({
    queryKey: ["learnPosts"],
    queryFn: () => fetchData({ apiName: "/requests/learn" }),
  });

  const posts = query?.data?.learnPosts;

  return (
    <>
      <div className="relative bg-gray-100">
        {posts?.map((post: Post) => <RequestCard post={post} />)}
      </div>
      <Link
        to="/create/learn"
        className="w-fit sticky bottom-[108px] left-1/2 -translate-x-1/2  p-4 flex justify-center items-center rounded-2xl bg-accent text-white z-40 transition-transform hover:scale-105 hover:duration-200 ease-in-out duration-400 will-change-transform"
      >
        <span>Post a request</span>
        <span>
          <Icon iconName="add" className="ml-2" />
        </span>
      </Link>
    </>
  );
}
