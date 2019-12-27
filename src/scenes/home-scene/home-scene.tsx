import React from "react";

import {
  Project,
  StackNavigation,
  Introduction,
  Experience,
  Title
} from "../../components/";
import { projectsData } from "../../data";

export const HomeScene = () => (
  <StackNavigation testID="home-scene">
    <Introduction />

    <Title />

    {projectsData.map(item => (
      <Project
        key={item.index}
        title={item.title}
        summary={item.summary}
        technology={item.technology}
        website={item.website}
        repo={item.repo}
        src={item.src}
      />
    ))}

    <Experience />
  </StackNavigation>
);
