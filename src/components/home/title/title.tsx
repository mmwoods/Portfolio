import React from "react";

import css from "./title.module.css";

export const Title = () => (
  <div className={css.wrapper}>
    <div className={css.container}>
      <h1 className={css.title}>Projects I have been working on</h1>
      <p className={css.subtitle}>Currently focusing on Serverless/DynamoDB</p>
    </div>
  </div>
);