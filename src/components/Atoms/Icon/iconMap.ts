import HomeIcon from "./icons/home.svg?react";
import CalendarStarIcon from "./icons/calendar-star.svg?react";
import FaceManProfileIcon from "./icons/face-man-profile.svg?react";
import InboxFullIcon from "./icons/inbox-full.svg?react";
import PlusIcon from "./icons/plus.svg?react";
import ClassesIcon from "./icons/classes.svg?react";
import InboxIcon from "./icons/inbox.svg?react";
import RequestIcon from "./icons/request.svg?react";

const iconMap = {
  home: HomeIcon,
  "calendar-star": CalendarStarIcon,
  "face-man-profile": FaceManProfileIcon,
  "inbox-full": InboxFullIcon,
  plus: PlusIcon,
  classes: ClassesIcon,
  inbox: InboxIcon,
  request: RequestIcon,
} as const;

export type IconName = keyof typeof iconMap;

export { iconMap };
