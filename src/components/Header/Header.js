import React from "react";
import "./Header.css";

export default function Header({title}) {
  return (
    <>
      <h1 className="header" title="Header" data-testid="header-title">
        {title}
      </h1>
      <h3 className="header">Dogs</h3>
    </>
  );
}
