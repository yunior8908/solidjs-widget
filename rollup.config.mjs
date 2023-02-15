import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";

const extensions = [".ts", ".tsx"];

export default {
  input: "./src/index.tsx",
  output: {
    file: "dist/widget.mjs",
    format: "es",
  },
  external: [],
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    resolve({ extensions }),
    babel({
      exclude: "node_modules/**",
      presets: ["solid", "@babel/preset-typescript"],
      extensions,
    }),
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css"],
      minimize: true,
      inject: {
        insertAt: "top",
      },
    }),
    terser({ output: { comments: false } }),
  ],
};
