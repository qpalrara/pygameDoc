import React, { useState } from "react";

/**
 * 퀴즈 블록
 * @param {React.JSX} title 제목
 * @param {React.JSX} description 설명
 * @param {React.JSX} img 이미지, 기본은 null
 * @param {React.JSX} children 내용
 * @param {number} importance 난이도 1~5, 기본은 3
 * @returns
 */
export default function Quiz({
  title,
  description,
  img = null,
  children,
  importance = 3,
}) {
  const [show, setShow] = useState(false);
  return (
    <div className="flex justify-center items-center w-full bg-gradient-to-br from-blue-400 via-violet-400 to-purple-400 rounded-xl my-8">
      <div className="bg-white w-full h-full mx-2 my-2 rounded-xl">
        <div className="flex items-center justify-between mt-4 mx-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm dark:bg-gray-700 dark:text-gray-400">
            {"★".repeat(importance) + "☆".repeat(5 - importance)}
          </span>
        </div>
        <div>
          <div className="text-gray-600 mt-4 mx-4 mb-4 dark:text-gray-400">
            {description}
          </div>
          {img && <div className="flex justify-center items-center">{img}</div>}
          <br />
        </div>
        <button
          className={`${
            !show
              ? "bg-indigo-100 hover:bg-indigo-200 text-slate-500"
              : "bg-indigo-600 hover:bg-indigo-700 text-white"
          } font-bold py-2 px-4 mx-4 mb-4 rounded-3xl`}
          onClick={() => setShow(!show)}
        >
          {!show ? "Show solution" : "Hide solution"}
        </button>
        <div
          className={`text-gray-600 mt-4 mx-6 mb-6 dark:text-gray-400 h-full ${
            show ? "" : "hidden"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
