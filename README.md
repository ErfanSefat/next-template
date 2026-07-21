# Next.js Template

A reusable Next.js starter template with a modern development setup.

## Included

The `main` branch contains:

- Next.js
- TypeScript
- ESLint
- Prettier
- Husky
- lint-staged
- eslint-plugin-import
- eslint-config-prettier
- prettier-plugin-tailwindcss

## Branches

### `main`

The minimal template with development tooling only.

Use this branch if you don't need global state management.

### `rtk`

Includes everything from `main` plus a complete Redux Toolkit setup.

Features:

- Redux Toolkit
- React Redux
- Store configuration
- Typed `useAppDispatch` and `useAppSelector` hooks
- Providers component integrated into the App Router
- RTK Query base API
- Sample query
- Sample mutation
- Sample theme slice

## Using the RTK branch

If you've already created a project from the `main` branch and later decide you
need Redux Toolkit, merge the `rtk` branch into your project.

```bash
git remote add template https://github.com/erfansefat/next-template.git
git fetch template
git merge template/rtk
```

Alternatively, if you know you'll need Redux Toolkit from the beginning, simply
create your project from the `rtk` branch instead of `main`.
