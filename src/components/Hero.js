import React from "react";
import "../styles/Hero.css";

export default function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}
Hero.defaultProps = {
  hero: "defaultHero"
};
