import React from "react";

import { ProjectProps } from "./project.interface";

/**
 * Split layout with image, title, summary, bullet points, and links to website and/or repository.
 */
export const Project = (props: ProjectProps) => (
  <div style={{ paddingBottom: "3rem", maxWidth: "50%" }}>
    <h3>{props.title}</h3>
    <p style={{ color: "rgba(14, 30, 37, 0.54)" }}>{props.summary}</p>

    {props.technology &&
      props.technology.map((item, index) => (
        <p style={{ marginBottom: "5px", color: "rgba(14, 30, 37, 0.54)" }}>
          <strong>{item.category}</strong> •{" "}
          {item.list.map((item, index) => (
            <span>{item} </span>
          ))}{" "}
        </p>
      ))}

    <div style={{ marginTop: "20px" }}>
      <a href={props.website}>
        <button
          style={{
            backgroundColor: "#95bbdb",
            borderColor: "#95bbdb",
            height: "32px",
            lineHeight: "16px",
            borderRadius: "20px",
            fontSize: "16px",
            padding: "0 3rem",
            color: "#fff"
          }}
        >
          {props.website !== "#" ? "Website" : "Private Website"}
        </button>
      </a>
      <a href={props.repo}>
        <button
          style={{
            backgroundColor: "transparent",
            borderColor: "transparent",
            height: "32px",
            lineHeight: "16px",
            fontSize: "16px",
            padding: "0 1rem",
            color: "rgba(14, 30, 37, 0.54)"
          }}
        >
          {props.repo !== "#" ? "View Source" : "Source Restricted"}
        </button>
      </a>
    </div>
  </div>
);
