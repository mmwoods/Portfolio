import { navigate } from "@reach/router";
import React from "react";

import { NavigationConstants } from "../navigation/";
import css from "./footer.module.css";

/**
 * Renders a footer element for the site.
 */
export const Footer = () => {
  const links = [
    {
      label: "email",
      url: "mailto:mw@mitchellmwoods.com"
    },
    {
      label: "phone",
      url: "tel:0409463422"
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/mitchellmwoods/"
    },
    {
      label: "GitHub",
      url: "https://github.com/mmwoods"
    }
  ];

  const goHome = () => {
    navigate(NavigationConstants.home);
  };

  const goToResume = () => {
    navigate(NavigationConstants.resume);
  };

  return (
    <footer className={css.wrapper}>
      <h1 onClick={goHome} className={css.title}>
        mitchell woods
      </h1>

      <div className={css.links}>
        {links.map((link, index) => (
          <a
            className={css.link}
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </a>
        ))}
        <p className={css.link} onClick={goToResume}>
          Resume
        </p>
      </div>
    </footer>
  );
};
