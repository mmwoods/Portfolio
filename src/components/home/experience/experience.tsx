import React, { CSSProperties } from "react";

export const Experience = () => (
  <div style={styles.wrapper}>
    <h1 style={styles.title}>Experience with the web</h1>
    <h2 style={styles.subtitle}>Commercial &amp; Freelance</h2>

    <p style={styles.description}>
      In 6+ years of web development I have scoped, designed, coded, and
      maintained eCommerce and static websites. As well as managing design
      projects, website go-lives and more.
    </p>
  </div>
);

interface ExperienceStyles {
  wrapper: CSSProperties;
  title: CSSProperties;
  subtitle: CSSProperties;
  description: CSSProperties;
}

const styles: ExperienceStyles = {
  wrapper: {
    textAlign: "left",
    maxWidth: 600,
    margin: "75px auto auto"
  },
  title: {
    fontSize: 32,
    color: "#333",
    fontWeight: 300
  },
  subtitle: {
    fontSize: 16,
    color: "#95bbdb",
    fontWeight: 400,
    textTransform: "uppercase"
  },
  description: {
    color: "rgba(14, 30, 37, 0.54)",
    lineHeight: "22px",
    marginBottom: "18px"
  }
};
