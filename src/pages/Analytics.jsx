import { useMemo } from "react";
import { StatCard } from "../components/Cards";
import { LineChart, BarChart, PieChart, AreaChart } from "../components/Charts";
import { mockStats, mockAnalytics } from "../data/mockData";
import { useGlobalSearch } from "../hooks/useGlobalSearch";

export default function Analytics() {
  const { query, filterByQuery } = useGlobalSearch();

  // Top Pages list
  const topPages = useMemo(
    () => ["/dashboard", "/analytics", "/settings", "/projects"],
    []
  );
  const filteredTopPages = useMemo(() => {
    return filterByQuery(
      topPages.map((page) => ({ page, views: Math.floor(Math.random() * 5000 + 1000) })),
      ["page"]
    );
  }, [topPages, filterByQuery]);

  // Geographic Data list
  const geographicData = useMemo(
    () => [
      { country: "United States", value: "45%" },
      { country: "United Kingdom", value: "18%" },
      { country: "Canada", value: "12%" },
      { country: "Australia", value: "8%" },
    ],
    []
  );
  const filteredGeographicData = useMemo(() => {
    return filterByQuery(geographicData, ["country"]);
  }, [geographicData, filterByQuery]);
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
          Analytics
        </h1>
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1">
          Detailed insights and metrics
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <StatCard
          title="Page Views"
          value="124.5K"
          change="+18.2%"
          trend="up"
          icon={
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          }
        />
        <StatCard
          title="Bounce Rate"
          value="32.4%"
          change="-5.1%"
          trend="up"
          icon={
            <svg
              className="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          }
        />
        <StatCard
          title="Avg. Session"
          value="4m 32s"
          change="+12.3%"
          trend="up"
          icon={
            <svg
              className="w-6 h-6 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
        />
        <StatCard
          title="Conversion"
          value="3.24%"
          change="+2.8%"
          trend="up"
          icon={
            <svg
              className="w-6 h-6 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          }
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <AreaChart
          title="Page Views Over Time"
          data={mockAnalytics.pageViews.data}
          labels={mockAnalytics.pageViews.labels}
        />
        <PieChart title="Traffic Sources" data={mockAnalytics.traffic.data} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <LineChart
          title="Conversion Rate"
          data={mockAnalytics.conversions.data}
          labels={mockAnalytics.conversions.labels}
        />
        <BarChart
          title="User Engagement"
          data={mockAnalytics.pageViews.data}
          labels={mockAnalytics.pageViews.labels}
        />
      </div>

      {/* Additional Analytics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Top Pages
          </h3>
          <div className="space-y-3">
            {filteredTopPages.length === 0 && query ? (
              <div className="text-center py-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  No results found for '{query}'
                </p>
              </div>
            ) : (
              filteredTopPages.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {item.page}
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {item.views} views
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Device Breakdown
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Desktop</span>
              <span className="text-sm font-medium text-gray-900">62%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: "62%" }}
              ></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Mobile</span>
              <span className="text-sm font-medium text-gray-900">32%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-600 h-2 rounded-full"
                style={{ width: "32%" }}
              ></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Tablet</span>
              <span className="text-sm font-medium text-gray-900">6%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full"
                style={{ width: "6%" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Geographic Data
          </h3>
          <div className="space-y-3">
            {filteredGeographicData.length === 0 && query ? (
              <div className="text-center py-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  No results found for '{query}'
                </p>
              </div>
            ) : (
              filteredGeographicData.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {item.country}
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {item.value}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
