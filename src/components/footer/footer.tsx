import { navigate } from "@reach/router";
import React from "react";
import { FOOTER_LINKS } from "../../data";

import { NavigationConstants } from "../navigation/";
import css from "./footer.module.css";

/**
 * Renders a footer element for the site.
 */
export const Footer = () => {
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
        {FOOTER_LINKS.map((link, index) => (
          <a
            className={css.link}
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
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
