import React, { CSSProperties } from "react";

import { ProjectProps } from "./project.interface";

/**
 * Split layout with image, title, summary, bullet points, and links to website and/or repository.
 */
export const Project = (props: ProjectProps) => {
  const { title, technology, src, repo, website, summary } = props;

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div>
          <img
            style={styles.image}
            src={require(`../../../data/images/${src}`)}
            alt={title}
          />
        </div>
        <div style={styles.row}>
          <h3 style={styles.title}>{title}</h3>
          <p style={styles.subtitle}>{summary}</p>

          {technology &&
            technology.map((category, index) => (
              <p
                key={index}
                style={{
                  marginBottom: "5px",
                  color: "rgba(14, 30, 37, 0.54)"
                }}
              >
                <span>
                  <strong>{category.category}</strong>
                  {category.list && category.list.length > 0 ? " • " : null}
                </span>
                {category.list &&
                  category.list.map((item, index) => (
                    <span key={index}> {item} </span>
                  ))}{" "}
              </p>
            ))}

          <div style={{ marginTop: "20px" }}>
            {website ? (
              <a href={website}>
                <button style={styles.button}>Website</button>
              </a>
            ) : null}

            <a
              href={repo}
              style={website ? styles.link : { ...styles.link, padding: "0px" }}
            >
              {website && repo ? "View Source" : "Source Restricted"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ProjectStyles {
  wrapper: CSSProperties;
  container: CSSProperties;
  row: CSSProperties;
  title: CSSProperties;
  subtitle: CSSProperties;
  button: CSSProperties;
  link: CSSProperties;
  image: CSSProperties;
}

const styles: ProjectStyles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: 60
  },
  container: {
    paddingBottom: "3rem",
    display: "flex",
    maxWidth: "1140px",
    alignItems: "center"
  },
  row: {
    width: "100%",
    paddingLeft: 50,
    maxWidth: "500px"
  },
  button: {
    backgroundColor: "#95bbdb",
    borderColor: "#95bbdb",
    height: "32px",
    lineHeight: "16px",
    borderRadius: "20px",
    fontSize: "16px",
    padding: "0 3rem",
    color: "#fff",
    cursor: "pointer"
  },
  title: {
    fontSize: 20
  },
  subtitle: {
    color: "rgba(14, 30, 37, 0.54)",
    lineHeight: "22px",
    marginBottom: "18px"
  },
  link: {
    height: "32px",
    lineHeight: "16px",
    fontSize: "16px",
    padding: "0 1rem",
    color: "rgba(14, 30, 37, 0.54)",
    textDecoration: "none"
  },
  image: {
    boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)"
  }
};
