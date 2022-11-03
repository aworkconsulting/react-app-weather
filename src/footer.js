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
        GitHub{" "}
      </a>
      and hosted on
      <a
        href="https://extraordinary-dango-394488.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        {" "}
        Netlify.
      </a>
    </footer>
  );
}
