import Card from "~/components/Atoms/Card";
import { BaseImage as Image } from "~/components/Atoms/Image";
import { Header, Paragraph } from "~/components/Atoms/Typography";
import { type Post } from "~/types/mockDataTypes";
import { Link } from "~/components/Atoms/Link";
import Slider from "~/components/Atoms/Slider/Slider";
import Divider from "~/components/Atoms/Divider";

interface RequestCardProps {
  post: Post;
  type?: "learn" | "mentor";
}

const RequestCard = ({ post, type = "learn" }: RequestCardProps) => {
  // TODO: Add proper loading components here
  if (!post) return <div>Loading...</div>;

  const availableDays = post.bookings
    .map((booking) => booking.short)
    .join(", ");

  return (
    <Card
      className="border-white bg-white border-0 rounded-2xl m-auto overflow-hidden mb-4 w-11/12"
      key={post.id}
    >
      <Slider className="mb-6">
        {post.images.map((img) => (
          <div className="w-full h-52 overflow-hidden">
            <Image src={img} className="w-full h-full object-cover" />
          </div>
        ))}
      </Slider>
      <Link
        className="px-6 m-auto mb-6 flex gap-4 flex-col"
        to={`/requests/${type}/${post.id}`}
      >
        <div className="flex justify-between items-baseline  text-gray-900">
          <Header as="h1" className="text-2xl w-2/3">
            {post.header}
          </Header>
          <Header as="h2" className="text-lg">
            ${`${post.price}`}
          </Header>
        </div>
        <Paragraph
          variant="default"
          className="text-sm text-gray-400 text-left"
        >
          {post.summary}
        </Paragraph>
        <Divider className="" />
        <div className="flex gap-1 text-xs items-center">
          <Image src={post.user.userImage} className="w-4 h-4 rounded-full" />
          <span className="text-gray-900 font-semibold">{`${post.user.firstName} ${post.user.lastName[0]}`}</span>
          <span className="text-gray-400 font-normal">
            {`• Available ${availableDays}`}
          </span>
        </div>
      </Link>
    </Card>
  );
};

export default RequestCard;
