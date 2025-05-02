import { BottomNavDataProps } from "~/components/Elements/BottomNav/BottomNav";

export const bottomAppBar: BottomNavDataProps = [
  { name: "Home", route: "/", icon: "home" },
  {
    group: [
      { name: "Learn", route: "/requests/learn", icon: "request" },
      { name: "Mentor", route: "/requests/mentor", icon: "classes" },
    ],
  },
  { name: "Messages", route: "/messages", icon: "inbox" },
];
