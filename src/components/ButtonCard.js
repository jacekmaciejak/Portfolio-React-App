import "../styles/ButtonCard.scss";
import React from "react";

export default function ButtonCard({ className, children }) {
  return (
    <div className="card__button" className={className}>
      {children}Zobacz projekt
    </div>
  );
}
