import React from "react";

function CodeLine({ children, highlight }) {
  return (
    <div
      className={`line min-w-fit language-python ${
        highlight ? "bg-yellow-200 text-black" : ""
      }`}
    >
      {children}
    </div>
  );
}
/**
 * code 스타일을 반환
 * @param {String} fileName 상단 제목
 * @param {String} children 코드
 * @param {Array} highlight 하이라이트할 줄
 * @returns
 */
export default function Code({ fileName = "main.py", children, highlight = [] }) {
  return (
    <div className="bg-[#282A36] w-auto rounded-lg overflow-x-hidden">
      <div className="bg-[#393B46] flex justify-between items-center px-4 py-2 rounded-lg">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 bg-[#FF5F56] rounded-full"></div>
          <div className="w-3 h-3 bg-[#FFBD2E] rounded-full"></div>
          <div className="w-3 h-3 bg-[#27C93F] rounded-full"></div>
        </div>
        <div className="w-full text-center text-[#F8F8F2] text-lg">
          {fileName}
        </div>
      </div>
      <code className="text-[#F8F8F2] text-sm w-auto language-python bg-[#282A36] code-font">
        {children.split("\n").map((line, index) => (
          <CodeLine
            key={index}
            highlight={highlight.includes(index + 1) ? true : false}
          >
            {line}
          </CodeLine>
        ))}
      </code>
    </div>
  );
}
