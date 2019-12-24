import React from "react";

/**
 * Renders a footer element for the site.
 */
export const Footer = () => {
  const links = ["email", "phone", "resume", "LinkedIn", "GitHub"];

  return (
    <footer style={{ textAlign: "center" }}>
      <h1 style={{ margin: 0, fontWeight: 400, fontSize: 34 }}>
        mitchell woods
      </h1>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {links.map(link => (
          <p>{link}</p>
        ))}
      </div>
    </footer>
  );
};
