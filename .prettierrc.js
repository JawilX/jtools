module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  printWidth: 100,
  singleQuote: true,
  semi: false,
  arrowParens: 'avoid',
  // https://prettier.io/blog/2018/11/07/1.15.0.html#whitespace-sensitive-formatting
  htmlWhitespaceSensitivity: 'ignore',
}
