import { useNavigate } from "react-router-dom";
import { Button } from "../components/Buttons";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <div className="text-center">
        <h1 className="text-6xl sm:text-8xl font-bold text-gray-900 dark:text-white mb-4">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Page not found
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button
          variant="primary"
          size="md"
          onClick={() => navigate("/dashboard")}
        >
          Go Home
        </Button>
      </div>
    </div>
  );
}

