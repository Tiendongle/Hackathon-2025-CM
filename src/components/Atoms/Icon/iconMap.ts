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

// Import Hobbies
import HobbyAllIcon from "./icons/hobbies/all.svg?react";
import HobbyArcheryIcon from "./icons/hobbies/archery.svg?react";
import HobbyBaseballIcon from "./icons/hobbies/baseball.svg?react";
import HobbyBasketballIcon from "./icons/hobbies/basketball.svg?react";
import HobbyCollectionsIcon from "./icons/hobbies/collections.svg?react";
import HobbyCookingIcon from "./icons/hobbies/cooking.svg?react";
import HobbyCraftsIcon from "./icons/hobbies/crafts.svg?react";
import HobbyCreativeIcon from "./icons/hobbies/creative.svg?react";
import HobbyCycleIcon from "./icons/hobbies/cycle.svg?react";
import HobbyFishingIcon from "./icons/hobbies/fishing.svg?react";
import HobbyFoodIcon from "./icons/hobbies/food.svg?react";
import HobbyFootballIcon from "./icons/hobbies/football.svg?react";
import HobbyGolfIcon from "./icons/hobbies/golf.svg?react";
import HobbyMartialArtsIcon from "./icons/hobbies/martial-arts.svg?react";
import HobbyMusicIcon from "./icons/hobbies/music.svg?react";
import HobbyPaintingIcon from "./icons/hobbies/painting.svg?react";
import HobbyPhotographyIcon from "./icons/hobbies/photography.svg?react";
import HobbyRunningIcon from "./icons/hobbies/running.svg?react";
import HobbySailingIcon from "./icons/hobbies/sailing.svg?react";
import HobbySkateboardingIcon from "./icons/hobbies/skateboarding.svg?react";
import HobbySkatingIcon from "./icons/hobbies/skating.svg?react";
import HobbySnowboardIcon from "./icons/hobbies/snowboard.svg?react";
import HobbySoccerIcon from "./icons/hobbies/soccer.svg?react";
import HobbySurfingIcon from "./icons/hobbies/surfing.svg?react";
import HobbySwimmingIcon from "./icons/hobbies/swimming.svg?react";
import HobbyTennisIcon from "./icons/hobbies/tennis.svg?react";
import HobbyVolleyballIcon from "./icons/hobbies/volleyball.svg?react";
import HobbyWeightliftingIcon from "./icons/hobbies/weightlifting.svg?react";
import HobbyWellnessIcon from "./icons/hobbies/wellness.svg?react";
import HobbyYogaIcon from "./icons/hobbies/yoga.svg?react";

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

const hobbiesIcon = {
  all: HobbyAllIcon,
  archery: HobbyArcheryIcon,
  baseball: HobbyBaseballIcon,
  basketball: HobbyBasketballIcon,
  collections: HobbyCollectionsIcon,
  cooking: HobbyCookingIcon,
  crafts: HobbyCraftsIcon,
  creative: HobbyCreativeIcon,
  cycle: HobbyCycleIcon,
  fishing: HobbyFishingIcon,
  food: HobbyFoodIcon,
  football: HobbyFootballIcon,
  golf: HobbyGolfIcon,
  "martial-arts": HobbyMartialArtsIcon,
  music: HobbyMusicIcon,
  painting: HobbyPaintingIcon,
  photography: HobbyPhotographyIcon,
  running: HobbyRunningIcon,
  sailing: HobbySailingIcon,
  skateboarding: HobbySkateboardingIcon,
  skating: HobbySkatingIcon,
  snowboard: HobbySnowboardIcon,
  soccer: HobbySoccerIcon,
  surfing: HobbySurfingIcon,
  swimming: HobbySwimmingIcon,
  tennis: HobbyTennisIcon,
  volleyball: HobbyVolleyballIcon,
  weightlifting: HobbyWeightliftingIcon,
  wellness: HobbyWellnessIcon,
  yoga: HobbyYogaIcon,
};

export const HobbiesList = {
  all: "All",
  archery: "Archery",
  baseball: "Baseball",
  basketball: "Basketball",
  collections: "Collections",
  cooking: "Cooking",
  crafts: "Crafts",
  creative: "Creative",
  cycle: "Cycle",
  fishing: "Fishing",
  food: "Food",
  football: "Football",
  golf: "Golf",
  "martial-arts": "Martial Arts",
  music: "Music",
  painting: "Painting",
  photography: "Photography",
  running: "Running",
  sailing: "Sailing",
  skateboarding: "Skateboarding",
  skating: "Skating",
  snowboard: "Snowboard",
  soccer: "Soccer",
  surfing: "Surfing",
  swimming: "Swimming",
  tennis: "Tennis",
  volleyball: "Volleyball",
  weightlifting: "Weightlifting",
  wellness: "Wellness",
  yoga: "Yoga",
};

export type HobbyIconName = keyof typeof hobbiesIcon;
export type IconName = keyof typeof iconMap;

export { iconMap, hobbiesIcon };
