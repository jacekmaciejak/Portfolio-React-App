import React from "react";

export default function CardBanner({
  image,
  children,
  title,
  subtitle,
  paragraph
}) {
  return (
    <div className="cardBanner">
      <h1 className="cardBanner__title">{title}</h1>
      <h2 className="cardBanner__subtitle">{subtitle}</h2>
      <p className="cardBanner__paragraph">{paragraph}</p>
      {children}
    </div>
  );
}
