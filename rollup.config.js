// @ts-check

import * as babelPlugin from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { globbySync } from 'globby';
import { defineConfig } from 'rollup';

const extensions = ['.js', '.ts'];
const DIST_DIR = './dist/';

const baseConfig = defineConfig({
  // All directories with a "index.ts" file in `packages` are treated as entry points.
  input: globbySync('./packages/**/index.ts', { deep: 2 }),
  // Treats all "node_modules" as externals and are not bundled
  // delete this line to bundle them
  external: [/node_modules/],
  plugins: [
    resolve({ extensions }),
    commonjs(),

    babelPlugin.babel({
      babelrc: true,
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions: ['.js', '.ts'],
    }),
  ],
  output: {
    dir: DIST_DIR,
    format: 'esm',
    sourcemap: true,
    sourcemapExcludeSources: true,
    preserveModules: true,
  },
});

/** @returns {import('rollup').RollupOptions[]} */
export default () => {
  return defineConfig([baseConfig]);
};
