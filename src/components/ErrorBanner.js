import React from "react";
import "../styles/ErrorBanner.scss";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function ErrorBanner() {
  return (
    <div className="error">
      <h1>błąd 404</h1>
      <h2>nie odnaleziono strony</h2>
      <Link to="/">
        <Button />
      </Link>
    </div>
  );
}
