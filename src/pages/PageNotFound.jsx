import React from "react";
import { Link } from "react-router-dom";
import { CloudOff } from "lucide-react";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-blue-100 via-white to-blue-50">
      <div className="bg-white/70 backdrop-blur-lg border border-blue-200 rounded-2xl shadow-md px-10 py-14 max-w-md w-full">
        <div className="flex flex-col items-center gap-4">
          <CloudOff size={48} className="text-blue-600" />
          <h1 className="text-3xl font-bold text-blue-700">404 - Page Not Found</h1>
          <p className="text-gray-600 text-sm">
            Oops! The page you're looking for doesn't exist or was moved.
          </p>

          <Link
            to="/"
            className="mt-6 inline-block bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-all"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
