import React from "react";
import "../styles/Banner.scss";

export default function Banner({ children, title, subtitle, paragraph }) {
  return (
    <div className="banner">
      <h1 className="banner__title">{title}</h1>
      <h2 className="banner__subtitle">{subtitle}</h2>
      <p className="banner__paragraph">{paragraph}</p>
      {children}
    </div>
  );
}
