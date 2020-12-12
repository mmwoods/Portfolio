import React from "react";
import { TitleProps } from "./title.interface";

import css from "./title.module.css";

export const Title = ({title, subtitle}: TitleProps) => (
  <div className={css.wrapper}>
    <div className={css.container}>
      <h1 className={css.title}>{title}</h1>
      {subtitle && <p className={css.subtitle}>{subtitle}</p>}
    </div>
  </div>
);
