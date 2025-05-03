import HomeIcon from "./icons/home.svg?react";
import CalendarStarIcon from "./icons/calendar-star.svg?react";
import FaceManProfileIcon from "./icons/face-man-profile.svg?react";
import InboxFullIcon from "./icons/inbox-full.svg?react";
import PlusIcon from "./icons/plus.svg?react";
import ClassesIcon from "./icons/classes.svg?react";
import InboxIcon from "./icons/inbox.svg?react";
import RequestIcon from "./icons/request.svg?react";
import HeartIcon from "./icons/heart.svg?react";
import LeftArrowIcon from "./icons/left-arrow.svg?react";
import ShareIcon from "./icons/share.svg?react";
import StarMdIcon from "./icons/star-md.svg?react";
import ArrowDownIcon from "./icons/arrow-down.svg?react";
import LocationIcon from "./icons/location.svg?react";
import CalendarIcon from "./icons/calendar.svg?react";
import ReviewIcon from "./icons/review.svg?react";

const iconMap = {
  home: HomeIcon,
  "calendar-star": CalendarStarIcon,
  "face-man-profile": FaceManProfileIcon,
  "inbox-full": InboxFullIcon,
  plus: PlusIcon,
  classes: ClassesIcon,
  inbox: InboxIcon,
  request: RequestIcon,
  heart: HeartIcon,
  "left-arrow": LeftArrowIcon,
  share: ShareIcon,
  "star-md": StarMdIcon,
  "arrow-down": ArrowDownIcon,
  location: LocationIcon,
  calendar: CalendarIcon,
  review: ReviewIcon,
} as const;

export type IconName = keyof typeof iconMap;

export { iconMap };
