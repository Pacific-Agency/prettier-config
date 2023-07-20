/** @type {import('prettier').Config} */
module.exports = {
  htmlWhitespaceSensitivity: "ignore",
  jsonRecursiveSort: true,
  plugins: [
    require("prettier-plugin-sort-json"),
    require("prettier-plugin-css-order"),
    require("prettier-plugin-packagejson"),
    require("prettier-plugin-tailwindcss"),
  ],
  semi: false,
  trailingComma: "es5",
}
