/** @type {import('prettier').Config} */
module.exports = {
  htmlWhitespaceSensitivity: "ignore",
  plugins: [require("prettier-plugin-packagejson")],
  semi: false,
  singleQuote: false,
  trailingComma: "es5",
}
