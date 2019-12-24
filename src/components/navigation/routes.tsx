import { RouteComponentProps, Router } from "@reach/router";
import React from "react";

import { NavigationConstants } from "./navigation-constants";
import { HomeScene, ResumeScene } from "../../scenes";

const Home = (props: RouteComponentProps) => <HomeScene />;
const Resume = (props: RouteComponentProps) => <ResumeScene />;

export const Routes = () => (
  <Router basepath="/">
    <Home path={NavigationConstants.home} default />
    <Resume path={NavigationConstants.resume} />
  </Router>
);
