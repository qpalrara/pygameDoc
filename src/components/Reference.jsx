import React from 'react';
import { HashLink } from "react-router-hash-link";

/**
 * 참조 링크
 * @param {String} location 링크
 * @param {String} children 내용
 * @returns 
 */
export default function Reference({ location, children, blank = false }) {
  return (
    <>
      <HashLink to={location} className="text-blue-400 hover:text-blue-500" target={blank?"_blank":""}>
        {children}
      </HashLink>
    </>
  );
}
