<div align="center"><a href="https://sikessem.com/" title="Sikessem"><img src="https://github.com/sikessem/art/blob/HEAD/images/sikessem.svg" alt="Sikessem logo" height="256"/></a></div>
<div align="center">

[![actions-img]][actions-url]
[![ts-img]][ts-url]
[![js-img]][js-url]
[![npm-img]][npm-url]
[![dl-img]][dl-url]
[![l-img]][l-url]
[![pr-img]][pr-url]
[![synk-img]][synk-url]

</div>
<div align="center"><sub>Built with ❤︎ by <a href="https://twitter.com/sikessem_tweets">Sikessem</a>.</sub></div>

[actions-img]: https://img.shields.io/github/actions/workflow/status/sikessem/testwind/tests.yml?branch=main&style=for-the-badge
[actions-url]: https://github.com/sikessem/testwind/actions "Testwind status"

[ts-img]: https://img.shields.io/badge/TypeScript-294E80.svg?style=for-the-badge&logo=typescript
[ts-url]:  https://github.com/sikessem/testwind/search?l=typescript "TypeScript code"

[js-img]: https://img.shields.io/badge/JavaScript-yellow.svg?style=for-the-badge&logo=javascript
[js-url]:  https://github.com/sikessem/testwind/search?l=javascript "JavaScript code"

[npm-img]: https://img.shields.io/npm/v/testwind/latest.svg?style=for-the-badge&logo=npm
[npm-url]: https://www.npmjs.com/package/testwind/v/latest "npm"

[dl-img]: https://img.shields.io/npm/dt/testwind?style=for-the-badge
[dl-url]: https://npmjs.com/package/testwind

[l-img]: https://img.shields.io/npm/l/testwind?color=blueviolet&style=for-the-badge
[l-url]: [license-url] "MIT License"

[pr-img]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?color=brightgreen&style=for-the-badge
[pr-url]: [contrib-url] "PRs welcome!"

[synk-img]: https://img.shields.io/snyk/vulnerabilities/github/sikessem/testwind?label=Synk%20Vulnerabilities&style=for-the-badge
[synk-url]: https://snyk.io/test/github/sikessem/testwind?targetFile=package.json "synk"

[conduct-url]: https://github.com/sikessem/.github/blob/main/CODE_OF_CONDUCT.md
[contrib-url]: https://github.com/sikessem/.github/blob/HEAD/CONTRIBUTING.md
[discuss-url]: https://github.com/sikessem/community/discussions
[license-url]: https://github.com/sikessem/testwind/blob/HEAD/LICENSE

# ️🧪 Testwind

Quickly test TailwindCSS codes, components, utilities with Vite, Vitest and TailwindCSS.

## 🔖 Contents

- [️🧪 Testwind](#️-testwind)
  - [🔖 Contents](#-contents)
  - [📋 Requirements](#-requirements)
  - [⚡️ Installation](#️-installation)
  - [🏗️ Project Structure](#️-project-structure)
  - [🧑‍💻 Usage](#-usage)
    - [🌐 Starting server](#-starting-server)
  - [🧪 Testing](#-testing)
  - [👏 Contribution](#-contribution)
    - [Code of Conduct](#code-of-conduct)
    - [👥 Contributing Guide](#-contributing-guide)
    - [🔒️ Good First Issues](#️-good-first-issues)
    - [💬 Discussions](#-discussions)
  - [🔐 Security Reports](#-security-reports)
  - [📄 License](#-license)

## 📋 Requirements

> - **Requires [Node JS 18+](https://nodejs.org/)** (at least 18.13.0 recommended to avoid potential bugs).
> - **Requires [pnpm@7.25.0](https://pnpm.io/)** to manage JS and TS dependencies.

## ⚡️ Installation

Install [Testwind](https://npmjs.com/package/testwind) using [pnpm](https://pnpm.io/):

```shell
pnpm add -D testwind
```

## 🏗️ Project Structure

Below is the basic JavaScript skeleton architecture for a new Sikessem module.

Inside your project, you'll see the following directory structure:

```tree
├── public/
│   └── ...
├── src/
│   └── ...
└── tests/
    └── ...
```

- `src`: Provides project source files (components, plugins, etc.)

- `tests`: Tests directory (unit, E2E, etc.)

- `public`: Any static assets, like images, can be placed in the public directory.

## 🧑‍💻 Usage

### 🌐 Starting server

Run the server in development mode:

```bash
pnpm start
```

## 🧪 Testing

- 🧹 Keep a modern codebase with **Prettier**:

    ```shell
    pnpm test:lint
    ```

- ⚗️ Run static analysis using **ESLint**:

    ```shell
    pnpm test:fmt
    ```

- ✅ Run unit tests using **VITEST**

    ```shell
    pnpm test:unit
    ```

- 🚀 Run the entire test suite:

    ```shell
    pnpm test
    ```

## 👏 Contribution

The main purpose of this repository is to continue evolving Testwind. We want to make contributing to this project as easy and transparent as possible, and we are grateful to the community for contributing bug fixes and improvements. Read below to learn how you can take part in improving Testwind.

### [Code of Conduct][conduct-url]

Sikessem has adopted a Code of Conduct that we expect project participants to adhere to.
Please read the [full text][conduct-url] so that you can understand what actions will and will not be tolerated.

### 👥 [Contributing Guide][contrib-url]

Read our [**Contributing Guide**][contrib-url] to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to Testwind.

### 🔒️ Good First Issues

We have a list of [good first issues][gfi] that contain bugs which have a relatively limited scope. This is a great place to get started, gain experience, and get familiar with our contribution process.

[gfi]: https://github.com/sikessem/testwind/labels/good%20first%20issue

### 💬 Discussions

Larger discussions and proposals are discussed in [**@sikessem/community**][discuss-url].

## 🔐 Security Reports

If you discover a security vulnerability within Testwind, please email [SIGUI Kessé Emmanuel](https://github.com/siguikesse) at [emmanuel@kesse.sigui.ci](mailto:emmanuel@kesse.sigui.ci). All security vulnerabilities will be promptly addressed.

## 📄 License

Testwind is MIT licensed, as found in the [LICENSE][license-url] file.

***

Testwind was developed by [Sikessem](https://sikessem.com).
