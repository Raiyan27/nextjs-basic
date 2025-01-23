import Link from "next/link";
import React from "react";

const Card = ({ id, title, body }) => {
  return (
    <Link href={`/posts/${id}`}>
      <Link href={`/posts/${id}`}>
        <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md flex flex-col justify-between h-full transform transition-all duration-300 hover:scale-105 cursor-pointer">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-base overflow-hidden text-ellipsis whitespace-nowrap sm:whitespace-normal max-h-52">
            {body}
          </p>
        </div>
      </Link>
    </Link>
  );
};

export default Card;
