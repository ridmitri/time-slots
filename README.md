# Time slots micro app

The app fetches CSV from a public spreadsheet and renders available time slots.

## Installation

`npm install`

## Get started

1. `npm start`
2. open http://localhost:3000

## Architecture

### Tech stack

- React
- Typescript
- Styled components
- Vite

### Code Quality tools

- Automated code style by Prettier
- Automated linting by Eslint based on [Airbnb eslint config](https://www.npmjs.com/package/eslint-config-airbnb)
- Static typing by Typescript

[Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged#readme) modules hook to git and run automated checks locally on pre-commit.

[Renovate bot](https://docs.renovatebot.com/#why-use-renovate) provides automated updates for node deps for Github hosted repositories. I prefer Renovate to Dependabot, as the former can update multiple packages in a single PR thanks to its [Noise reduction feature](https://docs.renovatebot.com/noise-reduction/).

Editorconfig assures standardized file formatting across different code editors.

Github workflow `checks.yml` runs quality checks and tests the build on every push.

### Builder

[Vite](https://vitejs.dev/) is a next generation frontend tooling developed and maintained by Vue.js community.

- well maintained and being used as a default solution in a major framework
- takes advantage of fast [Golang EcmaScript compiler](https://esbuild.github.io/) and [Rollup](https://rollupjs.org/guide/en/) plugins ecosystem
- has minimal configuration

### Testing

[Vitest](https://vitest.dev/) is a replacement for [Jest](https://jestjs.io/) for projects based on Vite. Migration from Jest to Vitest is seamless as the Vitest API is [compatible with Jest](https://vitest.dev/guide/migration.html#migrating-from-jest).

### Data fetching

Even though it may seem like an overkill for the task I decided to demonstrate my general approach for data fetching and advanced tooling for API emulation in browsers.

[MSW library](https://mswjs.io/) mocks backend and provides the same debugging experience as real API calls - [inspect Network request in devtools](https://mswjs.io/docs/#why-service-workers). It also [replaces fetch mocking](https://kentcdodds.com/blog/stop-mocking-fetch) in integration tests.

[React-query](https://react-query.tanstack.com/) is a library for managing server state, it uses the stale-while-revalidate caching strategy and replaces general purpose state management libraries like [Redux](https://redux.js.org/).


