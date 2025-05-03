import FaceManProfileIcon from "./icons/face-man-profile.svg?react";
import InboxIcon from "./icons/inbox.svg?react";
import RequestIcon from "./icons/request.svg?react";
import ReviewIcon from "./icons/review.svg?react";

import AddIcon from "./icons/add.svg?react";
import AdvancedIcon from "./icons/advanced.svg?react";
import AgeIcon from "./icons/age.svg?react";
import ArrowDownIcon from "./icons/arrow-down.svg?react";
import BeginnerIcon from "./icons/beginner.svg?react";
import CalendarStarIcon from "./icons/calendar-star.svg?react";
import CalendarIcon from "./icons/calendar.svg?react";
import CancellationIcon from "./icons/cancellation.svg?react";
import ChevronDownIcon from "./icons/chevron-down.svg?react";
import ChevronLeftCircleIcon from "./icons/chevron-left-circle.svg?react";
import ChevronRightIcon from "./icons/chevron-right.svg?react";
import ClassesIcon from "./icons/classes.svg?react";
import CloseIcon from "./icons/close.svg?react";
import CommentIcon from "./icons/comment.svg?react";
import EditIcon from "./icons/edit.svg?react";
import FavoritesIcon from "./icons/favorites.svg?react";
import FemaleIcon from "./icons/female.svg?react";
import GenderIcon from "./icons/gender.svg?react";
import HeartIcon from "./icons/heart.svg?react";
import HomeIcon from "./icons/home.svg?react";
import InboxFullIcon from "./icons/inbox-full.svg?react";
import IntermediateIcon from "./icons/intermediate.svg?react";
import LearnIcon from "./icons/learn.svg?react";
import LeftArrowIcon from "./icons/left-arrow.svg?react";
import LocationIcon from "./icons/location.svg?react";
import MaleIcon from "./icons/male.svg?react";
import MediaIcon from "./icons/media.svg?react";
import MentorIcon from "./icons/mentor.svg?react";
import MinusIcon from "./icons/minus.svg?react";
import NewIcon from "./icons/new.svg?react";
import NonBinaryIcon from "./icons/non-binary.svg?react";
import NotificationsIcon from "./icons/notifications.svg?react";
import ParticipantsIcon from "./icons/participants.svg?react";
import PlusIcon from "./icons/plus.svg?react";
import PriceIcon from "./icons/price.svg?react";
import ProfileIcon from "./icons/profile.svg?react";
import ReminderIcon from "./icons/reminder.svg?react";
import RequestsIcon from "./icons/requests.svg?react";
import ReviewsIcon from "./icons/reviews.svg?react";
import SearchIcon from "./icons/search.svg?react";
import ShareIcon from "./icons/share.svg?react";
import StarsIcon from "./icons/stars.svg?react";
import TimeIcon from "./icons/time.svg?react";
// import Icon from "./icons/.svg?react"

const iconMap = {
  "face-man-profile": FaceManProfileIcon,
  inbox: InboxIcon,
  request: RequestIcon,
  review: ReviewIcon,
  add: AddIcon,
  advanced: AdvancedIcon,
  age: AgeIcon,
  "arrow-down": ArrowDownIcon,
  beginner: BeginnerIcon,
  "calendar-star": CalendarStarIcon,
  calendar: CalendarIcon,
  cancellation: CancellationIcon,
  "chevron-down": ChevronDownIcon,
  "chevron-left-circle": ChevronLeftCircleIcon,
  "chevron-right": ChevronRightIcon,
  classes: ClassesIcon,
  close: CloseIcon,
  comment: CommentIcon,
  edit: EditIcon,
  favorites: FavoritesIcon,
  female: FemaleIcon,
  gender: GenderIcon,
  heart: HeartIcon,
  home: HomeIcon,
  "inbox-full": InboxFullIcon,
  intermediate: IntermediateIcon,
  learn: LearnIcon,
  "left-arrow": LeftArrowIcon,
  location: LocationIcon,
  male: MaleIcon,
  media: MediaIcon,
  mentor: MentorIcon,
  minus: MinusIcon,
  new: NewIcon,
  non: NonBinaryIcon,
  notifications: NotificationsIcon,
  participants: ParticipantsIcon,
  plus: PlusIcon,
  price: PriceIcon,
  profile: ProfileIcon,
  reminder: ReminderIcon,
  requests: RequestsIcon,
  reviews: ReviewsIcon,
  search: SearchIcon,
  share: ShareIcon,
  star: StarsIcon,
  time: TimeIcon,
} as const;

export type IconName = keyof typeof iconMap;

export { iconMap };
