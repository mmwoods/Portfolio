import React from "react";

import css from "./introduction.module.css";

export const Introduction = () => {
  const images = [
    "scope.png",
    "storybook.png",
    "styleguide.png",
    "wellbeing.png"
  ];

  return (
    <>
      <div className={css.wrapper}>
        <h1 className={css.title}>Software Engineer/Designer</h1>
        <h2 className={css.subtitle}>
          <span>Passionate about how design affects user’s interactions</span>
          <span>and understanding, specifically through minimalist style.</span>
        </h2>
      </div>

      <div className={css.background}>
        <div className={css.imageWrapper}>
          <img
            className={css.image}
            src={require(`../../../data/images/${
              images[Math.floor(Math.random() * images.length)]
            }`)}
            alt={"title"}
          />
        </div>
      </div>
    </>
  );
};
