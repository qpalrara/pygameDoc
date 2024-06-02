import React from "react";


/**
 * 회색 head 테이블
 * @param {Array} head - 테이블 헤드 배열, 내부 요소는 jsx
 * @param {Array} body - 2차원 바디 배열, 내부 요소는 jsx 배열
 * @example <Table head={["Name", "Age"]} body={[["Alice", 20], ["Bob", 21]]} />
 * @returns 
 */
export default function Table({ head, body }) {
  const heads = head.map((h) => <th className="px-4 py-2 font-medium" key={h}>{h}</th>);
  const bodies = body.map((b) => (
    <tr className="border-b" key={b[0]}>
      {b.map((i) => (
        <td className="px-4 py-2" key={i}>
          {i}
        </td>
      ))}
    </tr>
  ));
  return (
    <table className="w-full text-left">
      <thead>
        <tr className="bg-gray-100">{heads}</tr>
      </thead>
      <tbody>{bodies}</tbody>
    </table>
  );
}