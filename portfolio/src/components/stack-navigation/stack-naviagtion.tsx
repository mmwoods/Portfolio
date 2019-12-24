import React from "react";

import { Header } from "..";

export const StackNavigation = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return (
    <>
      <Header title="mitchell woods" />

      <div style={{ padding: 8 }}>{children}</div>

      {/* Footer */}
    </>
  );
};
