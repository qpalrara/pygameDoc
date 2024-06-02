import React from "react";

/**
 * 본문 스타일
 * @param {Element} children
 * @returns
 */
export default function Body({ children }) {
  return (
    <div className="min-h-[400px] pl-8 md:pl-72 lg:pl-72 pr-6 md:pr-12 lg:pr-40 xl:pr-80 py-6 space-y-6">
      {children}
    </div>
  );
}
