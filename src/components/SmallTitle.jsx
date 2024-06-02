import React from "react";

/**
 *
 * @param {String | Number} id 목차에서 이동할 id
 * @param {String} children 내용
 * @returns
 */
export default function SmallTitle({ id, children }) {
    return (
      <h2 className="text-2xl font-bold title-font" id={id}>
        {children}
      </h2>
    );
  }