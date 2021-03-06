import React from "react";

import { Header, Footer } from "..";
import { StackNavigationProps } from "./stack-navigation.interaface";

export const StackNavigation = (props: StackNavigationProps) => {
  const { children, testID, resume } = props;

  return (
    <div data-testid={`${testID}.stack-navigation`}>
      <Header title="mitchell woods" />

      <div>{children}</div>

      {!resume ? <Footer /> : null}
    </div>
  );
};
