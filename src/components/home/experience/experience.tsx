import React from "react";

import css from "./experience.module.css";

export const Experience = () => {
  const year = new Date().getFullYear()
  const experience = year - 2013

  return (
  <div className={css.wrapper}>
    <div className={css.container}>
      <h1 className={css.title}>Experience with the web</h1>
      <h2 className={css.subtitle}>Commercial &amp; Freelance</h2>

      <p className={css.description}>
        In {experience}+ years of web development I have scoped, designed, coded, and
        maintained eCommerce and static websites. As well as managing design
        projects, website go-lives and more.
      </p>
    </div>
  </div>
)}
