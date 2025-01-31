import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import {
  Home,
  Calendar,
  Users,
  Settings,
  Menu,
  ClipboardList,
} from "lucide-react";

const data = [
  { name: "Jan", events: 10 },
  { name: "Feb", events: 15 },
  { name: "Mar", events: 20 },
  { name: "Apr", events: 25 },
  { name: "May", events: 18 },
];

const pieData = [
  { name: "Music Club", value: 5 },
  { name: "Drama Club", value: 8 },
  { name: "Sports Club", value: 6 },
  { name: "Tech Club", value: 4 },
];

const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"];

export default function DSWDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-white p-5 shadow-md ${
          isSidebarOpen ? "w-64" : "w-16"
        } transition-all duration-300`}
      >
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="mb-4"
        >
          <Menu className="w-6 h-6" />
        </button>
        <nav className="space-y-4">
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-700 hover:text-purple-600"
          >
            <Home />{" "}
            <span className={isSidebarOpen ? "block" : "hidden"}>
              Dashboard
            </span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-700 hover:text-purple-600"
          >
            <Calendar />{" "}
            <span className={isSidebarOpen ? "block" : "hidden"}>
              Upcoming Events
            </span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-700 hover:text-purple-600"
          >
            <ClipboardList />{" "}
            <span className={isSidebarOpen ? "block" : "hidden"}>
              Pending Events
            </span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-700 hover:text-purple-600"
          >
            <Users />{" "}
            <span className={isSidebarOpen ? "block" : "hidden"}>
              New Club Requests
            </span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-700 hover:text-purple-600"
          >
            <Settings />{" "}
            <span className={isSidebarOpen ? "block" : "hidden"}>Settings</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">DSW Dashboard</h1>
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded-md"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Pending Events</h2>
            <p className="text-2xl font-bold">12</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Upcoming Events</h2>
            <p className="text-2xl font-bold">8</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">New Club Requests</h2>
            <p className="text-2xl font-bold">5</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Event Trends</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="events" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Events by Club</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
