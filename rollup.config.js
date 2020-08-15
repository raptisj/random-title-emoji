import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';

export default {
	input: 'package/index.js',
	output: {
		file: pkg.main,
		format: 'cjs',
		sourcemap: true
	},
	external: ['react', 'react-helmet'],
	plugins: [
		babel({
			exclude: 'node_modules/**'
		}),
		resolve(),
		uglify()
	]
};
