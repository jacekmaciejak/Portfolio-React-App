import React from "react";
import "../styles/Banner.scss";

export default function Banner({ children, title, subtitle, paragraph }) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{paragraph}</p>
      {children}
    </div>
  );
}
