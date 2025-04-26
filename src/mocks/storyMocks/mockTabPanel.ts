const MockRequest = {
  uid: 2139238,
  requesterId: 1,
  category: "Tennis",
  title: "Tennis Request",
  description: "This is a description for a request to learn tennis",
  messages: [
    { userId: 3, messageId: 34234 },
    { userId: 2, messageId: 2312 },
  ],
};

const MockClass = {
  category: "Tennis",
  media: [""],
  title: "Title Tennis",
  description: "This is a class description for to practiice tennis",
};

export const MockClasses = Array(10).fill(MockClass);
export const MockRequests = Array(10).fill(MockRequest);
export const MockTabPanelData = [
  { name: "Classes", data: MockClasses },
  { name: "Requests", data: MockRequests },
];
