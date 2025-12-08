export const mockStats = {
  revenue: {
    value: "$124,563",
    change: "+12.5%",
    trend: "up",
  },
  users: {
    value: "8,429",
    change: "+8.2%",
    trend: "up",
  },
  orders: {
    value: "1,234",
    change: "+5.3%",
    trend: "up",
  },
  growth: {
    value: "+24.8%",
    change: "+2.1%",
    trend: "up",
  },
};

export const mockChartData = {
  revenue: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    data: [45000, 52000, 48000, 61000, 55000, 67000],
  },
  users: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    data: [1200, 1900, 3000, 5000, 4500, 6000],
  },
  sales: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    data: [120, 190, 300, 500, 450, 600, 550],
  },
};

export const mockProjects = [
  {
    id: 1,
    name: "Website Redesign",
    description: "Complete redesign of company website",
    status: "active",
    progress: 75,
    team: ["John", "Sarah", "Mike", "Emma"],
    deadline: "2024-02-15",
  },
  {
    id: 2,
    name: "Mobile App Development",
    description: "New mobile application for iOS and Android",
    status: "active",
    progress: 45,
    team: ["David", "Lisa", "Tom"],
    deadline: "2024-03-20",
  },
  {
    id: 3,
    name: "Marketing Campaign",
    description: "Q1 marketing campaign launch",
    status: "pending",
    progress: 20,
    team: ["Anna", "Chris"],
    deadline: "2024-02-10",
  },
  {
    id: 4,
    name: "API Integration",
    description: "Third-party API integration project",
    status: "completed",
    progress: 100,
    team: ["Robert", "Maria"],
    deadline: "2024-01-30",
  },
  {
    id: 5,
    name: "Database Migration",
    description: "Migrate to new database system",
    status: "onHold",
    progress: 30,
    team: ["James", "Sophia"],
    deadline: "2024-04-01",
  },
];

export const mockUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    lastActive: "2 hours ago",
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@example.com",
    role: "Manager",
    status: "Active",
    lastActive: "5 hours ago",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "Developer",
    status: "Active",
    lastActive: "1 day ago",
  },
  {
    id: 4,
    name: "Emma Wilson",
    email: "emma@example.com",
    role: "Designer",
    status: "Active",
    lastActive: "3 hours ago",
  },
  {
    id: 5,
    name: "David Brown",
    email: "david@example.com",
    role: "Developer",
    status: "Inactive",
    lastActive: "1 week ago",
  },
];

export const mockAnalytics = {
  pageViews: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    data: [4500, 5200, 4800, 6100, 5500, 6700, 7200],
  },
  traffic: {
    labels: ["Direct", "Social", "Search", "Referral", "Email"],
    data: [
      { label: "Direct", value: 45, color: "#3B82F6" },
      { label: "Social", value: 25, color: "#8B5CF6" },
      { label: "Search", value: 20, color: "#10B981" },
      { label: "Referral", value: 7, color: "#F59E0B" },
      { label: "Email", value: 3, color: "#EF4444" },
    ],
  },
  conversions: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    data: [120, 190, 300, 500, 450, 600],
  },
};

export const mockTeam = [
  {
    id: 1,
    name: "John Doe",
    role: "Frontend Developer",
    email: "john@example.com",
    avatar: "JD",
    status: "online",
  },
  {
    id: 2,
    name: "Sarah Smith",
    role: "UI/UX Designer",
    email: "sarah@example.com",
    avatar: "SS",
    status: "online",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Backend Developer",
    email: "mike@example.com",
    avatar: "MJ",
    status: "away",
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "Product Manager",
    email: "emma@example.com",
    avatar: "EW",
    status: "online",
  },
  {
    id: 5,
    name: "David Brown",
    role: "DevOps Engineer",
    email: "david@example.com",
    avatar: "DB",
    status: "offline",
  },
];
