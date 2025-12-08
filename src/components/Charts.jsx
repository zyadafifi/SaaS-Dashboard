export function LineChart({ data, labels, title, height = 200 }) {
  // Simple line chart using SVG
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const range = maxValue - minValue || 1;
  const width = 100;
  const chartHeight = height - 40;
  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1 || 1)) * width;
      const y = chartHeight - ((value - minValue) / range) * chartHeight;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
      {title && (
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
          {title}
        </h3>
      )}
      <div className="w-full" style={{ height: `${height}px` }}>
        <svg viewBox={`0 0 100 ${height}`} className="w-full h-full">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polyline
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
            points={points}
          />
          <polygon
            fill="url(#lineGradient)"
            points={`0,${height} ${points} ${width},${height}`}
          />
          {data.map((value, index) => {
            const x = (index / (data.length - 1 || 1)) * width;
            const y = chartHeight - ((value - minValue) / range) * chartHeight;
            return <circle key={index} cx={x} cy={y} r="2" fill="#3B82F6" />;
          })}
        </svg>
        <div className="flex justify-between mt-4 text-xs text-gray-500 dark:text-gray-400">
          {labels?.map((label, index) => (
            <span key={index}>{label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BarChart({ data, labels, title, height = 200 }) {
  const maxValue = Math.max(...data);
  const barWidth = 100 / data.length;
  const chartHeight = height - 40;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
      {title && (
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
          {title}
        </h3>
      )}
      <div className="w-full" style={{ height: `${height}px` }}>
        <svg viewBox={`0 0 100 ${height}`} className="w-full h-full">
          {data.map((value, index) => {
            const barHeight = (value / maxValue) * chartHeight;
            const x = index * barWidth + barWidth * 0.1;
            const width = barWidth * 0.8;
            const y = chartHeight - barHeight;
            return (
              <rect
                key={index}
                x={x}
                y={y}
                width={width}
                height={barHeight}
                fill="#3B82F6"
                rx="2"
              />
            );
          })}
        </svg>
        <div className="flex justify-between mt-4 text-xs text-gray-500 dark:text-gray-400">
          {labels?.map((label, index) => (
            <span key={index} className="truncate">
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PieChart({ data, title }) {
  // Simple pie chart representation using divs
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
      {title && (
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
          {title}
        </h3>
      )}
      <div className="flex items-center justify-center">
        <div className="relative w-48 h-48">
          {data.map((item, index) => {
            const percentage = (item.value / total) * 100;
            const angle = (item.value / total) * 360;
            const startAngle = currentAngle;
            currentAngle += angle;

            return (
              <div
                key={index}
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(from ${startAngle}deg, ${item.color} 0deg ${angle}deg, transparent ${angle}deg)`,
                }}
              />
            );
          })}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="mt-6 space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm text-gray-700">{item.label}</span>
            </div>
            <span className="text-sm font-medium text-gray-900">
              {((item.value / total) * 100).toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AreaChart({ data, labels, title, height = 200 }) {
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const range = maxValue - minValue || 1;
  const width = 100;
  const chartHeight = height - 40;
  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1 || 1)) * width;
      const y = chartHeight - ((value - minValue) / range) * chartHeight;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
      {title && (
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
          {title}
        </h3>
      )}
      <div className="w-full" style={{ height: `${height}px` }}>
        <svg viewBox={`0 0 100 ${height}`} className="w-full h-full">
          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon
            fill="url(#areaGradient)"
            points={`0,${height} ${points} ${width},${height}`}
          />
          <polyline
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="2"
            points={points}
          />
          {data.map((value, index) => {
            const x = (index / (data.length - 1 || 1)) * width;
            const y = chartHeight - ((value - minValue) / range) * chartHeight;
            return <circle key={index} cx={x} cy={y} r="2.5" fill="#8B5CF6" />;
          })}
        </svg>
        <div className="flex justify-between mt-4 text-xs text-gray-500 dark:text-gray-400">
          {labels?.map((label, index) => (
            <span key={index}>{label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
