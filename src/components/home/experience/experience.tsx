import React, { CSSProperties } from "react";

import css from "./experience.module.css";

export const Experience = () => (
  <div className={css.wrapper}>
    <div className={css.container}>
      <h1 className={css.title}>Experience with the web</h1>
      <h2 className={css.subtitle}>Commercial &amp; Freelance</h2>

      <p className={css.description}>
        In 6+ years of web development I have scoped, designed, coded, and
        maintained eCommerce and static websites. As well as managing design
        projects, website go-lives and more.
      </p>
    </div>
  </div>
);
