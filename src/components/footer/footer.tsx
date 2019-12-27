import React, { CSSProperties } from "react";

/**
 * Renders a footer element for the site.
 */
export const Footer = () => {
  const links = ["email", "phone", "resume", "LinkedIn", "GitHub"];

  return (
    <footer style={styles.wrapper}>
      <h1 style={styles.title}>mitchell woods</h1>

      <div style={styles.links}>
        {links.map((link, index) => (
          <p key={index}>{link}</p>
        ))}
      </div>
    </footer>
  );
};

interface FooterStyles {
  wrapper: CSSProperties;
  title: CSSProperties;
  links: CSSProperties;
}

const styles: FooterStyles = {
  wrapper: {
    textAlign: "center",
    maxWidth: 520,
    margin: "auto",
    padding: "35px 0"
  },
  title: {
    margin: "0 0 18px 0",
    fontWeight: 400,
    fontSize: 34
  },
  links: {
    display: "flex",
    justifyContent: "space-around"
  }
};
