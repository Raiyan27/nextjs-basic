import React from "react";

export default async function Page({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await res.json();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">
          {data.title}
        </h1>

        <p className="text-gray-600 text-base sm:text-lg whitespace-pre-line">
          {data.body}
        </p>

        <div className="text-gray-500 text-sm">
          Posted by UserId: {data.userId}
        </div>
      </div>
    </div>
  );
}
