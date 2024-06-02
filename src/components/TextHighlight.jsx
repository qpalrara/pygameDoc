import React from "react";

/**
 *
 * @param {String} children 내용
 * @returns
 */
export default function TextHighlight({ children }) {
    return (
      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded font-extrabold w-fit">
        {children}
      </span>
    );
  }