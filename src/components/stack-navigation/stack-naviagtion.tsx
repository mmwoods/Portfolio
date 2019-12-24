import React from "react";

import { Header, Footer } from "..";

export const StackNavigation = (props: {
  children: React.ReactNode;
  testID: string;
}) => {
  const { children, testID } = props;

  return (
    <div data-testid={`${testID}.stack-navigation`}>
      <Header title="mitchell woods" />

      <div style={{ padding: 8 }}>{children}</div>

      <Footer />
    </div>
  );
};
