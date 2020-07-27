import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
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
		resolve(),
		babel({
			exclude: 'node_modules/**'
		})
	]
};
