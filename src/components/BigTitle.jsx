import React from "react";

/**
 *
 * @param {String} children 내용
 * @returns
 */
export default function BigTitle({ children }) {
    return <h1 className="text-3xl font-bold title-font">{children}</h1>;
  }