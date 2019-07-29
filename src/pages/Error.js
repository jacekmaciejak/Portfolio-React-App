import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import "../styles/Error.css";

export default function Error() {
  return (
    <Hero>
      {/* <h1>Error 404</h1>
      <h1>page not found</h1> */}

      <Banner title="Error 404" subtitle="page not found" />
      <Link to="/" className="btn-primary">
        return home
      </Link>
    </Hero>
  );
}
