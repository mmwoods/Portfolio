import React from "react";

export const Title = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div
      style={{
        marginTop: 80,
        textAlign: "right"
      }}
    >
      <h1 style={{ fontSize: 32, color: "#333", fontWeight: 300 }}>
        Projects I have been working on
      </h1>
      <p
        style={{
          fontSize: 16,
          color: "#95bbdb",
          fontWeight: 400,
          textTransform: "uppercase"
        }}
      >
        Currently focusing on Serverless/DynamoDB
      </p>
    </div>
  </div>
);
