import { type Post } from "~/types/mockDataTypes";

export const learnPosts: Post[] = [
  {
    id: 1,
    type: {
      id: 2,
      name: "learn",
    },
    user: {
      id: 3,
      name: "Sophia Cho",
      firstName: "Sophia",
      lastName: "Cho",
      userImage:
        "https://img.freepik.com/free-vector/woman-with-long-brown-hair-pink-shirt_90220-2940.jpg?t=st=1746082774~exp=1746086374~hmac=f8caa9641dc03adc432623bb64dd570bd3a2cfc501a58d2f092c0dde887bce2c&w=1380",
      coursesTeach: [
        {
          course: {
            id: 2,
            category: {
              id: 1,
              name: "Physical & Outdoor Activities",
              slug: "physical-and-outdoor-activities",
            },
            name: "Volleyball",
            slug: "volleyball",
          },
          rating: 5.0,
          participants: 102,
          reviews: 61,
        },
      ],
    },
    hobby: {
      id: 2,
      category: {
        id: 1,
        name: "Physical & Outdoor Activities",
        slug: "physical-and-outdoor-activities",
      },
      name: "Volleyball",
      slug: "volleyball",
    },
    postDate: "2025-02-21",
    bookings: [
      {
        day: "Monday",
        short: "Mon",
        startTime: "5:00 PM",
        endTime: "7:00 PM",
      },
      {
        day: "Tuesday",
        short: "Tue",
        startTime: "7:00 PM",
        endTime: "8:00 PM",
      },
      {
        day: "Saturday",
        short: "Sat",
        startTime: "6:00 PM",
        endTime: "8:00 PM",
      },
    ],
    reviews: [
      {
        id: 1,
        owner: {
          id: 2,
          name: "Tien Le",
          userImage:
            "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_1280.png",
        },
        rating: 5.0,
        text: "Easy to follow, friendly people. Highly recommend this and will come again",
        date: "2025-05-01",
      },
      {
        id: 2,
        owner: {
          id: 3,
          name: "Sophia Cho",
          userImage:
            "https://img.freepik.com/free-vector/woman-with-long-brown-hair-pink-shirt_90220-2940.jpg?t=st=1746082774~exp=1746086374~hmac=f8caa9641dc03adc432623bb64dd570bd3a2cfc501a58d2f092c0dde887bce2c&w=1380",
        },
        rating: 4.0,
        text: "Lorem ipsum",
        date: "2025-04-12",
      },
    ],
    images: [
      "https://www.ussportscamps.com/media/images/volleyball/nike/tips/Volleyball-Serving.jpg",
      "https://cdn.prod.website-files.com/673b0400c2ec5c92083f76bb/673c26e25053d9bf91f372b2_how-to-serve.jpeg",
      "http://fivb.com/wp-content/uploads/2024/03/serve.jpeg",
    ],
    header: "Master your serve",
    summary:
      "Struggling with your serve? I’m offering focused sessions to help you improve your overhand or jump serve.",
    details:
      "Hey! I’ve spent the past 3 years playing competitive high school volleyball, and I’m now offering 1-on-1 coaching for anyone looking to improve their serve and overall game. If you're just getting into volleyball or want to boost your skills, I can help you:\n\n✅ Learn proper serving form (underhand/overhand)\n✅ Build consistency and accuracy\n✅ Understand game basics and positioning\n✅ Get more confident on the court",
    price: 25,
    skilLevel: { id: 4, name: "All levels" },
    duration: "1 hour",
    location: {
      name: "Kerrisdale Community Centre",
      address: "5851 West Blvd",
      city: "Vancouver",
      province: "BC",
      postalCode: "V6M 3W9",
    },
  },
  {
    id: 2,
    type: {
      id: 2,
      name: "learn",
    },
    user: {
      id: 1,
      name: "Kutay Furtun",
      firstName: "Kutay",
      lastName: "Furtun",
      userImage:
        "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_1280.png",
      coursesTeach: [
        {
          course: {
            id: 4,
            category: {
              id: 3,
              name: "Performance & Music",
              slug: "performance-and-music",
            },
            name: "Guitar",
            slug: "guitar",
          },
          rating: 5.0,
          participants: 102,
          reviews: 61,
        },
      ],
    },
    hobby: {
      id: 4,
      category: {
        id: 3,
        name: "Performance & Music",
        slug: "performance-and-music",
      },
      name: "Guitar",
      slug: "guitar",
    },
    postDate: "2025-01-11",
    bookings: [
      {
        day: "Monday",
        short: "Mon",
        startTime: "5:00 PM",
        endTime: "7:00 PM",
      },
      {
        day: "Wednesday",
        short: "Wed",
        startTime: "7:00 PM",
        endTime: "8:00 PM",
      },
      {
        day: "Sunday",
        short: "Sun",
        startTime: "6:00 PM",
        endTime: "8:00 PM",
      },
    ],
    reviews: [
      {
        id: 1,
        owner: {
          id: 2,
          name: "Tien Le",
          userImage:
            "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_1280.png",
        },
        rating: 5.0,
        text: "Easy to follow, friendly people. Highly recommend this and will come again",
      },
      {
        id: 2,
        owner: {
          id: 1,
          name: "Kutay Furtun",
          userImage:
            "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_1280.png",
        },
        rating: 4.0,
        text: "Lorem ipsum",
      },
    ],
    images: [
      "https://us.images.westend61.de/0001463095pw/handsome-young-man-playing-guitar-while-practicing-at-promenade-against-sky-DCRF00890.jpg",
      "https://us.images.westend61.de/0001463096pw/smiling-man-playing-guitar-while-practicing-at-promenade-against-sky-DCRF00891.jpg",
      "https://us.images.westend61.de/0001463082pw/young-man-playing-guitar-while-practicing-at-promenade-against-sky-DCRF00877.jpg",
    ],
    header: "Learn Basic Guitar Chords",
    summary:
      "Want to play guitar but not sure where to begin? I’m offering quick sessions to help you learn essential chords so you can start playing real...",
    details: "",
    price: 30,
    skilLevel: { id: 1, name: "Beginner" },
    duration: "30 mins",
    location: {
      name: "Kerrisdale Community Centre",
      address: "5851 West Blvd",
      city: "Vancouver",
      province: "BC",
      postalCode: "V6M 3W9",
    },
  },
  // {
  //   id: 2,
  //   type: {
  //     id: 1,
  //     name: "mentor",
  //   },
  //   user: {
  //     id: 1,
  //     name: "Kutay Furtun",
  //     firstName: "Kutay",
  //     lastName: "Furtun",
  //     userImage:
  //       "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_1280.png",
  //   },
  //   hobby: {
  //     id: 4,
  //     category: {
  //       id: 3,
  //       name: "Performance & Music",
  //       slug: "performance-and-music",
  //     },
  //     name: "Guitar",
  //     slug: "guitar",
  //   },
  //   postDate: "2025-01-11",
  //   bookings: [
  //     {
  //       day: "Monday",
  //       short: "Mon",
  //       startTime: "5:00 PM",
  //       endTime: "7:00 PM",
  //     },
  //     {
  //       day: "Wednesday",
  //       short: "Wed",
  //       startTime: "7:00 PM",
  //       endTime: "8:00 PM",
  //     },
  //     {
  //       day: "Sunday",
  //       short: "Sun",
  //       startTime: "6:00 PM",
  //       endTime: "8:00 PM",
  //     },
  //   ],
  //   reviews: [
  //     {
  //       id: 1,
  //       owner: { id: 2, name: "Tien Le" },
  //       rating: 5,
  //       text: "Easy to follow, friendly people. Highly recommend this and will come again",
  //     },
  //     {
  //       id: 2,
  //       owner: { id: 3, name: "Sophia Cho" },
  //       rating: 4,
  //       text: "Lorem ipsum",
  //     },
  //   ],
  //   images: [
  //     "https://www.ussportscamps.com/media/images/volleyball/nike/tips/Volleyball-Serving.jpg",
  //     "https://cdn.prod.website-files.com/673b0400c2ec5c92083f76bb/673c26e25053d9bf91f372b2_how-to-serve.jpeg",
  //     "http://fivb.com/wp-content/uploads/2024/03/serve.jpeg",
  //   ],
  //   header: "Learn Basic Guitar Chords",
  //   summary:
  //     "Want to play guitar but not sure where to begin? I’m offering quick sessions to help you learn essential chords so you can start playing real...",
  //   details: "",
  //   price: 30,
  // },
];
