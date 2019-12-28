import React from "react";
import { navigate } from "@reach/router";

import { HeaderProps } from "./header.interface";
import { NavigationConstants } from "../navigation/";
import css from "./header.module.css";

/**
 * Renders a header element for the site.
 */
export const Header = ({ title }: HeaderProps) => {
  const goHome = () => {
    navigate(NavigationConstants.home);
  };

  return (
    <header className={css.wrapper}>
      <div className={css.container}>
        <h1 onClick={goHome} className={css.title}>
          {title}
        </h1>
      </div>
    </header>
  );
};
