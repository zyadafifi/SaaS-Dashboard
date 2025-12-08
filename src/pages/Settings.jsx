import { useState } from "react";
import { InfoCard } from "../components/Cards";
import { Button } from "../components/Buttons";

export default function Settings() {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: false,
      sms: false,
    },
    profile: {
      name: "John Doe",
      email: "john@example.com",
      company: "Acme Inc.",
      timezone: "UTC-5",
    },
    security: {
      twoFactor: false,
      sessionTimeout: "30",
    },
  });

  const handleToggle = (category, key) => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: !prev[category][key],
      },
    }));
  };

  const handleInputChange = (category, key, value) => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value,
      },
    }));
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
          Settings
        </h1>
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1">
          Manage your account settings
        </p>
      </div>

      {/* Profile Settings */}
      <InfoCard
        title="Profile Information"
        description="Update your personal information"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={settings.profile.name}
              onChange={(e) =>
                handleInputChange("profile", "name", e.target.value)
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={settings.profile.email}
              onChange={(e) =>
                handleInputChange("profile", "email", e.target.value)
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Company
            </label>
            <input
              type="text"
              value={settings.profile.company}
              onChange={(e) =>
                handleInputChange("profile", "company", e.target.value)
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Timezone
            </label>
            <select
              value={settings.profile.timezone}
              onChange={(e) =>
                handleInputChange("profile", "timezone", e.target.value)
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="UTC-5">UTC-5 (Eastern Time)</option>
              <option value="UTC-6">UTC-6 (Central Time)</option>
              <option value="UTC-7">UTC-7 (Mountain Time)</option>
              <option value="UTC-8">UTC-8 (Pacific Time)</option>
            </select>
          </div>
          <div className="pt-4">
            <Button variant="primary">Save Changes</Button>
          </div>
        </div>
      </InfoCard>

      {/* Notification Settings */}
      <InfoCard
        title="Notification Preferences"
        description="Choose how you want to be notified"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Email Notifications
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Receive notifications via email
              </p>
            </div>
            <button
              onClick={() => handleToggle("notifications", "email")}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.notifications.email ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.notifications.email
                    ? "translate-x-6"
                    : "translate-x-1"
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Push Notifications
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Receive push notifications in browser
              </p>
            </div>
            <button
              onClick={() => handleToggle("notifications", "push")}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.notifications.push ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.notifications.push
                    ? "translate-x-6"
                    : "translate-x-1"
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                SMS Notifications
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Receive notifications via SMS
              </p>
            </div>
            <button
              onClick={() => handleToggle("notifications", "sms")}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.notifications.sms ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.notifications.sms ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </InfoCard>

      {/* Security Settings */}
      <InfoCard
        title="Security Settings"
        description="Manage your account security"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Two-Factor Authentication
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Add an extra layer of security
              </p>
            </div>
            <button
              onClick={() => handleToggle("security", "twoFactor")}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.security.twoFactor ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.security.twoFactor
                    ? "translate-x-6"
                    : "translate-x-1"
                }`}
              />
            </button>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Session Timeout (minutes)
            </label>
            <input
              type="number"
              value={settings.security.sessionTimeout}
              onChange={(e) =>
                handleInputChange("security", "sessionTimeout", e.target.value)
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div className="pt-4">
            <Button variant="danger">Change Password</Button>
          </div>
        </div>
      </InfoCard>

      {/* Danger Zone */}
      <InfoCard
        title="Danger Zone"
        description="Irreversible and destructive actions"
        className="border-red-200"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
            <div>
              <p className="text-sm font-medium text-red-900 dark:text-red-300">
                Delete Account
              </p>
              <p className="text-sm text-red-700 dark:text-red-400">
                Once you delete your account, there is no going back
              </p>
            </div>
            <Button variant="danger" size="md">
              Delete Account
            </Button>
          </div>
        </div>
      </InfoCard>
    </div>
  );
}
