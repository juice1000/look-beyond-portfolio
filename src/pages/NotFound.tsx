import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
        404
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>

      <Link to="/">
        <Button
          size="lg"
          className="text-lg px-8 py-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
        >
          <Home size={20} />
          Go Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
