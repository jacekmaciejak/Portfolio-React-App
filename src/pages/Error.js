import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import "../styles/Error.scss";

export default function Error() {
  return (
    <Hero>
      <Banner className="error" title="Error 404" subtitle="page not found" />
      <Link to="/" className="btn-primary">
        return home
      </Link>
    </Hero>
  );
}
