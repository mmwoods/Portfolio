import React from "react";

import {
  Project,
  StackNavigation,
  Introduction,
  Experience,
  Title
} from "../../components/";
import { CURRENT_PROJECTS, PAST_PROJECTS } from "../../data";

export const HomeScene = () => (
  <StackNavigation testID="home-scene">
    <Introduction />

      <Title title={'Ongoing Projects'} subtitle={'Currently focusing on Youfoodz projects'} />

    <div
      style={{
        marginTop: "-100px",
        background: "linear-gradient(180deg,rgba(243,245,247,0) 0,#f3f5f7 100%)"
      }}
    >
      {CURRENT_PROJECTS.map(item => (
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

    <Title title={'Completed Projects'} subtitle={'Created for both commercial and freelance'} />

    <div
      style={{
        marginTop: "-100px",
        background: "linear-gradient(180deg,rgba(243,245,247,0) 0,#f3f5f7 100%)"
      }}
    >
      {PAST_PROJECTS.map(item => (
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
