import { type User } from "~/types/mockDataTypes";

export const users: User[] = [
  {
    id: 1,
    name: "Kutay Furtun",
    firstName: "Kutay",
    lastName: "Furtun",
    userImage:
      "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_1280.png",
    coursesTeach: [
      {
        course: {
          id: 1,
          category: {
            id: 1,
            name: "Physical & Outdoor Activities",
            slug: "physical-and-outdoor-activities",
          },
          name: "Tennis",
          slug: "tennis",
        },
        rating: 5,
        participants: 102,
        reviews: 61,
        price: 25,
        meetingType: "Availability",
        skilLevel: "All Levels",
      },
    ],
  },
  {
    id: 2,
    name: "Tien Le",
    firstName: "Tien",
    lastName: "Le",
    userImage: "",
  },
  {
    id: 3,
    name: "Sophia Cho",
    firstName: "Sophia",
    lastName: "Cho",
    userImage:
      "https://img.freepik.com/free-vector/woman-with-long-brown-hair-pink-shirt_90220-2940.jpg?t=st=1746082774~exp=1746086374~hmac=f8caa9641dc03adc432623bb64dd570bd3a2cfc501a58d2f092c0dde887bce2c&w=1380",
  },
  {
    id: 4,
    name: "Sophia Hsu",
    firstName: "Sophia",
    lastName: "Hsu",
    userImage: "",
  },
];
