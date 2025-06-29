# me-in-bytes 🚀

> **WIP**: This project is a work in progress and currently in its early development phase.

## Features

🔆 Dark & Light Mode Support

This project offers full support for both Light and Dark themes, drawing inspiration from the beautiful Catppuccin color palettes:
• Light Mode is based on the **Catppuccin _/ˌkætpʊˈtʃiːn/_ Frappé flavor**, featuring soft background tones and pastel highlights for a calm and legible interface.
• Dark Mode follows the **Catppuccin _/ˌkætpʊˈtʃiːn/_ Mocha flavor**, delivering a comfortable low-light experience with rich contrast and gentle hues.

You can toggle themes dynamically without a page reload, making for a smooth, modern user experience.

All color values are managed using CSS custom properties, enabling seamless theme switching via the data-theme attribute. Core UI elements—text, icons, focus states, and error views—are carefully tuned per theme to maintain both beauty and usability.

🎨 [catppuccin.com](https://catppuccin.com/) is built and maintained by the community at [catppuccin/website](https://catppuccin.com/).

💌 Huge thanks to the Catppuccin team, its maintainers, and all contributors.

## 📚 Tech Stack

This project is built using a modern, focused stack centered around Astro, TypeScript, and well-considered developer tooling.

### 🌐 Frontend Framework

- **[Astro](https://astro.build/)** (`astro@^5.10.0`) — The core web framework powering this project, designed for fast and content-rich websites.
- **[Vanilla CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)** — Styling is written using standard CSS, to build a strong foundational understanding of styling fundamentals before introducing tools like Tailwind or other CSS utility.

### ⚡ Runtime & Package Manager

- **[Bun](https://bun.sh/)** — An all-in-one JavaScript runtime

### 📦 Core Dependencies

- **[TypeScript](https://www.typescriptlang.org/)** (`^5.8.3`) — Used to bring static typing to JavaScript for safer, more scalable development.
- **[@astrojs/check](https://github.com/withastro/astro/tree/main/packages/integrations/check)** — Provides type-safe diagnostics and config validation for Astro projects.
- **[prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro)** — Enables Prettier formatting support for `.astro` files.

### 🛠️ Dev & Tooling

- **[@astrojs/ts-plugin](https://github.com/withastro/astro/tree/main/packages/integrations/ts-plugin)** — TypeScript plugin that adds Astro component type support.
- **[ESLint](https://eslint.org/)** — Ensures consistent code quality and enforces style standards.
  - `@eslint/js`, `@eslint/eslintrc`, `@typescript-eslint/parser`, `eslint-plugin-astro`, `eslint-plugin-jsx-a11y`
- **[Prettier](https://prettier.io/)** — Code formatter used across all supported file types for consistency.
- **[jiti](https://github.com/unjs/jiti)** — A lightweight runtime interpreter for loading modules on-the-fly.

## 🪪 License

## This project is licensed under the MIT License
