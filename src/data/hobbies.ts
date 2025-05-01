import { type Hobby } from "~/types/mockDataTypes";

export const hobbies: Hobby[] = [
  {
    id: 1,
    category: {
      id: 1,
      name: "Physical & Outdoor Activities",
      slug: "physical-and-outdoor-activities",
    },
    name: "Tennis",
    slug: "tennis",
  },
  {
    id: 2,
    category: {
      id: 1,
      name: "Physical & Outdoor Activities",
      slug: "physical-and-outdoor-activities",
    },
    name: "Volleyball",
    slug: "volleyball",
  },
  {
    id: 3,
    category: {
      id: 2,
      name: "Culniary & Baking",
      slug: "culinary-and-baking",
    },
    name: "Cooking",
    slug: "cooking",
  },
  {
    id: 4,
    category: {
      id: 3,
      name: "Performance & Music",
      slug: "performance-and-music",
    },
    name: "Guitar",
    slug: "guitar",
  },
];
