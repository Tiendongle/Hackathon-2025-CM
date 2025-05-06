import { BottomNavDataProps } from "~/components/Elements/BottomNav/BottomNav";

export const bottomAppBar: BottomNavDataProps = [
  { name: "home", route: "/", icon: "home" },
  {
    group: [
      { name: "learn", route: "/requests/learn", icon: "learn" },
      { name: "mentor", route: "/requests/mentor", icon: "mentor" },
    ],
  },
  { name: "inbox", route: "", icon: "inbox" },
];
