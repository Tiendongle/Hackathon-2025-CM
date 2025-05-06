import { createFileRoute } from "@tanstack/react-router";
import { PropsWithChildren, useState, useEffect, useRef } from "react";
// import Card from "~/components/Atoms/Card";
// import Icon from "~/components/Atoms/Icon";
// import { Link } from "~/components/Atoms/Link";
import LearnUpper from "../../public/demoImages/home-learn/upper.jpg";
import LearnLower from "../../public/demoImages/home-learn/lower.jpg";
import MentorUpper from "../../public/demoImages/home-mentor/upper.jpg";
import MentorLower from "../../public/demoImages/home-mentor/lower.jpg";
import { BaseImage as Image } from "~/components/Atoms/Image";

export const Route = createFileRoute("/")({
  // This is how we fetch data on server side in case we want to do that
  // loader: async () => {
  //   const users = await fetchUsers();
  //   return { users };
  // },
  component: Home,
});

// const buttonVariants = {
//   active: "rounded-2xl bg-accent text-white w-1/2 p-3",
//   inactive:
//     "rounded-2xl bg-white border border-gray-500 text-gray-500 w-1/2 p-3",
// };

// interface ButtonProps extends PropsWithChildren {
//   isActive: boolean;
//   homeUserType: HomeUserType;
//   setHomeUserType: React.Dispatch<React.SetStateAction<HomeUserType>>;
// }

// const Button = ({
//   children,
//   isActive,
//   homeUserType,
//   setHomeUserType,
// }: ButtonProps) => {
//   const onButtonClick = () =>
//     setHomeUserType(homeUserType === "learning" ? "mentoring" : "learning");
//   return (
//     <button
//       onClick={onButtonClick}
//       className={buttonVariants[isActive ? "active" : "inactive"]}
//     >
//       {children}
//     </button>
//   );
// };

type HomeUserType = "learning" | "mentoring";

function Home() {
  const [homeUserType, setHomeUserType] = useState<HomeUserType>("learning");
  const isLearningTab = homeUserType === "learning";

  const firstDivRef = useRef<HTMLDivElement | null>(null);
  const secondDivRef = useRef<HTMLDivElement | null>(null);
  const [sectionTop, setSectionTop] = useState(0);
  const [curtainHeight, setCurtainHeight] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    // Get positions and heights after mount
    function updateMeasurements() {
      if (firstDivRef.current && secondDivRef.current) {
        const firstRect = firstDivRef.current.getBoundingClientRect();
        const secondRect = secondDivRef.current.getBoundingClientRect();
        const scrollTop = window.scrollY || window.pageYOffset;

        // The top of the whole section
        const sectionTop = firstRect.top + scrollTop;
        // The height of the area where the effect happens
        const sectionHeight = firstRect.height + secondRect.height;
        // The height of the curtain (second image)
        const curtainHeight = secondRect.height;

        setSectionTop(sectionTop);
        setCurtainHeight(curtainHeight);
      }
    }

    updateMeasurements();
    window.addEventListener("resize", updateMeasurements);
    return () => window.removeEventListener("resize", updateMeasurements);
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        return;
      }
      // How far have we scrolled into the curtain section?
      const scrollTop = window.scrollY || window.pageYOffset;
      // Only start the effect when we reach the section
      const scrollIntoSection = Math.max(0, scrollTop - sectionTop);

      // Clamp the translate so the curtain doesn't move too far
      // Moves from 0 (fully below) to -curtainHeight (fully covering)
      const maxTranslate = curtainHeight;
      const translate = Math.min(scrollIntoSection, maxTranslate);

      // We want the curtain to move UP (negative Y) as you scroll down
      setTranslateY(-translate);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionTop, curtainHeight]);

  const onLearningButtonClick = () => {
    if (homeUserType !== "learning") setHomeUserType("learning");
  };
  const onMentoringButtonClick = () => {
    if (homeUserType !== "mentoring") setHomeUserType("mentoring");
  };

  return (
    <div className="relative w-full m-auto bg-white">
      <button
        onClick={onLearningButtonClick}
        className="absolute top-6 left-7 w-40 h-10 rounded-2xl z-10 opacity-0"
      >
        Learning
      </button>
      <button
        onClick={onMentoringButtonClick}
        className="absolute top-6 right-7 w-40 h-10 rounded-2xl z-10 opacity-0"
      >
        Mentoring
      </button>
      <div ref={firstDivRef} className="w-full relative z-[1px]">
        <Image
          src={isLearningTab ? LearnUpper : MentorUpper}
          className="mx-auto"
        />
      </div>
      <div
        ref={secondDivRef}
        className="w-full relative z-[2px]"
        style={{
          marginTop: `${translateY}px`,
        }}
      >
        <Image
          src={isLearningTab ? LearnLower : MentorLower}
          className="mx-auto"
        />
      </div>
    </div>
  );
}
