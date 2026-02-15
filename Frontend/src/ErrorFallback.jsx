import React from 'react'

const ErrorFallback = ({error,resetErrorBoundary}) => {
  return (
    <div className="p-10 text-center">
      <h2 className="text-2xl font-bold text-red-600">
        Oops! Something broke ❌
      </h2>

      <p className="text-gray-500 mt-2">
        {error.message}
      </p>

      <button
        onClick={resetErrorBoundary}
        className="mt-5 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Try Again
      </button>
    </div>
  );
}

export default ErrorFallback
