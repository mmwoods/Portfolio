import React from "react";

import { Project, StackNavigation } from "../../components/";
import { projectsData } from "../../data";

export const HomeScene = () => (
  <StackNavigation>
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
  </StackNavigation>
);
