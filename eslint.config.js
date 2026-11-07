import js from "@eslint/js"
import globals from "globals"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import prettier from "eslint-config-prettier"

export default [
  { ignores: ["node_modules/**", "public/**", "tmp/**"] },
  js.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  reactHooks.configs.flat.recommended,
  prettier,
  {
    files: ["app/frontend/**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      globals: { ...globals.browser },
    },
    settings: { react: { version: "detect" } },
    rules: {
      "react/prop-types": "off",
      // textes en français : les apostrophes restent lisibles dans le JSX
      "react/no-unescaped-entities": "off",
    },
  },
]
