import bespoke from './images/bespoke.jpg'
import dk from './images/dk.png'
import yf from './images/yf.png'
import scope from './images/scope.png'
import storybook from './images/storybook.png'
import styleGuide from './images/styleguide.png'
import wellbeing from './images/wellbeing.png'

export const CURRENT_PROJECTS = [
  {
    index: 0,
    title: "Youfoodz",
    summary:
      "Refactored version of the existing Youfoodz eCommerce website, in the form of a SPA built using ReactJS, TypeScript, GraphQL, and Contentful.",
    technology: [
      {
        category: "Frameworks/Packages",
        list: ["ReactJS", "Storybook", "Apollo", "Lerna", "Redux"],
      },
      {
        category: "Languages",
        list: ["TypeScript", "GraphQL"]
      },
      {
        category: "Testing",
        list: ["React Testing Library", "Enzyme", "WebdriverIO"]
      },
      {
        category: "Project",
        list: ["ESlint", "Stylelint", "Prettier"]
      },
      {
        category: "Design/Styles",
        list: ["Figma", "CSS Modules", "Less"]
      },
      {
        category: "Third-Party Software",
        list: ["Shopify", "Contentful CMS", "Sentry", "Gitlab"]
      }
    ],
    website: "https://spa.youfoodz.com/",
    repo: undefined,
    src: yf
  },
  {
    index: 1,
    title: "Doctor's Kitchen",
    summary:
      "The first white-label version of the Youfoodz eCommerce website, for co-branding a doctor's certified range of products.",
    technology: [
      {
        category: "Frameworks/Packages",
        list: ["ReactJS", "Storybook", "Apollo", "Lerna", "Redux"],
      },
      {
        category: "Languages",
        list: ["TypeScript", "GraphQL"]
      },
      {
        category: "Testing",
        list: ["React Testing Library", "Enzyme", "WebdriverIO"]
      },
      {
        category: "Project",
        list: ["ESlint", "Stylelint", "Prettier"]
      },
      {
        category: "Design/Styles",
        list: ["Figma", "CSS Modules", "Less"]
      },
      {
        category: "Third-Party Software",
        list: ["Shopify", "Contentful CMS", "Sentry", "Gitlab"]
      }
    ],
    website: "https://doctorskitchen.byyoufoodz.com/",
    repo: undefined,
    src: dk
  }
];

export const PAST_PROJECTS = [
  {
    index: 0,
    title: "Bespoke Premium Theme",
    summary:
      "The first drag & drop, Bootstrap 4, based theme on the Neto eCommerce platform. Featuring a component based design, to allow for easier code maintenance, readability, and additions.",
    technology: [
      {
        category: "HTML5/CSS3",
        list: ["Less", "Gulp"]
      },
      {
        category: "JavaScript",
        list: ["jQuery", "AJAX"]
      },
      {
        category: "Frameworks",
        list: ["Bootstrap 4"]
      },
      {
        category: "Design",
        list: ["Figma"]
      },
      {
        category: "eCommerce",
        list: ["Neto B@SE"]
      }
    ],
    website: "https://bespoketheme.neto.com.au/",
    repo: "https://github.com/mmwoods/Bespoke-Theme",
    src: bespoke
  },
  {
    index: 1,
    title: "Project Scope",
    summary:
      "Parses markdown and calculates Coding, Design, and Total hours for each segment of a website Project Scope. Featuring a desktop app, PDF generation, and local storage.",
    technology: [
      {
        category: "HTML5/CSS3"
      },
      {
        category: "JavaScript",
        list: ["jQuery"]
      },
      {
        category: "Frameworks",
        list: ["Bootstrap 4", "Electron"]
      },
      {
        category: "Server-Side",
        list: ["Node", "Netlify"]
      },
      {
        category: "Design",
        list: ["Figma"]
      },
      {
        category: "Other",
        list: ["Regex"]
      }
    ],
    website: "https://scope.netlify.com/",
    repo: "https://github.com/mmwoods/project_scope",
    src: scope
  },
  {
    index: 2,
    title: "CUA Digital Style Guide",
    summary:
      "Defines the code standards, development process, and getting started/learning resources, for new developers within the team.",
    technology: [
      {
        category: "HTML5/CSS3"
      },
      {
        category: "JavaScript/TypeScript"
      },
      {
        category: "Frameworks",
        list: ["Docusaurus", "React"]
      },
      {
        category: "Pipeline",
        list: ["Git", "Netlify"]
      },
      {
        category: "Other",
        list: ["Markdown"]
      }
    ],
    src: styleGuide
  },
  {
    index: 3,
    title: "Financial Wellbeing Calculator",
    summary:
      "Displays a 13 question quiz which when complete assigns a category to a user (eg. doing well, struggling etc.). This category then affects the content displayed on the page (eg. blog posts, videos etc.).",
    technology: [
      {
        category: "HTML5/CSS3",
        list: ["CSS Modules"]
      },
      {
        category: "JavaScript",
        list: ["React"]
      },
      {
        category: "UI Testing",
        list: ["Storybook", "Percy"]
      },
      {
        category: "CMS",
        list: ["Contentful", "Squiz"]
      },
      {
        category: "Pipeline",
        list: ["Git", "Netlify"]
      }
    ],
    src: wellbeing
  },
  {
    index: 4,
    title: "ReactJS Component Library",
    summary:
      "Setup as a Lerna monorepo with every component including type checking, Storybook integration, usage docs, and full JSDoc commenting.",
    technology: [
      {
        category: "HTML5/CSS3",
        list: ["CSS Modules"]
      },
      {
        category: "TypeScript",
        list: ["React"]
      },
      {
        category: "UI Testing",
        list: ["Storybook", "Percy"]
      },
      {
        category: "Pipeline",
        list: ["Webpack", "Lerna", "Git", "Netlify"]
      }
    ],
    src: storybook
  }
];
