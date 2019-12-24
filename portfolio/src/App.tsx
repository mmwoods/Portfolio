import React from "react";

import { projectsData } from "./data";
import { Project } from "./project";
import { Header } from "./header";

const App: React.FC = () => (
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

export default App;
