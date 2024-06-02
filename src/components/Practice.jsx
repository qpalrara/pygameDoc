import React from "react";
import { Link } from "react-router-dom";

export default function Practice({ id, children }) {
  return (
    <Link className="learn-more" to={`../practice/${id}`}>
      <span className="text-blue-400">실습 {id}</span>
      <span className="text-rose-400"> {children}</span>
    </Link>
  );
}