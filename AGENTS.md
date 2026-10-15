## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Project

Aksiri AI company website. Astro, static output, no framework components.
Pages: `src/pages/*.astro`. Shared layout and global styles: `src/layouts/Layout.astro`.
Header comes from `@sofidevo/astro-dynamic-header` (never edit `node_modules`).

## Theme

- Dark is the default. Light is an option the visitor picks with the toggle in the header.
- The toggle sets both `html.dark` (the header package reads this class) and
  `html[data-theme]`. The choice is saved in `localStorage` under `theme`.
- Color tokens live in `Layout.astro`: `:root` holds the dark palette and
  `:root[data-theme="light"]` overrides it. Tokens: `--bg`, `--surface`,
  `--surface-glass`, `--border`, `--text`, `--text-muted`, `--accent`,
  `--accent-2`, `--hero-glow`.
- Never hard-code colors in pages or components. Use the tokens, or add a new
  token to both palettes. Check every change in both themes.
- Do not add a second theme system, toggle component or theme script.

## Rules

- Keep every page working on phones (check at 400px width).
- Do not add new npm packages without saying why.
- Do not invent statistics, client names or testimonials.
- Keep changes small and focused on the task.
- The site is served from a sub-path (/aksiri-website on GitHub Pages). Write every
  internal link as `href={url('/contact')}` with `import { url } from '../utils/url'`,
  never a bare `href="/contact"`.

## Definition of done

1. `npm run build` passes with no errors.
2. Changes are committed on a branch named `task/<short-name>`, never on `main`.
3. Final message lists the files changed and how to check the result.
