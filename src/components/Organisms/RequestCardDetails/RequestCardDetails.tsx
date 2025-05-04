import Icon from "~/components/Atoms/Icon";
import Slider from "~/components/Atoms/Slider/Slider";
import { BaseImage as Image } from "~/components/Atoms/Image";
import { type Post } from "~/types/mockDataTypes";
import { formatDateToMMMDD, formatDateToAgo } from "~/utils/dateUtils";
import { Header, Paragraph } from "~/components/Atoms/Typography";
import Divider from "~/components/Atoms/Divider";
import GroupDataShowcase from "./GroupDataShowcase";
import Card from "~/components/Atoms/Card";
import TitleWithIcon from "./TitleWithIcon";
import Reviews from "./Reviews";

interface RequestCardDetailsProps {
  post: Post;
}

const RequestCardDetails = ({ post }: RequestCardDetailsProps) => {
  if (!post) return <div>Loading...</div>;
  const onBackButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    window.history.back();
  };
  const postDate = formatDateToMMMDD(post.postDate);
  const courseDetails = post.user.coursesTeach?.find(
    (course) => course.course.id === post.hobby.id
  );
  const {
    name: addressName,
    address,
    city,
    province,
    postalCode,
  } = post.location;
  const classDetailData = [
    { detail: `$${post.price.toString()}`, title: "Class rate" },
    { detail: post.duration, title: "Duration" },
    { detail: post.skilLevel.name, title: "Skil Level" },
  ];

  const ratingDetailsData = [
    {
      detail: (
        <div className="flex justify-center items-center text-accent">
          {`${courseDetails?.rating?.toFixed(1)}`}
          <Icon iconName="star" className="w-4" />
        </div>
      ),
      title: "Rating",
    },
    {
      detail: courseDetails?.participants,
      title: "Participants",
    },
    { detail: courseDetails?.reviews, title: "Reviews" },
  ];

  const ratingStarsDisplay = (starCount: number) => {
    const starArr = [];
    for (let i = 1; i <= starCount; i++) {
      starArr.push(<Icon iconName="star" className="text-accent w-3 h-3 " />);
    }

    return starArr.map((star) => star);
  };

  return (
    <div className="w-full bg-neutral-50">
      <div className="sticky top-0 flex justify-between w-full px-6 py-1.5 bg-white m-auto z-50">
        <button onClick={onBackButtonClick}>
          <Icon iconName="left-arrow" />
        </button>
        <div className="flex justify-center">
          <button onClick={() => console.log("shared")}>
            <Icon iconName="share" />
          </button>
          <button onClick={() => console.log("added to favorites")}>
            <Icon iconName="heart" />
          </button>
        </div>
      </div>
      <Slider className="mb-8">
        {post.images.map((img) => (
          <div className="w-full h-52 overflow-hidden">
            <Image src={img} className="w-full h-full object-cover" />
          </div>
        ))}
      </Slider>
      <div className="px-6 m-auto flex gap-6 flex-col">
        <div className="flex">
          <Image src={post.user.userImage} className="w-9 h-9 rounded-full" />
          <div className="flex flex-col ml-4">
            <span className="text-gray-900 text-sm">{post.user.name}</span>
            <span className="text-gray-500 text-xs">{`Posted ${postDate}`}</span>
          </div>
        </div>
        <Header as="h1" className="text-4xl text-gray-900">
          {post.header}
        </Header>
        <Divider />
        <GroupDataShowcase data={classDetailData} variant="class-detail" />
        <Divider />
        <Paragraph
          variant="default"
          className="whitespace-pre-line text-gray-600 text-sm"
        >
          {post.details}
        </Paragraph>
        <GroupDataShowcase data={ratingDetailsData} variant="rating-detail" />
        <TitleWithIcon title="Location" iconName="location" />
        <Card variant="noBorder">
          <div>
            <div className="text-lg"> {addressName}</div>
            <div className="text-xs">{`${address}, ${city}, ${province}, ${postalCode}`}</div>
          </div>
          <div className="flex justify-center flex-col">
            <Icon iconName="arrow-down" className="" />
          </div>
        </Card>
        <TitleWithIcon title="Bookings" iconName="calendar" />
        <div className="flex flex-col gap-2">
          {post.bookings.map((booking, index) => (
            <Card variant="noBorder" key={index}>
              <div>
                <div>{booking.day}</div>
                <div>{`${booking.startTime} - ${booking.endTime}`}</div>
              </div>
              <button className="rounded-2xl bg-accent text-white px-6">
                Inquire
              </button>
            </Card>
          ))}
        </div>
        <TitleWithIcon
          title="Here's what people are saying"
          iconName="review"
        />
        <div className="flex gap-3 flex-nowrap overflow-x-auto ">
          {post.reviews.map((review) => {
            return (
              <Card
                variant="noBorder"
                className="!justify-normal flex flex-col w-2/3 flex-shrink-0 gap-2"
              >
                <div className="flex gap-2">
                  <Image
                    src={review.owner.userImage}
                    className="w-9 h-9 rounded-full"
                  />
                  <div>
                    <div className="text-sm">{review.owner.name}</div>
                    <div className="flex items-center">
                      {ratingStarsDisplay(review.rating)}
                      <span className="text-xs text-gray-500">
                        • {formatDateToAgo(review.date!)}
                      </span>
                    </div>
                  </div>
                </div>
                <Reviews review={review} />
              </Card>
            );
          })}
        </div>
        <div className="flex flex-col gap-2">
          <button className="rounded-2xl bg-accent text-white p-4">
            Read all reviews
          </button>
          {/*TODO: Pointer event should change by condition and create a Button atom vit variants*/}
          <button className="rounded-2xl bg-gray-200 p-4 flex items-center justify-center gap-2 pointer-events-none text-gray-500">
            <span className="">Post a review</span>
            <Icon iconName="review" />
          </button>
          <Paragraph
            variant="default"
            className="text-xs text-gray-500 self-center"
          >
            You can only post a review once you’ve attended a class.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default RequestCardDetails;
