import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "~/mirage/utils/fetchData";
import { type Post } from "~/types/mockDataTypes";
import RequestCard from "~/components/Organisms/RequestCard";
import Icon from "~/components/Atoms/Icon";
import { Link } from "~/components/Atoms/Link";

export const Route = createFileRoute("/requests/mentor/")({
  component: RouteComponent,
});

function RouteComponent() {
  const query = useQuery({
    queryKey: ["mentorPosts"],
    queryFn: () => fetchData({ apiName: "/requests/mentor" }),
  });

  const posts = query?.data?.mentorPosts;

  return (
    <>
      <div className="relative bg-gray-100">
        {posts?.map((post: Post) => <RequestCard type="mentor" post={post} />)}
      </div>
      <Link
        to="/create/mentor"
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
