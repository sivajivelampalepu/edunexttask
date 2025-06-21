export const stats = [
  {
    title: "Total Revenue",
    value: 45678,
    change: 12.5,
    trend: "positive",
    icon: "dollar-sign",
  },
  {
    title: "Active Users",
    value: 1234,
    change: -2.3,
    trend: "negative",
    icon: "users",
  },
  {
    title: "New Subscriptions",
    value: 342,
    change: 8.1,
    trend: "positive",
    icon: "user-plus",
  },
  {
    title: "Churn Rate",
    value: 6.2,
    change: 1.4,
    trend: "negative",
    icon: "percent",
  },
];

export const activities = [
  {
    id: 1,
    user: {
      name: "John Doe",
      avatar: "https://reqres.in/img/faces/10-image.jpg",
    },
    description: "completed a purchase",
    created_at: "2024-01-15T10:30:00Z",
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
    },
    description: "registered a new account",
    created_at: "2024-01-16T09:15:00Z",
  },
  {
    id: 3,
    user: {
      name: "Mike Johnson",
      avatar: "https://reqres.in/img/faces/12-image.jpg",
    },
    description: "left a review",
    created_at: "2024-01-17T14:20:00Z",
  },
  {
    id: 4,
    user: {
      name: "Emily Davis",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
    },
    description: "updated profile",
    created_at: "2024-01-18T17:45:00Z",
  },
];


export const chartData = {
  revenueTrend: [
    { date: '2024-06-01', value: 3200 },
    { date: '2024-06-02', value: 4100 },
    { date: '2024-06-03', value: 3800 },
    { date: '2024-06-04', value: 4600 },
    { date: '2024-06-05', value: 5200 },
    { date: '2024-06-06', value: 4800 },
    { date: '2024-06-07', value: 5300 }
  ],
  userGrowth: [
    { date: '2024-06-01', value: 150 },
    { date: '2024-06-02', value: 180 },
    { date: '2024-06-03', value: 170 },
    { date: '2024-06-04', value: 200 },
    { date: '2024-06-05', value: 220 },
    { date: '2024-06-06', value: 210 },
    { date: '2024-06-07', value: 250 }
  ]
};
