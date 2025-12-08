export function StatCard({ title, value, change, icon, trend }) {
  const isPositive = trend === "up";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {title}
          </p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
            {value}
          </p>
          {change && (
            <div className="flex items-center gap-1 mt-2">
              <span
                className={`text-sm font-medium ${
                  isPositive
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {isPositive ? "↑" : "↓"} {change}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                vs last month
              </span>
            </div>
          )}
        </div>
        <div
          className={`p-3 rounded-lg ${
            title === "Total Revenue"
              ? "bg-blue-100 dark:bg-blue-900/30"
              : title === "Active Users"
              ? "bg-green-100 dark:bg-green-900/30"
              : title === "New Orders"
              ? "bg-purple-100 dark:bg-purple-900/30"
              : "bg-orange-100 dark:bg-orange-900/30"
          }`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export function InfoCard({ title, description, children, className = "" }) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 ${className}`}
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {description}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}

export function ProjectCard({
  title,
  description,
  status,
  progress,
  team,
  deadline,
}) {
  const statusColors = {
    active:
      "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
    pending:
      "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300",
    completed:
      "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
    onHold: "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300",
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {description}
          </p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            statusColors[status] || statusColors.pending
          }`}
        >
          {status}
        </span>
      </div>

      {progress !== undefined && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Progress
            </span>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {progress}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {team?.slice(0, 3).map((member, idx) => (
              <div
                key={idx}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white flex items-center justify-center text-white text-xs font-semibold"
              >
                {member.charAt(0)}
              </div>
            ))}
            {team?.length > 3 && (
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 text-xs font-semibold">
                +{team.length - 3}
              </div>
            )}
          </div>
        </div>
        {deadline && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {deadline}
          </span>
        )}
      </div>
    </div>
  );
}
