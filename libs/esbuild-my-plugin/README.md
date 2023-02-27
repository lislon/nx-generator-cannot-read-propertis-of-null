# shared-build-plugins-esbuild-plugin-strip-out-css-imports

This plugin helps to remove a vite warning during build:
```
Default and named imports from CSS files are deprecated. Use the ?inline query instead.
```
This is happens because there are imports of .scss from `node_modules/@natera/material/*` and its exported as common-js module, which makes a false-positive warning.

For more details see https://github.com/vitejs/vite/discussions/12101

At the time of writing, portals includes common-ui `.scss` by `@use` scss directive. If common-ui will be exported in ESM, probably it will be possible to automatically include `.scss`.

### Why this plugin is written in `.js`, instead of `.ts`?
See https://github.com/vitejs/vite/issues/5370
