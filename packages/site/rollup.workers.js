import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-builtins';
import builtins from 'rollup-plugin-node-globals';

const dev = true;

// bundle workers
export default ['compiler', 'bundler'].map((x) => ({
	input: `src/components/Repl/workers/${x}/index.js`,
	output: {
		file: `static/workers/${x}.js`,
		format: 'iife',
	},
	plugins: [
		resolve({
			browser: true,
		}),

		json(),
		terser(),
		commonjs(),
		globals(),
		builtins(),
	],
}));
