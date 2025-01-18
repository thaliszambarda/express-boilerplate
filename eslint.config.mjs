import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import typescriptEslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      parser: typescriptEslint.parser,
      parserOptions: {
        project: true,
      },
      ecmaVersion: "latest",
      globals: globals.node,
    },
    plugins: {
      prettier: eslintPluginPrettier,
      "@typescript-eslint": typescriptEslint.plugin,
    },
    rules: {
      "class-methods-use-this": "off",
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "prettier/prettier": "error",
      "@typescript-eslint/await-thenable": "error",
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...eslintPluginPrettier.configs.recommended.rules,
      ...prettierConfig.rules,
    },
    ignores: ["**/node_modules/*", "**/out/*", "coverage", "dist"],
  },
];
