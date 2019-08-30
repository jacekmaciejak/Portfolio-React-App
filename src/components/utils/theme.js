import React from "react";

export const theme = {
  media: {
    phone: "@media (max-width: 600px)",
    tabPort: "@media (max-width: 900px)",
    tabLand: "@media (max-width: 1200px)",
    bigDesktop: "@media (min-width: 1800px)",
    tabPortMin: "@media (min-width: 900px)"
  },
  main: {
    color: "#fff",
    fontSize: "calc(30px + 3.5vw)",
    marginTop: "30px"
  },
  second: {
    color: "#f2f2f2",
    fontSize: "calc(20px + 3.5vw)"
  },
  third: {
    color: "#000",
    fontSize: "calc(15px + 1vw)"
  },
  grid: {
    display: "grid",
    justifyItems: "center",
    alignItems: "center"
  },
  center: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  cardHover: {
    opacity: "1",
    visibility: "visible",
    transitionDelay: "0.2s",
    transform: "translateY(0px)"
  },
  cardHoverOf: {
    transform: "none",
    opacity: "1",
    visibility: "visible",
    transform: "translateY(0)"
  },
  cardTransformOf: {
    transform: "none",
    transitionDelay: "none"
  },
  cardContent: {
    transition: "0.5s",
    padding: "0",
    textAlign: "center",
    opacity: "0",
    visibility: "hidden",
    fontWeight: "bold"
  }
};
