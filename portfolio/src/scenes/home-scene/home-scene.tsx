import React from "react";

import {
  Project,
  StackNavigation,
  Introduction,
  Experience
} from "../../components/";
import { projectsData } from "../../data";

export const HomeScene = () => (
  <StackNavigation>
    <Introduction />

    {projectsData.map((item, index) => (
      <Project
        key={item.index}
        title={item.title}
        summary={item.summary}
        technology={item.technology}
        website={item.website}
        repo={item.repo}
      />
    ))}

    <Experience />
  </StackNavigation>
);
