import React from "react";
import "./weather.css";

export default function Footer() {
  return (
    <footer>
      Open source code by Emelie Jansson
      <a
        href="https://github.com/aworkconsulting/react-app-weather"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        {" "}
        on GitHub{" "}
      </a>
    </footer>
  );
}
