<div align="center"><a href="https://sikessem.com/" title="Sikessem"><img src="https://github.com/sikessem/.github/blob/HEAD/sikessem.svg" alt="Sikessem logo" height="256"/></a></div>
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

[actions-img]: https://img.shields.io/github/actions/workflow/status/sikessem/js-skeleton/tests.yml?branch=main&style=for-the-badge
[actions-url]: https://github.com/sikessem/js-skeleton/actions "Skeleton status"

[ts-img]: https://img.shields.io/badge/TypeScript-294E80.svg?style=for-the-badge&logo=typescript
[ts-url]:  https://github.com/sikessem/js-skeleton/search?l=typescript "TypeScript code"

[js-img]: https://img.shields.io/badge/JavaScript-yellow.svg?style=for-the-badge&logo=javascript
[js-url]:  https://github.com/sikessem/js-skeleton/search?l=javascript "JavaScript code"

[npm-img]: https://img.shields.io/npm/v/@sikessem/create-skeleton/latest.svg?style=for-the-badge&logo=npm
[npm-url]: https://www.npmjs.com/package/@sikessem/create-skeleton/v/latest "npm"

[dl-img]: https://img.shields.io/npm/dt/@sikessem/create-skeleton?style=for-the-badge
[dl-url]: https://npmjs.com/package/@sikessem/create-skeleton

[l-img]: https://img.shields.io/npm/l/@sikessem/js-skeleton?color=blueviolet&style=for-the-badge
[l-url]: [license-url] "MIT License"

[pr-img]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?color=brightgreen&style=for-the-badge
[pr-url]: [contrib-url] "PRs welcome!"

[synk-img]: https://img.shields.io/snyk/vulnerabilities/github/sikessem/js-skeleton?label=Synk%20Vulnerabilities&style=for-the-badge
[synk-url]: https://snyk.io/test/github/sikessem/js-skeleton?targetFile=package.json "synk"

[conduct-url]: https://github.com/sikessem/.github/blob/main/CODE_OF_CONDUCT.md
[contrib-url]: https://github.com/sikessem/.github/blob/HEAD/CONTRIBUTING.md
[discuss-url]: https://github.com/sikessem/community/discussions
[license-url]: https://github.com/sikessem/js-skeleton/blob/HEAD/LICENSE

# ️📦 Sikessem TS/JS Skeleton

Sikessem's TypeScript/JavaScript Skeleton allows you to create JavaScript packages using Vite, Vitest and TailwindCSS.

## 🔖 Contents

- [Requirements](#-requirements)
- [Installation](#%EF%B8%8F-installation)
- [Usage](#-usage)
- [Testing](#-testing)
- [Contribution](#-contribution)
- [Security Reports](#-security-reports)

## 📋 Requirements

> - **Requires [Node JS 18+](https://nodejs.org/)** (at least 18.12.1 recommended to avoid potential bugs).
> - **Requires [pnpm@7.18.2](https://pnpm.io/)** to manage JS and TS dependencies.

## ⚡️ Installation

Install [Skeleton](https://npmjs.com/package/@sikessem/create-skeleton) using [pnpm](https://pnpm.io/):

```shell
pnpm create @sikessem/skeleton
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
php artisan serve --host=ahlabik.test --port=80
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

The main purpose of this repository is to continue evolving Skeleton. We want to make contributing to this project as easy and transparent as possible, and we are grateful to the community for contributing bug fixes and improvements. Read below to learn how you can take part in improving Skeleton.

### [Code of Conduct][conduct-url]

Sikessem has adopted a Code of Conduct that we expect project participants to adhere to.
Please read the [full text][conduct-url] so that you can understand what actions will and will not be tolerated.

### 👥 [Contributing Guide][contrib-url]

Read our [**Contributing Guide**][contrib-url] to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to Skeleton.

### 🔒️ Good First Issues

We have a list of [good first issues][gfi] that contain bugs which have a relatively limited scope. This is a great place to get started, gain experience, and get familiar with our contribution process.

[gfi]: https://github.com/sikessem/js-skeleton/labels/good%20first%20issue

### 💬 Discussions

Larger discussions and proposals are discussed in [**@sikessem/community**][discuss-url].

## 🔐 Security Reports

If you discover a security vulnerability within Skeleton, please email [SIGUI Kessé Emmanuel](https://github.com/SIGUIKE) at [ske@sikessem.com](mailto:ske@sikessem.com). All security vulnerabilities will be promptly addressed.

## 📄 License

Skeleton is MIT licensed, as found in the [LICENSE][license-url] file.

***

Skeleton was developed by [Sikessem](https://sikessem.com).
