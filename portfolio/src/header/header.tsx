import React from "react";

import { HeaderProps } from "./header.interface";

/**
 * Renders a header element for the site.
 */
export const Header = ({ title }: HeaderProps) => (
  <header
    style={{
      background: "#fff",
      marginBottom: "1.45rem",
      position: "sticky",
      top: 0,
      zIndex: 1
    }}
  >
    <div
      style={{
        margin: "0 auto",
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0, fontWeight: 400, fontSize: 34 }}>{title}</h1>
    </div>
  </header>
);
