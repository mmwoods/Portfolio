import React from "react";

import { Header, Project } from "../../components/";
import { projectsData } from "../../data";

export const HomeScene = () => (
  <>
    <Header title="mitchell woods" />

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
  </>
);
