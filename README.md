# F2E-2022

This is a monorepo containing all work related to [2022 F2E challenge](https://2022.thef2e.com/).

Special thanks to

- [hexschool](https://www.hexschool.com) team for designing user stories
- UI mockups contributed by various designers under [CC BY-NC 3.0 TW](https://creativecommons.org/licenses/by-nc/3.0/tw/deed.en) license
- sponsor companies: [Block Studio](https://blockstudio.tw), [KDAN MOBILE](https://www.kdanmobile.com), [TITANSOFT](https://www.titansoft.com)

## Introduction

This repository is powered by [pnpm](https://pnpm.io) and managed with [Turborepo](https://turbo.build/repo) in the following folder structure

- `/apps` - this contains all published applications on [Vercel Platform](https://vercel.com)
  - [animated-landing](https://f2e-2022.howardism.dev) - redesigned [f2e 2022](https://2022.thef2e.com/) landing page by designer [Jenny Wu](https://uxfol.io/jennywu)
  - [pdf](https://pdf.howardism.dev) - a web only PDF editor for adding personal signatures when in a rush designed by [Coral](https://2022.thef2e.com/users/12061549261449593305) (WIP)
  - [scrum](https://scrum.howardism.dev) - a website introducing [Scrum](https://www.atlassian.com/agile/scrum) workflow for agile software development, integrated with drag & drop features, designed by [邱仲德](https://2022.thef2e.com/users/12061549261446563754)
  - docs - summary landing page for f2e-2022 changes (WIP)
- `/packages` - this contains all shared packages used by all applications
  - eslint-config-f2e-2022: shared [ESLint](https://eslint.org) configuration files
  - jest-config: shared [JEST](https://jestjs.io) configuration files
  - tailwind-config: shared [Tailwindcss](https://tailwindcss.com) configuration files
  - tsconfig: shared [TypeScript](https://www.typescriptlang.org) configuration files
  - core - sharable UI components (WIP)
  - utils - sharable utility functions (WIP)

### Applications folder structure (for `f2e-2022` & `pdf`)

- src
  - pages - [React](https://reactjs.org) components with built-in route support
  - components - store all individual [React](https://reactjs.org) components
  - constants - shared fixed values for components
  - hooks - some utility hooks to encapsulate logic
  - styles - global CSS files with [Tailwindcss](https://tailwindcss.com) annotations
- public - all public static assets hosted on [Vercel Platform](https://vercel.com)
- test - [JEST](https://jestjs.io) unit test for each page
- \_\_mock\_\_ - mocked 3rd party libraries when testing with [JEST](https://jestjs.io)

### Applications folder structure (for `scrum`)

Please refer to [next.js appDir](https://beta.nextjs.org/docs/routing/fundamentals) and routing. Basically it is similar to [feature folders](https://redux.js.org/faq/code-structure#what-should-my-file-structure-look-like-how-should-i-group-my-action-creators-and-reducers-in-my-project-where-should-my-selectors-go) structure recommended by [redux doc](https://redux.js.org/faq/code-structure#what-should-my-file-structure-look-like-how-should-i-group-my-action-creators-and-reducers-in-my-project-where-should-my-selectors-go)

## Getting Started

### Running environments

- OS: [macOS Monterey 12.0.1](https://www.apple.com/macos/monterey/) Apple chip or [Ubuntu 20.04.2 LTS](https://ubuntu.com)
- [Node.js](https://nodejs.org/en/): v16.16.0
- [pnpm](https://pnpm.io): v7.14.1

### Environmental Variables

Checkout to individual `apps` folder, copy required environmental variables in `.env.production` into `.env.local` and fill each empty field

e.g. for `animated-landing`

```bash
cp apps/animated-landing/.env.production apps/animated-landing/.env.local
vi apps/animated-landing/.env.local # update required fields and save
```

### Starting the applications

Run corresponding [commands](#useful-commands) with respective application name

#### Development

e.g. for `animated-landing`

```bash
pnpm i
pnpm dev:animated-landing
```

You should be able to visit [localhost:3002](http://localhost:3002) to view the application successfully

#### Production

e.g. for `animated-landing`

```bash
pnpm i
pnpm build:animated-landing
pnpm start:animated-landing
```

You should be able to visit [localhost:3000](http://localhost:3002) to view the application successfully

## Dependencies

This project will mainly follow the dependencies of [turbo-monorepo-template](https://github.com/Howard86/turbo-monorepo-template), while installing individual tools specific for each `apps` or `packages`

### Common dependencies

1. [React](https://reactjs.org): v18
2. [Next.js](https://nextjs.org): v13
3. [Tailwindcss](https://chakra-ui.com)
4. [headless UI](https://headlessui.com)
5. [heroicons](https://heroicons.com)
6. [clsx](https://www.npmjs.com/package/clsx)

### Development dependencies

1. [TypeScript](https://www.typescriptlang.org/)
2. [ESLint](https://eslint.org/) with [Airbnb config](https://github.com/iamturns/eslint-config-airbnb-typescript)
3. [Prettier](https://prettier.io/) with [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
4. Pre-commit & pre-push git hooks powered by [lint-staged](https://github.com/okonet/lint-staged) and [husky](https://typicode.github.io/husky/#/)
5. [Commitlint](https://commitlint.js.org/#/)
6. [Turborepo](https://turbo.build/repo)
7. [JEST](https://jestjs.io/)

### Application specific dependencies

- Animated Landing

  1. [Framer Motion](https://www.framer.com/motion)

- PDF\*

  1. [PDF.js](https://mozilla.github.io/pdf.js/)
  2. [zustand](https://github.com/pmndrs/zustand)
  3. [Fabric.js](http://fabricjs.com)
  4. [jsPDF](https://github.com/parallax/jsPDF)
  5. [react-icons](https://react-icons.github.io/react-icons/)

- Scrum

  1.  [@hello-pangea/dnd](https://github.com/hello-pangea/dnd)

> \* Note: `Fabric.js` will install peer dependency [node-canvas](https://www.npmjs.com/package/canvas), which requires additional setup depending on your local OS. Please refer to [readme](https://github.com/Automattic/node-canvas#compiling) for more reference.

## Useful commands

- `pnpm build` - Build all apps & packages
  - `pnpm build:$APP_NAME` - Build app with specified APP_NAME and dependent packages in watch mode
- `pnpm dev` - Develop all apps & packages in watch mode
  - `pnpm dev:$APP_NAME` - Develop app with specified APP_NAME and dependent packages in watch mode
- `pnpm test` - Test all packages
- `pnpm lint` - Lint all packages
- `pnpm changeset` - Generate a changeset
- `pnpm clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)

## Versioning and Publishing packages

Package publishing has been configured using [Changesets](https://github.com/changesets/changesets). Please review their [documentation](https://github.com/changesets/changesets#documentation) to familiarize yourself with the workflow.

This example comes with automated npm releases setup in a [GitHub Action](https://github.com/changesets/action). To get this working, you will need to create an `NPM_TOKEN` and `GITHUB_TOKEN` in your repository settings. You should also install the [Changesets bot](https://github.com/apps/changeset-bot) on your GitHub repository as well.

For more information about this automation, refer to the official [changesets documentation](https://github.com/changesets/changesets/blob/main/docs/automating-changesets.md)

## Deployment

All apps will be deployed on [Vercel](https://vercel.com) with a custom subdomain under `howardism.dev`

## License

All rights reserved.
