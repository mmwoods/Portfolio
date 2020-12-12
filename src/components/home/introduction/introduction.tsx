import React from "react";

import css from "./introduction.module.css";

import bespoke from '../../../data/images/bespoke.jpg'
import dk from '../../../data/images/dk.png'
import scope from '../../../data/images/scope.png'
import storybook from '../../../data/images/storybook.png'
import styleGuide from '../../../data/images/styleguide.png'
import wellbeing from '../../../data/images/wellbeing.png'

export const Introduction = () => {
  const images = [
    bespoke,
    dk,
    scope,
    storybook,
    styleGuide,
    wellbeing
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
            src={
              images[Math.floor(Math.random() * images.length)]
            }
            alt={"title"}
          />
        </div>
      </div>
    </>
  );
};
