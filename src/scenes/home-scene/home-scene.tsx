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

    <div
      style={{
        marginTop: "-100px",
        background: "linear-gradient(180deg,rgba(243,245,247,0) 0,#f3f5f7 100%)"
      }}
    >
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
    </div>

    <Experience />
  </StackNavigation>
);
