import React from "react";

import { ProjectProps } from "./project.interface";
import css from "./project.module.css";

/**
 * Split layout with image, title, summary, bullet points, and links to website and/or repository.
 */
export const Project = (props: ProjectProps) => {
  const { title, technology, src, repo, website, summary } = props;

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div>
          <img
            className={css.image}
            src={src}
            alt={title}
          />
        </div>
        <div className={css.row}>
          <h3 className={css.title}>{title}</h3>
          <p className={css.subtitle}>{summary}</p>

          {technology &&
            technology.map((category, index) => (
              <p key={index} className={css.list}>
                <span>
                  <strong>{category.category}</strong>
                  {category.list && category.list.length > 0 ? " • " : null}
                </span>
                {category.list &&
                  category.list.map((item, index) => (
                    <span key={index}>
                      {" "}
                      {item}
                      {category.list &&
                      category.list.length &&
                      index !== category.list.length - 1
                        ? ","
                        : null}
                    </span>
                  ))}{" "}
              </p>
            ))}

          <div style={{ marginTop: "20px", display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
            {website && (
              <a href={website} style={{display: 'block', margin: '5px 0'}}>
                <button className={css.button}>Website</button>
              </a>
            )}

            {!repo && <p style={{padding: '5px 10px', margin: 0}}>Source Restricted</p>}

            {repo && <a
              href={repo}
              className={css.link}
              style={{padding: '5px 10px', margin: 0}}
            >
              View Source
            </a>}
          </div>
        </div>
      </div>
    </div>
  );
};
