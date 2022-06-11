# Decision Tree Explorer

A project to help you visually explore decision trees!

![Mushroom Example](/docs/mushrooms-example.png?raw=true 'Mushroom Example')

## Developing

First, make sure you have [pnpm](https://pnpm.io/) installed. If not you can install it with npm:

```bash
npm install -g pnpm
```

Clone this project with the following command

```bash
git clone https://github.com/luxbe/decision-tree-explorer
```

Once you've cloned the project and installed dependencies with `pnpm install`, start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
