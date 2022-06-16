const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "John",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/39.jpg",
        },
        login: {
          username: "TheGoat",
        },
      },
    ],
  },
};

export default function axiosMock() {
  return {
    get: jest.fn().mockResolvedValue(mockResponse),
  };
}
