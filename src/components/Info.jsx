import React from "react";

/**
 *
 * @param {String} title 제목
 * @param {String} children 내용
 * @param {Boolean} red true 일때 색깔 변경
 * @returns
 */
export default function Info({ title, children, red }) {
  return (
    <div
      className={`w-auto h-auto ${
        !red ? "bg-[#FBFEFE]" : "bg-[#FFFDFB]"
      } border-l-[5px] ${
        !red ? "border-[#00b8d4]" : "border-[#FF9100]"
      } px-0 py-0 my-4 shadow-md rounded-md`}
      role="alert"
    >
      <div
        className={`w-auto h-[50px] ${
          !red ? "bg-[#E6F8FA]" : "bg-[#FFF3E6]"
        } px-8 py-3 border-b-2 ${
          !red ? "border-[#D5EDF9]" : "border-[#ECE8E7]"
        } rounded-tr-md`}
        role="alert"
      >
        <div
          className={`font-extrabold ${
            !red ? "text-[#00b8d4]" : "text-[#FF9100]"
          } leading-6`}
        >
          {title}
        </div>
      </div>
      <div
        className={`py-3 px-8 ${!red ? "text-[#515E61]" : "text-[#645C53]"}`}
      >
        {children}
      </div>
    </div>
  );
}
