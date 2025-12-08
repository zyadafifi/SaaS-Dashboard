import { useState } from "react";
import { UserTable } from "../components/Tables";
import { Button } from "../components/Buttons";
import { InfoCard } from "../components/Cards";
import { mockTeam, mockUsers } from "../data/mockData";

export default function Team() {
  const [selectedView, setSelectedView] = useState("list"); // 'list' or 'grid'

  const getStatusColor = (status) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "away":
        return "bg-yellow-500";
      case "offline":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Team
          </h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1">
            Manage your team members
          </p>
        </div>
        <Button variant="primary" size="md">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add Member
          </div>
        </Button>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <InfoCard className="p-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">
              {mockTeam.length}
            </p>
            <p className="text-sm text-gray-500 mt-1">Total Members</p>
          </div>
        </InfoCard>
        <InfoCard className="p-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-green-600">
              {mockTeam.filter((m) => m.status === "online").length}
            </p>
            <p className="text-sm text-gray-500 mt-1">Online Now</p>
          </div>
        </InfoCard>
        <InfoCard className="p-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600">
              {mockTeam.filter((m) => m.role.includes("Developer")).length}
            </p>
            <p className="text-sm text-gray-500 mt-1">Developers</p>
          </div>
        </InfoCard>
        <InfoCard className="p-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-purple-600">
              {mockTeam.filter((m) => m.role.includes("Designer")).length}
            </p>
            <p className="text-sm text-gray-500 mt-1">Designers</p>
          </div>
        </InfoCard>
      </div>

      {/* View Toggle */}
      <div className="flex items-center justify-end">
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setSelectedView("list")}
            className={`px-3 sm:px-4 py-2 rounded text-xs sm:text-sm font-medium transition-colors ${
              selectedView === "list"
                ? "bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            List View
          </button>
          <button
            onClick={() => setSelectedView("grid")}
            className={`px-3 sm:px-4 py-2 rounded text-xs sm:text-sm font-medium transition-colors ${
              selectedView === "grid"
                ? "bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Grid View
          </button>
        </div>
      </div>

      {/* Team Display */}
      {selectedView === "list" ? (
        <UserTable
          users={mockUsers}
          onEdit={(user) => console.log("Edit", user)}
          onDelete={(user) => console.log("Delete", user)}
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {mockTeam.map((member) => (
            <InfoCard
              key={member.id}
              title={member.name}
              description={member.role}
              className="p-6"
            >
              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                      {member.avatar}
                    </div>
                    <div
                      className={`absolute bottom-0 right-0 w-4 h-4 ${getStatusColor(
                        member.status
                      )} rounded-full border-2 border-white`}
                    ></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {member.email}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                      {member.status}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Button variant="outline" size="sm" className="flex-1">
                    Message
                  </Button>
                  <Button variant="ghost" size="sm">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            </InfoCard>
          ))}
        </div>
      )}
    </div>
  );
}
