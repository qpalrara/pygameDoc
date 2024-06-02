import React from "react";
import Table from "./Table";

/**
 * 클래스 설명 박스
 * @param {string} title - 클래스 이름
 * @param {string} children - 클래스 설명
 * @param {Array} properties - [property, type, description]
 * @param {Array} methods - [method, return type, description]
 * @param {number} importance - 중요도 1~5
 * @param {boolean} red - 빨간색 여부
 * @returns
 */
export default function Definition({
  title,
  children,
  properties = [],
  methods = [],
  importance = 3,
  red,
}) {
  return (
    <div
      className={`flex justify-center items-center bg-gradient-to-br ${
        !red
          ? "from-emerald-400 via-cyan-400 to-blue-400"
          : "from-red-400 via-orange-400 to-yellow-400"
      } rounded-xl`}
    >
      <div className="bg-white w-full h-fit mx-2 my-2 rounded-xl">
        <div className="flex items-center justify-between mt-4 mx-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm dark:bg-gray-700 dark:text-gray-400">
            {"★".repeat(importance) + "☆".repeat(5 - importance)}
          </span>
        </div>
        <div className="text-gray-600 mt-4 mx-4 mb-6 dark:text-gray-400">
          {children}
        </div>
        <div
          className={`overflow-x-auto mx-4 mb-8 ${
            properties.length === 0 ? "hidden" : ""
          }`}
        >
          <Table head={["Property", "Type", "Description"]} body={properties} />
        </div>
        <div
          className={`overflow-x-auto mx-4 mb-8 ${
            methods.length === 0 ? "hidden" : ""
          }`}
        >
          <Table head={["Method", "Return Type", "Description"]} body={methods} />
        </div>
      </div>
    </div>
  );
}