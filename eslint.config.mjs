import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),

  eslintConfigPrettier,

  {
    plugins: {
      import: importPlugin,
    },

    rules: {
      // Ensure imports are grouped and sorted.
      "import/order": [
        "error",
        {
          "groups": [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
            "object",
            "type",
          ],
          "newlines-between": "always",
          "alphabetize": {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      // Prevent duplicate imports.
      "import/no-duplicates": "error",

      // Require a blank line after imports.
      "import/newline-after-import": "error",

      // Imports must appear before other statements.
      "import/first": "error",

      // Prefer === and !==.
      "eqeqeq": "error",

      // Remove unnecessary else after return.
      "no-else-return": "error",

      // Prefer object shorthand.
      "object-shorthand": "error",

      // Prefer const whenever possible.
      "prefer-const": "error",

      // Warn about unused variables.
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
]);

export default eslintConfig;
