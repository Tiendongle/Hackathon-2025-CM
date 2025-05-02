export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface CourseType {
  id: number;
  type: string;
}

export interface Hobby {
  id: number;
  category: Category;
  name: string;
  slug: string;
}

export interface Booking {
  day: string;
  short: string;
  startTime: string;
  endTime: string;
}

export interface Review {
  id: number;
  owner: {
    id: number;
    name: string;
    userImage: string;
  };
  rating: number;
  text: string;
  date?: string;
}

export interface Post {
  id: number;
  type: {
    id: number;
    name: string;
  };
  user: User;
  hobby: {
    id: number;
    category: Category;
    name: string;
    slug: string;
  };
  postDate: string;
  bookings: Booking[];
  reviews: Review[];
  images: string[];
  header: string;
  summary: string;
  details: string;
  price: number;
  duration: string;
  skilLevel: SkilLevel;
  location: Location;
}

export interface SkilLevel {
  id: number;
  name: string;
}

export interface CourseTeach {
  course: Hobby;
  rating: number;
  participants: number;
  reviews: number;
}

export interface User {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  userImage: string;
  coursesTeach?: CourseTeach[];
}

export interface Location {
  name: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
}
